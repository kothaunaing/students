export let foundStudents = JSON.parse(localStorage.getItem('found-students')) || [];

function addToFoundStudents(allStudents, autoCompleteItems) {
  const userInput = document.querySelector('.search-bar').value.toLowerCase() || 0;
  const searchBy = document.querySelector('.search-by').value.toLowerCase();

  if (searchBy === 'by name') {
    foundStudents = allStudents.filter((student) => {
      const { name } = student;
      if (name.toLowerCase().includes(userInput)) {
        return true;
      }
    });

    allStudents.forEach((student) => {
      const { name } = student;
      if (name.toLowerCase().includes(userInput)) {
        autoCompleteItems.push(name);
      }
    });
  }
  else if (searchBy === 'by grade') {
    foundStudents = allStudents.filter((student) => {
      const { grade } = student;
      if (grade.toLowerCase().includes(userInput)) {
        return true;
      }
    });
    clearSuggestion();
  }
  else if (searchBy === 'by age') {
    foundStudents = allStudents.filter((student) => {
      const { age } = student;
      if (String(age) === userInput) {
        return true;
      }
    });
    clearSuggestion();
  }

  else if (searchBy === 'by name 2') {
    foundStudents = allStudents.filter((student) => {
      const keywords = student.keyword;
      let include = false;
      keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(userInput)){
          include = true;
          if (keyword){
            autoCompleteItems.push(keyword);
          }
        }
      });

      if (include){
        return true;
      }

    });
  }
}

function foundStudentsHTML(autoCompleteItems) {

  let foundStudentsHTML = '';

  autoCompleteItems.forEach((name) => {
    foundStudentsHTML += `
    <div class="name">${name}</div>
    `;
  });

  document.querySelector('.name-container')
    .innerHTML = foundStudentsHTML || `<div class="no-suggestion">No suggestions !</div>`;

  autoFillName();
}

function resizeHTML() {
  if (foundStudents.length > 5) {
    document.querySelector('.name-container')
      .classList.add('name-container-resize');
  } else {
    document.querySelector('.name-container')
      .classList.remove('name-container-resize');
  }
}

export function showSuggestion() {
  document.querySelector('.autofill-container')
    .classList.add('autofill-active');
}

export function clearSuggestion() {
  document.querySelector('.autofill-container')
    .classList.remove('autofill-active');
}

function saveToStorage() {
  localStorage.setItem('found-students', JSON.stringify(foundStudents));
}

function autoFillName() {
  document.querySelectorAll('.name')
    .forEach((nameElement) => {
      nameElement.addEventListener('click', () => {
        const name = nameElement.innerText;
        document.querySelector('.search-bar').value = name;
        clearSuggestion();
      });
    });
}

export function autoComplete(allStudents) {
  let autoCompleteItems = [];
  addToFoundStudents(allStudents, autoCompleteItems);
  foundStudentsHTML(autoCompleteItems);
  resizeHTML();
  saveToStorage();
}