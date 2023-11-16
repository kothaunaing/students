import { allStudents, calCurrentStudent, saveToStorage } from '../scripts/students.js';
import { autoComplete, showSuggestion, clearSuggestion } from './search and autocomplete.js';

homePageHTML();

// Generate HTML contents for home page START
function homePageHTML() {
  const appDisplayElement = document.querySelector('.app-display');

  let finalHTML = '';

  for (let i = 0; i < 9; i++) {
    finalHTML += `
    <a href="grade.html">
      <div class="grade" data-grade="grade${i + 1}">
        Grade ${i + 1}
      </div>
    </a> 
    `;
  }

  appDisplayElement.innerHTML = `
  <div class="total">
    Total - ${allStudents.length} students
  </div>
  <div class="container">
  <a href="grade.html">
    <div class="grade" data-grade="kg">
      KG
    </div>
  </a>
    ${finalHTML}
  </div>
  `;
}
// Generating HTML for home page END

// when you click one of the grades, first it will claculate the grade you clicked
// and Save that grade and students in that grade to localStorage

document.querySelectorAll('.grade')
  .forEach((gradeElement) => {
    gradeElement.addEventListener('click', () => {
      const grade = gradeElement.innerText;
      calCurrentStudent(grade);
      saveToStorage();
    });
  });


// Codes for Auto complete feature
const searchBarElement = document.querySelector('.search-bar');
searchBarElement.addEventListener('input', () => {
  autoComplete(allStudents);
});

searchBarElement.addEventListener('click', () => {
  showSuggestion();
});

document.querySelector('.app-display')
  .addEventListener('click', () => {
    clearSuggestion();
  });

document.querySelector('.search-btn')
  .addEventListener('click', () => {
    autoComplete(allStudents);
  });

