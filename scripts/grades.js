let gradeText;

function checkGrade(grade) {
  if (grade === 'kg') {
    students = KG;
    gradeText = 'KG';
  }
  else if (grade === 'grade1') {
    students = grade1;
    gradeText = 'Grade 1';
  }
  else if (grade === 'grade2') {
    students = grade2;
    gradeText = 'Grade 2';
  }
  else if (grade === 'grade3') {
    students = grade3;
    gradeText = 'Grade 3';
  }
  else if (grade === 'grade4') {
    students = grade4;
    gradeText = 'Grade 4';
  }
  else if (grade === 'grade5') {
    students = grade5;
    gradeText = 'Grade 5';
  }
  else if (grade === 'grade6') {
    students = grade6;
    gradeText = 'Grade 6';
  }
  else if (grade === 'grade7') {
    students = grade7;
    gradeText = 'Grade 7';
  }
  else if (grade === 'grade8') {
    students = grade8;
    gradeText = 'Grade 8';
  }
  else if (grade === 'grade9') {
    students = grade9;
    gradeText = 'Grade 9';
  }
}

function displayStudents() {
  let finalHTML = '';
  students.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  students.forEach((student, index) => {
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
        </div>
      </div>
  `;
  });

  appDisplayElement.innerHTML = `
  <div class="nav-bar">
    <button class="grade-back-btn">
      <img class="back-icon" src="images/back-icon.png">
    </button>
    <div class="grade-text">${gradeText}</div>
    <div class="total-student">Total - ${students.length}</div>
  </div>
  <div class="display-students">
    ${finalHTML}
  </div>
  `;

  gradeBackBtn();

}

function gradeBackBtn(){
  foundStudent = [];
  document.querySelector('.grade-back-btn')
    .addEventListener('click', () => {
      homePage();
    });
}