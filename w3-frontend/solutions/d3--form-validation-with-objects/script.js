const isRequired = value => value !== "";

class CreditCard {
  constructor(number) {
    this.number = number;
  }

  isValid() {
    return this.isValidLength() && this.passesLuhnCheck();
  }

  isValidLength() {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(this.number);
  }

  passesLuhnCheck() {
    const val = this.number;
    let sum = 0;
    for (var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1));
      if (i % 2 == 0) {
        intVal *= 2;
        if (intVal > 9) {
          intVal = 1 + intVal % 10;
        }
      }
      sum += intVal;
    }
    return sum % 10 == 0;
  }
}

class Field {
  constructor() {}

  markValid() {
    this.field.classList.remove("input-invalid");
    this.field.classList.add("input-valid");
    this.clearErrorMsgs();
  }

  markInvalid(msgs) {
    this.field.classList.remove("input-valid");
    this.field.classList.add("input-invalid");
    this.clearErrorMsgs();

    for (var idx = 0; idx < msgs.length; idx++) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error-msg");
      errorMsg.classList.add("text-danger");
      errorMsg.innerText = msgs[idx];
      this.field.appendChild(errorMsg);
    }
  }

  clearErrorMsgs() {
    const errorMsgs = this.field.querySelectorAll(".error-msg");
    for (var idx = 0; idx < errorMsgs.length; idx++) {
      errorMsgs[idx].remove();
    }
  }
}

class SimpleField extends Field {
  constructor(inputId) {
    super();
    this.input = document.getElementById(inputId);
    this.field = document.getElementById(inputId + "-field");
    this.validations = [];
  }

  addValidation(validationFn, errorMessage) {
    this.validations.push({ fn: validationFn, msg: errorMessage });
  }

  validate() {
    const errorMsgs = [];
    const value = this.input.value;
    let isValid = true;

    for (let validation of this.validations) {
      if (!validation.fn(value)) {
        errorMsgs.push(validation.msg);
        isValid = false;
        break;
      }
    }

    if (isValid) {
      this.markValid();
    } else {
      this.markInvalid(errorMsgs);
    }

    return isValid;
  }
}

class ComplexField extends Field {
  constructor(fieldId, validationFn) {
    super();
    this.field = document.getElementById(fieldId);
    this.validationFn = validationFn;
  }

  validate() {
    const errorMsgs = [];
    this.validationFn(this, errorMsgs);

    if (errorMsgs.length > 0) {
      this.markInvalid(errorMsgs);
      return false;
    } else {
      this.markValid();
      return true;
    }
  }
}

class Form {
  constructor() {
    this.isInvalid = false;
  }

  validate() {
    this.isInvalid = false;
    this.validateName();
    this.validateCar();
    this.validateStartDate();
    this.validateNumberOfDays();
    this.validateCardNumber();
    this.validateCVV();
    this.validateExpirationDate();
    if (this.isInvalid) {
      this.clearPrice();
    } else {
      this.showPrice();
    }
  }

  validateName() {
    const field = new SimpleField("name");
    field.addValidation(isRequired, "Name is required.");
    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateCar() {
    const field = new ComplexField("car-field", (field, errorMsgs) => {
      const carYear = document.getElementById("car-year");
      const carMake = document.getElementById("car-make");
      const carModel = document.getElementById("car-model");

      if (carYear.value === "") {
        errorMsgs.push("Car year is required.");
      }
      if (carMake.value === "") {
        errorMsgs.push("Car make is required.");
      }
      if (carModel.value === "") {
        errorMsgs.push("Car model is required.");
      }
    });

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateStartDate() {
    const field = new SimpleField("start-date");
    field.addValidation(isRequired, "Date parking is required.");
    field.addValidation(input => {
      const startDate = new Date(input + "T00:00");
      const now = new Date();
      return startDate >= now;
    }, "Date parking must be in the future.");

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateNumberOfDays() {
    const field = new SimpleField("days");
    field.addValidation(isRequired, "Number of days is required.");
    field.addValidation(input => {
      const days = parseInt(input, 10);
      return !isNaN(days);
    }, "Number of days must be a number.");
    field.addValidation(input => {
      const days = parseInt(input, 10);
      return days >= 1 && days <= 30;
    }, "Number of days must be between 1 and 30.");

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateCardNumber() {
    const field = new SimpleField("credit-card");
    field.addValidation(isRequired, "Credit card is required.");
    field.addValidation(input => {
      const cc = new CreditCard(input);
      return cc.isValid();
    }, "Credit card format is not valid.");

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateCVV() {
    const field = new SimpleField("cvv");

    field.addValidation(isRequired, "CVV is required.");
    field.addValidation(input => {
      const cvv = input;
      if (cvv.length != 3) {
        return false;
      }

      for (var idx = 0; idx < 3; idx++) {
        if (isNaN(parseInt(cvv[idx]), 10)) {
          return false;
        }
      }

      return true;
    }, "CVV must be a three digit number.");

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  validateExpirationDate() {
    const field = new SimpleField("expiration");
    field.addValidation(isRequired, "Expiration date is required.");
    field.addValidation(input => {
      const expiration = input;
      const slashPos = expiration.indexOf("/");
      if (slashPos == -1) {
        return false;
      }

      const month = parseInt(expiration.slice(0, slashPos), 10);
      const year = parseInt(expiration.slice(slashPos + 1), 10);

      if (isNaN(month) || isNaN(year)) {
        return false;
      }

      return true;
    }, "Expiration date must be in the format MM/YY.");

    field.addValidation(input => {
      const expiration = input;
      const slashPos = expiration.indexOf("/");
      const month = parseInt(expiration.slice(0, slashPos), 10);
      let year = parseInt(expiration.slice(slashPos + 1), 10);

      year += 2000;
      var today = new Date();
      var todayMonth = today.getMonth() + 1;
      var todayYear = today.getFullYear();

      if (year < todayYear || (year == todayYear && month < todayMonth)) {
        return false;
      }

      return true;
    }, "Expiration date must not be in the past.");

    const isValid = field.validate();
    this.isInvalid = this.isInvalid || !isValid;
  }

  calculatePrice(startDate, numberOfDays) {
    var days = [];
    for (var i = 0; i < numberOfDays; i++) {
      days.push(i);
    }
    var year = startDate.getFullYear();
    var month = startDate.getMonth();
    var date = startDate.getDate();

    days = days.map(function(day) {
      return new Date(year, month, date + day);
    });

    var isWeekend = days.map(function(date) {
      return date.getDay() == 0 || date.getDay() == 6;
    });

    var price = isWeekend.reduce(function(total, weekend) {
      if (weekend) {
        return total + 7;
      } else {
        return total + 5;
      }
    }, 0);

    return price;
  }

  clearPrice() {
    var priceEl = document.getElementById("total");
    priceEl.innerText = "";
  }

  showPrice() {
    var dateInput = document.getElementById("start-date");
    var date = new Date(dateInput.value + "T00:00Z");
    var daysInput = document.getElementById("days");
    var days = parseInt(daysInput.value, 10);

    var price = calculatePrice(date, days);

    var priceEl = document.getElementById("total");
    priceEl.innerText = "Your total cost is $" + price + ".";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("submit-button");
  var form = new Form();
  button.addEventListener("click", function(event) {
    event.preventDefault();
    form.validate();
  });
});
