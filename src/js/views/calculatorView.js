class CalculatorView {
  _submitButton = document.querySelector(".calculator__divider--icon");
  _dayInput = document.querySelector("#day");
  _monthInput = document.querySelector("#month");
  _yearInput = document.querySelector("#year");
  _ageInputs = document.querySelectorAll(".calculator__input");
  _yearsResult = document.querySelector("#years-number");
  _monthsResult = document.querySelector("#months-number");
  _daysResult = document.querySelector("#days-number");
  _errorMessage = "This field is required";

  addHandlerSubmitAge(handlerFunction) {
    // Arrow function for the event Function to keep 'this' referencing the class, could use .bind too
    this._submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const birthday = {};

      // First validation makes sure there is a number and not blank
      this._ageInputs.forEach((input) => {
        const val = Number.parseInt(+input.value);
        // console.log(val);
        if (!Number.isInteger(val) || !input.value) {
          input.classList.add("invalid");
          input.nextElementSibling.textContent = this._errorMessage;
          birthday[input.name] = null;
        } else {
          birthday[input.name] = val;
          input.classList.remove("invalid");
        }
      });

      if (Object.values(birthday).includes(null)) return;

      handlerFunction(birthday);
    });
  }

  displayAge() {
    clearInputs();
    _yearsResult.textContent = realAge.years;
    _monthsResult.textContent = realAge.months;
    _daysResult.textContent = realAge.days;
  }

  renderError() {}

  _clearInputs() {
    _ageInputs.forEach((input) => (input.value = ""));
    // document
    //   .querySelectorAll(".error-message")
    //   .forEach((input) => (input.style.display = "none"));
  }
}

export default new CalculatorView();
