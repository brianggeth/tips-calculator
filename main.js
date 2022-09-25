//  Update Bill Amount
let bill = document.querySelector('.inputs-section__bill-input');
let billValue = 100;
bill.addEventListener('input', (event) => {
  billValue = event.target.value;
  showResult(billValue, tipPercent, peopleValue);
});

// Alerta de error
let alert = document.querySelector('#alert');

//  Update People Amount
let people = document.querySelector('.inputs-section__people-input');
let peopleValue = 5;
people.addEventListener('input', (event) => {
  peopleValue = event.target.value;

  if (peopleValue <= 0 || isNaN(peopleValue)) {
    people.style.borderColor = 'red';
    alert.classList.add('error');
  } else {
    people.style.border = '2px solid hsl(172, 67%, 45%)';
    alert.classList.remove('error');
    showResult(billValue, tipPercent, peopleValue);
  }
});

//  Select Tip Percent
let buttons = document.querySelectorAll('.btns__btn');
let tipPercent = 5;

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    buttons.forEach((btn) => btn.classList.remove('btns__btn--active'));
    btn.classList.add('btns__btn--active');
    tipPercent = Number(event.target.innerText.slice(0, -1));
    showResult(billValue, tipPercent, peopleValue);
  });
});

//  Select Custom Tip Percent
let custom = document.querySelector('.btns__custom');
custom.addEventListener('input', (event) => {
  buttons.forEach((btn) => btn.classList.remove('btns__btn--active'));
  tipPercent = Number(event.target.value);
  showResult(billValue, tipPercent, peopleValue);
});

let reset = document.querySelector('.result-section__reset');
reset.addEventListener('click', (event) => {
  showResult(0, 0, 1);
});

//  Function to display the Total Amounts
const showResult = (amount, percentage, people) => {
  let tipResultPerson = document.querySelector('.results__tip-value');
  let tipResultTotal = document.querySelector('.results__total-value');

  let total = (amount * percentage) / 100;
  console.log(typeof total);

  tipResultPerson.innerHTML = (total / people).toFixed(2);
  tipResultTotal.innerHTML = Number(amount) + total;
};
