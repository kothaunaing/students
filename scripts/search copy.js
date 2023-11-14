const searchBtnElement = document.querySelector('.search-btn');
const searchBarElement = document.querySelector('.search-bar');
let foundStudent = [];
let found = false;

searchBtnElement.addEventListener('click', () => {
  searchStudents();
  displayFoundStudents();
});

searchBarElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchStudents();
    displayFoundStudents();
  }
});


function searchStudents() {
  const name = searchBarElement.value;

  if (name) {
    allStudents.forEach((student, index) => {
      if (name.toLowerCase() === student.name.toLowerCase()) {
        foundStudent.push(student);
        found = true;
      }
    });
  }

}


function displayFoundStudents() {
  let finalHTML = '';

  if (found) {

    foundStudent.forEach((student) => {
      const { name, age, image, grade } = student;
      finalHTML += `
      <div class="student">
        <div>
          <img src="images/${image}" class="student-pic">
        </div>
        <div class="student-info">
          <div>Name - ${name}</div>
          <div>Age - ${age}</div>
          <div>${grade}</div>
        </div>
      </div>
      `;
    });

    appDisplayElement.innerHTML = `
    <div class="nav-bar">
    <button class="grade-back-btn">
      <img class="back-icon" src="images/back-icon.png">
    </button>
    </div>
      <div class="display-students">
       ${finalHTML}
       </div>
     `;

    gradeBackBtn();
  }
  else {
    appDisplayElement.innerHTML = `
        <button class="grade-back-btn">
          <img class="back-icon" src="images/back-icon.png">
       </button>
        <div class="not-found-message">Not found !</div>
        `;
    gradeBackBtn();
  }

}