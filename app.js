/*Ja bym zrobil funkcje, ktora odlicza czas do retirementu, taki countdown clock i pokazal to na stronie z inputem daty urodzenia, czyli masz input, button i countdown,

Wpisujesz swoja date urodzenia (wliczajac miesiac i dzien) klikasz 'start countdown' i pokazuje Ci sie odliczanie do retirementu, ktore odlicza lata, dni, godziny, minuty, sekundy w formacie 10:234:17:54:22 */

const retirement = 65;

// Select the elements
const btnBirthOfYear = document.querySelector('#btn-submit-dateOfBirth');
const btnTodayDate = document.querySelector('#btn-submit-todayDate');

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
});

// Checking and the debbuing
console.log(btnBirthOfYear, btnTodayDate);
