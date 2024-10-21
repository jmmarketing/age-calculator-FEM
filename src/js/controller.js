import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import calculatorView from "./views/calculatorView.js";

function controlCalculator(birthdayObject) {
  model.validateInputs();
  console.log(birthday);

  calculateAge();
  calculatorView.displayAge(model.state.age);
}

const init = function () {
  calculatorView.addHandlerSubmitAge(controlCalculator);
};

init();
