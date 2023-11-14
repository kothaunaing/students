const autofillElement = document.querySelector('.autofill-container');
const nameContainerElement = document.querySelector('.name-container');
const bodyElement = document.querySelector('.app-display');


searchBarElement.addEventListener('input', () => {
  showAutofill();
});

searchBarElement.addEventListener('click', () => {
  autofillElement.classList.add('autofill-active');
  searchBarElement.select();
});


bodyElement.addEventListener('click', () => {
  autofillElement.classList.remove('autofill-active');
});


searchBarElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const nameElement = document.querySelector('.name');
    searchBarElement.value = nameElement.innerHTML;
    showAutofill();
    searchStudents();
    displayFoundStudents();
    autofillElement.classList.remove('autofill-active');
  }
});


function showAutofill() {
  const searchBy = searchBySelectElement.value;
  const value = searchBarElement.value ? searchBarElement.value.toLowerCase() : 0;


  let autofillArray = [];

  if (searchBy === 'By keyword') {
    autofillElement.classList.add('autofill-active');
    allStudents.filter((student) => {
      const keywords = student.keyword;
      keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(value)) {
          if (autofillArray.length < 30) {
            autofillArray.push(keyword);
          }
        }
      })
    });
  }
  else if (searchBy === 'By name') {
    autofillElement.classList.add('autofill-active');

    allStudents.filter((student) => {
      const name = student.name;

      if (name.toLowerCase().includes(value)) {
        if (autofillArray.length < 30) {
          autofillArray.push(name);
        }
      }
    });
  }
  else {
    autofillElement.classList.remove('autofill-active');
  }

  let finalHTML = '';
  autofillArray.sort();

  autofillArray.forEach((keyword, i) => {
    finalHTML += `
    <div class="name">${keyword}</div>
    `;
  });

  if (autofillArray.length !== 0) {
    nameContainerElement.innerHTML = finalHTML;
  } else {
    nameContainerElement.innerHTML = `
    <p>No Suggestions !</p>
    `;
  }

  if (autofillArray.length > 6) {
    nameContainerElement.classList.add('name-container-height');
  } else {
    nameContainerElement.classList.remove('name-container-height');
  }

  const nameElement = document.querySelectorAll('.name');
  nameElement.forEach((name) => {
    name.addEventListener('click', () => {
      searchBarElement.value = name.innerHTML;
      showAutofill();
      searchStudents();
      displayFoundStudents();
      autofillElement.classList.remove('autofill-active');
    })
  });
}
