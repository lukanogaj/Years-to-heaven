/*Ja bym zrobil funkcje, ktora odlicza czas do retirementu, taki countdown clock i pokazal to na stronie z inputem daty urodzenia, czyli masz input, button i countdown,

Wpisujesz swoja date urodzenia (wliczajac miesiac i dzien) klikasz 'start countdown' i pokazuje Ci sie odliczanie do retirementu, ktore odlicza lata, dni, godziny, minuty, sekundy w formacie 10:234:17:54:22 */
const retireAge = 65;

// Select the elements
const btnBirthOfYear = document.querySelector('#btn-submit-dateOfBirth');
const btnTodayDate = document.querySelector('#btn-submit-todayDate');
// Select the value from the inputs
const todayDateValue = document.querySelector('#todayDate');
const birthDateValue = document.querySelector('#birthDate');
//  Add functionality to the buttons
// Todays date button
btnTodayDate.addEventListener('click', () => {
  btnTodayDate.classList.toggle('btn-change-colour');
  if (btnTodayDate.innerText === "Confirm today's date") {
    btnTodayDate.innerText = 'Date confirmed';
  } else {
    btnTodayDate.innerText = "Confirm today's date";
  }
});

// Birth of year button change the class
btnBirthOfYear.addEventListener('click', () => {
  btnBirthOfYear.classList.toggle('btn-change-colour');
  if (btnBirthOfYear.innerText === 'Calculate years to retire') {
    btnBirthOfYear.innerText = 'Calculating';
  } else {
    btnBirthOfYear.innerText = 'Calculate years to retire';
  }
  // const yearsToRetire = function (currentDate, birthYear, retireAge) {
  //   const age = todayDateValue.value - birthDateValue.value;
  //   return retireAge - age;
  // };
});

// Functions to calculate years to retire

const yearsToRetire = function (currentDate, birthDateValue, retireAge) {
  const age = todayDateValue.value - birthDateValue.value;
  console.log(age);
};

console.log(
  yearsToRetire(todayDateValue.value, birthDateValue.value) - retireAge
);

// console.log(yearsToRetire());

// Checking if the value is submited and create the function to calc

// Checking and the debbuing
console.log(todayDateValue.value, birthDateValue.value);
