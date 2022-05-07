/*Ja bym zrobil funkcje, ktora odlicza czas do retirementu, taki countdown clock i pokazal to na stronie z inputem daty urodzenia, czyli masz input, button i countdown,

Wpisujesz swoja date urodzenia (wliczajac miesiac i dzien) klikasz 'start countdown' i pokazuje Ci sie odliczanie do retirementu, ktore odlicza lata, dni, godziny, minuty, sekundy w formacie 10:234:17:54:22 */

// Select the elements
const btnCalcAge = document.querySelector('#btnAgeRetire');
const inputDate = document.querySelector('#birthYear');

// Function to calculate the retire age
// const age = (age) => {
//   return birthYear - currentYear.value;
// }

// Add event listeners to the button
btnCalcAge.addEventListener('click', function () {
  let currentYear = inputDate.value;
  console.log(currentYear);
});

let now = new Date().getTime();
console.log(now);
