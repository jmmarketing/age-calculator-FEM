class CalculatorView {
  _submitButton = document.querySelector(".calculator__divider--icon");
  _dayInput = document.querySelector("#day");
  _monthInput = document.querySelector("#month");
  _yearInput = document.querySelector("#year");
  _ageInputs = document.querySelectorAll(".calculator__input");
  _yearsResult = document.querySelector("#years-number");
  _monthsResult = document.querySelector("#months-number");
  _daysResult = document.querySelector("#days-number");
  _errorMessage;

  addHandlerSubmitAge(handlerFunction) {
    this._submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      handlerFunction();
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
