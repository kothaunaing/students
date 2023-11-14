const searchBtnElement = document.querySelector('.search-btn');
const searchBarElement = document.querySelector('.search-bar');
const searchBySelectElement = document.querySelector('.search-by');

let foundStudent = [];

searchBtnElement.addEventListener('click', () => {
  searchStudents();
  displayFoundStudents();
});

searchBarElement.addEventListener('input', (e) => {
  searchStudents();
});

searchBarElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchStudents();
    displayFoundStudents();
  }
});


function searchStudents() {
  const name = searchBarElement.value.toLowerCase();
  const searchBy = searchBySelectElement.value;

  if (searchBy === 'By name') {
    foundStudent = allStudents.filter((student) => {
      const studentName = student.name.toLowerCase();
      if (studentName.includes(name)) {
        return true;
      }
    });
  }
  else if (searchBy === 'By grade') {
    foundStudent = allStudents.filter((student) => {
      const studentGrade = student.grade.toLowerCase();
      if (studentGrade.includes(name)) {
        return true;
      }
    });
  }
  else if (searchBy === 'By age') {
    foundStudent = allStudents.filter((student) => {
      const studentAge = String(student.age);
      if (studentAge.includes(name)) {
        return true;
      }
    });
  }
  else if (searchBy === 'By keyword') {

    foundStudent = allStudents.filter((student) => {
      let found = false;
      student.keyword.forEach((keyword) => {
        if (keyword.toLowerCase().includes(name)) {
          found = true;
        }
      });
      return found;
    });
  }
}


function displayFoundStudents() {
  let finalHTML = '';;
  foundStudent.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  foundStudent.forEach((student, index) => {
    const { name, age, image, grade } = student;
    finalHTML += `
      <div class="student">
      <div class="number">${index + 1}</div>
        <div>
          <img src="images/${image}" class="student-pic">
        </div>
        <div class="student-info">
          <div>${name}</div>
          <div>${age} years old</div>
          <div>${grade}</div>
        </div>
      </div>
      `;
  });

  let message;

  if (foundStudent.length <= 1) {
    message = `Found ${foundStudent.length} student`;
  } else {
    message = `Found ${foundStudent.length} students`;
  }

  appDisplayElement.innerHTML = `
    <div class="nav-bar">
    <button class="grade-back-btn">
      <img class="back-icon" src="images/back-icon.png">
    </button>
    <div class="total-student">${message}</div>
    </div>
      <div class="display-students">
       ${finalHTML}
       </div>
     `;

  gradeBackBtn();

}