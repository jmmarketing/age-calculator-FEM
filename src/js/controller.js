import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import calculatorView from "./views/calculatorView.js";

function controlCalculator(birthdayObject) {
  const error = model.validateInputs(birthdayObject);
  // console.log(error);

  if (error) {
    calculatorView.renderError(...error);
    return;
  }

  model.calculateAge();
  calculatorView.displayAge(model.state.age);
}

const init = function () {
  calculatorView.addHandlerSubmitAge(controlCalculator);
};

init();
