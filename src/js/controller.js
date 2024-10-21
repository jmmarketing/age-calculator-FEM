import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import calculatorView from "./views/calculatorView.js";

const controlCalculator = function () {
  calculatorView.validateInputs();
  console.log(birthday);
  // Check State of Birthday
  // if (Object.values(birthday).includes(null)) return;

  calculateAge();
  calculatorView.displayAge();
};

const init = function () {
  calculatorView.addHandlerSubmitAge(controlCalculator);
};

init();
