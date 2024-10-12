import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  isBefore,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

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
const rawToday = {
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

let realAge = {
  years: null,
  months: null,
  days: null,
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

function calculateAge() {
  const userBirthday = `${birthday.year}-${birthday.month}-${birthday.day}`;
  const today = `${rawToday.year}-${rawToday.month}-${rawToday.day}`;

  // Using Date-FNS
  const years = differenceInYears(today, userBirthday);
  const months = differenceInMonths(today, userBirthday) % 12;
  let lastMonthBirthday;

  if (birthday.day > rawToday.day) {
    console.log("This Fired");
    lastMonthBirthday = `${rawToday.year}-${rawToday.month - 1}-${
      birthday.day
    }`;
  } else {
    lastMonthBirthday = `${rawToday.year}-${rawToday.month}-${birthday.day}`;
  }

  const days = differenceInDays(today, lastMonthBirthday);

  console.log(today);
  console.log(lastMonthBirthday);
  console.log(days);
  realAge = { years, months, days };
  console.log(realAge);
}

function displayAge() {
  clearInputs();
  yearsResult.textContent = realAge.years;
  monthsResult.textContent = realAge.months;
  daysResult.textContent = realAge.days;
}

function clearInputs() {
  ageInputs.forEach((input) => (input.value = ""));
}

function validateInputs() {
  // First validation makes sure there is a number and not blank
  ageInputs.forEach((input) => {
    const val = Number.parseInt(+input.value);
    console.log(val);
    if (!Number.isInteger(val) || !input.value) {
      input.classList.add("invalid");
      input.nextElementSibling.textContent = "This field is required";
      birthday[input.name] = null;
    } else {
      birthday[input.name] = val;
      input.classList.remove("invalid");
    }
  });

  if (Object.values(birthday).includes(null)) return;

  // Second pass of validation is field specific, but some requires other field info (like days for days in month validation)
  if (birthday.year > rawToday.year) {
    yearInput.classList.add("invalid");
    yearInput.nextElementSibling.textContent = "Must be in the past";
    birthday.year = null;
    return;
  }

  if (birthday.month < 1 || birthday.month > 12) {
    monthInput.classList.add("invalid");
    monthInput.nextElementSibling.textContent = "Must be a valid month";
    birthday.month = null;
    return;
  }

  if (birthday.day <= 0 || birthday.day > daysOfMonth.get(birthday.month)) {
    ageInputs.forEach((input) => input.classList.add("invalid"));
    dayInput.nextElementSibling.textContent = "Must be a valid date";
    monthInput.nextElementSibling.textContent = "";
    yearInput.nextElementSibling.textContent = "";
    birthday.day = null;
    return;
  }

  if (
    !isBefore(
      `${birthday.year}/${birthday.month}/${birthday.day}`,
      `${rawToday.year}/${rawToday.month}/${rawToday.day}`
    )
  ) {
    ageInputs.forEach((input) => input.classList.add("invalid"));
    // return;
  }
}

const submitButton = document.querySelector(".calculator__divider--icon");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const ageInputs = document.querySelectorAll(".calculator__input");
const yearsResult = document.querySelector("#years-number");
const monthsResult = document.querySelector("#months-number");
const daysResult = document.querySelector("#days-number");

submitButton.addEventListener("click", function (e) {
  validateInputs();
  console.log(birthday);
  // Check State of Birthday
  if (Object.values(birthday).includes(null)) return;

  calculateAge();
  displayAge();
});
