// CAPTURING INPUTS
// let inputDay = document.querySelector('.input-day');
// let inputMonth = document.querySelector('.input-month');
// let inputYear = document.querySelector('.input-year');
const [inputDay, inputMonth, inputYear] = document.querySelectorAll('input');

// CAPTURING PARAGRAPH ERROR
// let inputTextDay = document.querySelector('.inputTextDay');
// let inputTextMonth = document.querySelector('.inputTextMonth');
// let inputTextYear = document.querySelector('.inputTextYear');
const [inputTextDay, inputTextMonth, inputTextYear] =
  document.querySelectorAll('.inputText');

// CAPTURING DATE ERROR
// let inputDateDay = document.querySelector('.inputDateDay');
// let inputDateMonth = document.querySelector('.inputDateMonth');
// let inputDateYear = document.querySelector('.inputDateYear');
const [inputDateDay, inputDateMonth, inputDateYear] =
  document.querySelectorAll('.inputDate');

// CAPTURING LABELS
// let labelDay = document.querySelector('.labelDay');
// let labelMonth = document.querySelector('.labelMonth');
// let labelYear = document.querySelector('.labelYear');
const [labelDay, labelMonth, labelYear] = document.querySelectorAll('.label');

// VALIDATE TEXT INPUT
function validateInput(inputBox, showTexErrorClass) {
  if (!inputBox.value) {
    showTexErrorClass.style.display = 'block';
  } else {
    showTexErrorClass.style.display = 'none';
  }
}

// VALIDATE LABEL
function validateLabel(inputBox, showColorLabel) {
  if (!inputBox.value) {
    showColorLabel.classList.add('labelError');
  } else {
    showColorLabel.classList.remove('labelError');
  }
}

// VALIDATE DAY
function validateDay(inputBox, showDateErrorClass) {
  let inputDate = new Date(inputBox.value);
  let inputMonth = inputDate.getMonth() + 1;
  let inputYear = inputDate.getFullYear();
  let totalDaysInMonth = new Date(inputYear, inputMonth, 0).getDate();

  // Verifica se o dia fornecido pelo usuário é maior do que o número total de dias no mês
  if (parseInt(inputBox.value) > totalDaysInMonth) {
    showDateErrorClass.style.display = 'block';
  } else {
    showDateErrorClass.style.display = 'none';
  }
}

// VALIDATE MONTH
function validateMonth(inputBox, showDateErrorClass) {
  const inputValue = inputBox.value;
  if (inputValue === '0' || inputValue > 12) {
    showDateErrorClass.style.display = 'block';
  } else {
    showDateErrorClass.style.display = 'none';
  }
}

// VALIDATE YEAR
function validateYear(inputBox, showDateErrorClass) {
  const year = new Date().getFullYear();
  const minimumYear = 1920;
  const inputValue = parseInt(inputBox.value, 10);

  !inputValue || inputValue > year || inputValue < minimumYear
    ? (showDateErrorClass.style.display = 'block')
    : (showDateErrorClass.style.display = 'none');
}

// CAPTURING RESULT
const [resultYears, resultMonths, resultDays] =
  document.querySelectorAll('.result-age');

// RESULT FUNCTION
function resultAge() {
  // RESULT YEAR
  let currentYear = new Date().getFullYear();
  if (inputYear.value) {
    resultYears.innerHTML = currentYear - parseInt(inputYear.value);
  }

  // RESULT MONTHS
  if (inputMonth.value) {
    resultMonths.innerHTML = 12 - inputMonth.value;
  }

  // RESULT DAYS
  if (inputDay.value) {
    resultDays.innerHTML = 31 - inputDay.value;
  }
}

// CAPTURING BUTTON
const btnImg = document.querySelector('.svg-img img');

// CLICK EVENT
btnImg.addEventListener('click', (e) => {
  e.preventDefault();

  // EVENT INPUT ERROR
  validateInput(inputDay, inputTextDay);
  validateInput(inputMonth, inputTextMonth);
  validateInput(inputYear, inputTextYear);

  // EVENT SHOW LABEL ERROR
  validateLabel(inputDay, labelDay);
  validateLabel(inputMonth, labelMonth);
  validateLabel(inputYear, labelYear);

  // EVENT SHOW DATE ERROR
  validateDay(inputDay, inputDateDay);
  validateMonth(inputMonth, inputDateMonth);
  validateYear(inputYear, inputDateYear);

  if (inputDay.value && inputMonth.value && inputYear.value) {
    resultAge();
  }
});
