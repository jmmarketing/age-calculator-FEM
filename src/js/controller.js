/*
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
import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@1.11.13/+esm";

const rawDate = new Date();
const today = {
  year: rawDate.getFullYear(),
  month: rawDate.getMonth() + 1,
  day: rawDate.getDate(),
};

// const day = dayjs();

const birthday = {
  year: null,
  month: null,
  day: null,
};

function checkDate(object) {
  const { year, month, day } = object;
  console.log(object);
}

const submitButton = document.querySelector(".calculator__divider--icon");
const ageInputs = document.querySelectorAll(".calculator__input");

submitButton.addEventListener("click", function (e) {
  console.log(today);

  for (const input of ageInputs) {
    const val = Number(input.value);
    if (!Number.isInteger(val) || !input.value) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
      birthday[input.name] = val;
    }
    console.dir(input);
  }

  checkDate(birthday);
});
