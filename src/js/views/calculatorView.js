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
  _birthday = {};

  addHandlerSubmitAge(handlerFunction) {
    // Arrow function for the event Function to keep 'this' referencing the class, could use .bind too
    this._submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      // First validation makes sure there is a number and not blank
      this._ageInputs.forEach(this._checkInputs.bind(this));

      if (Object.values(this._birthday).includes(null)) return;

      handlerFunction(this._birthday);
    });
  }

  _checkInputs(input) {
    const val = Number.parseInt(+input.value);
    // console.log(val);
    if (!Number.isInteger(val) || !input.value) {
      input.classList.add("invalid");
      input.nextElementSibling.textContent = this._errorMessage;
      this._birthday[input.name] = null;
    } else {
      this._birthday[input.name] = val;
      input.classList.remove("invalid");
    }
  }

  _clearInputs() {
    this._ageInputs.forEach((input) => (input.value = ""));
  }

  displayAge(ageObj) {
    this._clearInputs();
    _yearsResult.textContent = ageObj.years;
    _monthsResult.textContent = ageObj.months;
    _daysResult.textContent = ageObj.days;
  }

  renderError() {}
}

export default new CalculatorView();
