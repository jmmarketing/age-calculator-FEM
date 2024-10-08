import "core-js/stable";
import "regenerator-runtime/runtime";

/*
On Submit -
- Each input is evaluated for its conditions (see below).
- Input value is "false" then add invalid class
- All inputs meet criteria then calculate difference.
- Update DOM to reflect difference. 


Your users should be able to: 

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The date is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

Convert to Days. Then calculate out. Own function.

*/
/* NOTE: Date related operations will be our model */

const rawDate = new Date();
const today = {
  year: rawDate.getFullYear(),
  month: rawDate.getMonth() + 1,
  day: rawDate.getDate(),
  ms: Date.now(),
};

const birthday = {
  year: null,
  month: null,
  day: null,
};

const daysOfMonth = new Map([
  [1, 31],
  [2, 29],
  [3, 31],
  [4, 30],
  [5, 31],
  [6, 30],
  [7, 31],
  [8, 31],
  [9, 30],
  [10, 31],
  [11, 30],
  [12, 31],
]);

function checkDate(object) {
  const { year, month, day } = object;
  console.log(object);
}

function clearInputs() {
  ageInputs.forEach((input) => (input.value = ""));
}

function checkInputs() {}

const submitButton = document.querySelector(".calculator__divider--icon");
const ageInputs = document.querySelectorAll(".calculator__input");
const years = document.querySelector('[data-type="years"]');
const months = document.querySelector('[data-type="months"]');
const days = document.querySelector('[data-type="days"]');

submitButton.addEventListener("click", function (e) {
  ageInputs.forEach((input) => {
    const val = Number.parseInt(+input.value);
    if (!Number.isInteger(val) || !input.value) {
      input.classList.add("invalid");
      birthday[input.name] = null;
    } else {
      birthday[input.name] = val;
      input.classList.remove("invalid");
    }
  });

  console.log(birthday);

  //   for (const input of ageInputs) {
  //     const val = Number(input.value);
  //     if (!Number.isInteger(val) || !input.value) {
  //       input.classList.add("invalid");
  //     } else {
  //       input.classList.remove("invalid");
  //       birthday[input.name] = val;
  //     }
  //     console.dir(input);
  //   }
});
