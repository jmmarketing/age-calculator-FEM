import "core-js/stable";
import "regenerator-runtime/runtime";

import { isBefore } from "date-fns";

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

// END DATE MODEL

function checkDate() {
  const { year, month, day } = object;
  console.log(object);
}

function clearInputs() {
  ageInputs.forEach((input) => (input.value = ""));
}

function validateInputs() {
  // First validation makes sure there is a number and not blank
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

  // Second pass of validation is field specific, but some requires other field info (like days for days in month validation)
  if (birthday.year > today.year) {
    yearInput.classList.add("invalid");
    birthday.year = null;
    return;
  }

  if (birthday.month < 1 || birthday.month > 12) {
    monthInput.classList.add("invalid");
    return;
  }

  if (birthday.day <= 0 || birthday.day > daysOfMonth.get(birthday.month)) {
    dayInput.classList.add("invalid");
    birthday.day = null;
    return;
  }

  if (
    !isBefore(
      `${birthday.year}/${birthday.month}/${birthday.day}`,
      `${today.year}/${today.month}/${today.day}`
    )
  ) {
    ageInputs.forEach((input) => input.classList.add("invalid"));
    return;
  }
}

const submitButton = document.querySelector(".calculator__divider--icon");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const ageInputs = document.querySelectorAll(".calculator__input");
const years = document.querySelector("#years-number");
const months = document.querySelector("#months-number");
const days = document.querySelector("#days-number");

submitButton.addEventListener("click", function (e) {
  validateInputs();
  console.log(birthday);
  // Check State of Birthday
  if (Object.values(birthday).includes(null)) return;
});
