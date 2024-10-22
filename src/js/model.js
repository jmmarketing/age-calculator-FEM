import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  isBefore,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const rawDate = new Date();

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

export const state = {
  today: {
    year: rawDate.getFullYear(),
    month: rawDate.getMonth() + 1,
    day: rawDate.getDate(),
  },
  birthdate: {
    year: null,
    month: null,
    day: null,
  },
  age: {
    years: null,
    months: null,
    days: null,
  },
};

// END DATE MODEL

export function calculateAge() {
  const userBirthday = `${state.birthdate.year}-${state.birthdate.month}-${state.birthdate.day}`;
  const today = `${state.today.year}-${state.today.month}-${state.today.day}`;

  // Using Date-FNS
  const years = differenceInYears(today, userBirthday);
  const months = differenceInMonths(today, userBirthday) % 12;
  let lastMonthBirthday;

  if (state.birthdate.day > state.today.day) {
    console.log("This Fired");
    lastMonthBirthday = `${state.today.year}-${state.today.month - 1}-${
      state.birthdate.day
    }`;
  } else {
    lastMonthBirthday = `${state.today.year}-${state.today.month}-${state.birthdate.day}`;
  }

  const days = differenceInDays(today, lastMonthBirthday);

  // console.log(today);
  // console.log(lastMonthBirthday);
  // console.log(days);
  // console.log(state.age);

  state.age = { years, months, days };
}

export function validateInputs(birthdateObject) {
  state.birthdate = birthdateObject;
  const { day, month, year } = birthdateObject;

  // console.log("state.birthdate ----- 👇🏽");
  // console.log(state.birthdate);
  // console.log(`${month}/${day}/${year}`);
  // Second pass of validation is field specific, but some requires other field info (like days for days in month validation)
  if (year > state.today.year) {
    return ["year", "Must be in the past"];
  }

  if (month < 1 || month > 12) {
    return ["month", "Must be valid month"];
  }

  if (day <= 0 || day > daysOfMonth.get(month)) {
    return ["day", "Must be valid date", true];
  }

  if (
    !isBefore(
      `${year}/${month}/${day}`,
      `${state.today.year}/${state.today.month}/${state.today.day}`
    )
  ) {
    return ["day", "Must be valid date", true];
  }
}
