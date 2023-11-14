let students = [];
let allStudents = KG.concat(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8, grade9);
const appDisplayElement = document.querySelector('.app-display');

const grades = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'
];

document.querySelector('.left-section')
  .addEventListener('click', () => {
    homePage();
  });

homePage();

function homePage() {
  let finalHTML = '';

  grades.forEach((grade, i) => {
    finalHTML += `
    <div class="grade" data-grade="grade${i + 1}">${grade}</div>
    `;
  });

  appDisplayElement.innerHTML = `
  <div class="total">
  Total - ${allStudents.length} students
  </div>
  <div class="container">
    <div class="grade" data-grade="kg">KG</div>
    ${finalHTML}
</div>
  `;

  document.querySelectorAll('.grade')
    .forEach((gradeElement) => {

      gradeElement.addEventListener('click', () => {
        const grade = gradeElement.dataset.grade;
        checkGrade(grade);
        displayStudents();
      })

    });
}