/*Ja bym zrobil funkcje, ktora odlicza czas do retirementu, taki countdown clock i pokazal to na stronie z inputem daty urodzenia, czyli masz input, button i countdown,

Wpisujesz swoja date urodzenia (wliczajac miesiac i dzien) klikasz 'start countdown' i pokazuje Ci sie odliczanie do retirementu, ktore odlicza lata, dni, godziny, minuty, sekundy w formacie 10:234:17:54:22 */

const retirement = 65;

// Select the elements
const btnBirthOfYear = document.querySelector('#btn-submit-dateOfBirth');

btnBirthOfYear.addEventListener('click', () => {
  btnBirthOfYear.classList.toggle('btn-change-colour');
});
// Add event listeners to the button to submit date to the calculator
// The funstion to calculate age (today' date minus date of birth)
// birthYear.addEventListener('click', () => {
//   birthYear.classList.toggle('btn-submit-dateOfBirth');
// });

// btnCalcAge.addEventListener('click', function () {
//   let currentDate = inputDate.value;
//   return currentDate - console.log(currentDate);
// });

// console.log(currentYear);
// Functions

// console.log(countDownDate);
