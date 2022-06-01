/*Ja bym zrobil funkcje, ktora odlicza czas do retirementu, taki countdown clock i pokazal to na stronie z inputem daty urodzenia, czyli masz input, button i countdown,

Wpisujesz swoja date urodzenia (wliczajac miesiac i dzien) klikasz 'start countdown' i pokazuje Ci sie odliczanie do retirementu, ktore odlicza lata, dni, godziny, minuty, sekundy w formacie 10:234:17:54:22 */

// Variables
const currentDate = new Date(); // Today's date

/////////////////
/////////////
// Functions
//1 Function to take value of date of birth and calculate years to retire
const dateOfRetire = () => {
  const dateOfBirth = document.getElementById('birthDate').value;
  const dateEntered = new Date(dateOfBirth); // change format for input date
  dateEntered.setFullYear(dateEntered.getFullYear() + 65); // date of retire
  console.log(dateEntered);
};
