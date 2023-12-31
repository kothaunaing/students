import { foundStudents } from './search and autocomplete.js';

displayFoundStudents();

function displayFoundStudents() {
  const appDisplayElement = document.querySelector('.app-display');
  let studentsHTML = '';

  foundStudents.forEach((student, index) => {
    const { name, age, image, grade } = student;

    studentsHTML += `
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
  
  document.title = `Found ${foundStudents.length} students`;
  appDisplayElement.innerHTML = `
  <div class="nav-bar">
  <a href="index.html">
    <button class="grade-back-btn">
      <img class="back-icon" src="images/back-icon.png">
    </button>
  </a>
    <div class="grade-text"></div>
    <div class="total-student">Found ${foundStudents.length} students</div>
  </div>
  <div class="display-students">
    ${studentsHTML}
  </div>
  `;
}