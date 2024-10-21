import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import calculatorView from "./views/calculatorView.js";

const controlCalculator = function (birthdayObject) {
  model.validateInputs();
  console.log(birthday);

  calculateAge();
  calculatorView.displayAge();
};

const init = function () {
  calculatorView.addHandlerSubmitAge(controlCalculator);
};

init();
