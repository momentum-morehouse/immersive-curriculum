function markValid(field) {
    field.classList.remove('input-invalid');
    field.classList.add('input-valid');
    clearErrorMsgs(field);
}

function markInvalid(field, msgs) {
    field.classList.remove('input-valid');
    field.classList.add('input-invalid');

    clearErrorMsgs(field);

    for (var idx = 0; idx < msgs.length; idx++) {
        var errorMsg = document.createElement("div");
        errorMsg.classList.add('error-msg');
        errorMsg.classList.add('text-danger');
        errorMsg.innerText = msgs[idx];
        field.appendChild(errorMsg);
    }
}

function clearErrorMsgs(field) {
    var errorMsgs = field.querySelectorAll('.error-msg');
    for (var idx = 0; idx < errorMsgs.length; idx++) {
        errorMsgs[idx].remove();
    }
}

function validate() {
    validateName();
    validateCar();
    validateStartDate();
    validateNumberOfDays();
    validateCardNumber();
    validateCVV();
    validateExpirationDate();
}

function validateName() {
    var input = document.getElementById('name');
    var field = document.getElementById('name-field');
    if (input.value === "") {
        markInvalid(field, ['Name is required.'])
    } else {
        markValid(field);
    }
}

function validateCar() {
    var field = document.getElementById('car-field');
    var carYear = document.getElementById('car-year');
    var carMake = document.getElementById('car-make');
    var carModel = document.getElementById('car-model');

    var errorMsgs = [];
    if (carYear.value === '') {
        errorMsgs.push("Car year is required.");
    }
    if (carMake.value === '') {
        errorMsgs.push("Car make is required.");
    }
    if (carModel.value === '') {
        errorMsgs.push("Car model is required.");
    }

    if (errorMsgs.length > 0) {
        markInvalid(field, errorMsgs);
    } else {
        markValid(field);
    }
}

function validateStartDate() {
    var input = document.getElementById('start-date');
    var field = document.getElementById('start-date-field');
    if (input.value === "") {
        markInvalid(field, ['Date parking is required.'])
    } else {
        var startDate = new Date(input.value + "T00:00");
        var now = new Date();
        console.log(input.value, startDate, now);
        if (startDate < now) {
            markInvalid(field, ['Date parking must be in the future.']);
        } else {
            markValid(field);
        }
    }
}

function validateNumberOfDays() {
    var input = document.getElementById('days');
    var field = document.getElementById('days-field');
    if (input.value === "") {
        markInvalid(field, ['Number of days is required.'])
    } else {
        var days = parseInt(input.value, 10);
        if (isNaN(days)) {
            markInvalid(field, ['Number of days must be a number.'])
        } else if (days < 1 || days > 30) {
            markInvalid(field, ['Number of days must be between 1 and 30.'])
        } else {
            markValid(field);
        }
    }
}

function validateCardNumber() {
    var input = document.getElementById('credit-card');
    var field = document.getElementById('credit-card-field');
    if (input.value === "") {
        markInvalid(field, ['Credit card is required.']);
    } else {
        if (!isValidCardNumber(input.value)) {
            markInvalid(field, ['Credit card format is not valid.']);
        } else {
            markValid(field);
        }
    }
}

function validateCVV() {
    var input = document.getElementById('cvv');
    var field = document.getElementById('cvv-field');
    if (input.value === "") {
        markInvalid(field, ['CVV is required.']);
    } else {
        var cvv = parseInt(input.value, 10);
        if (isNaN(cvv) || cvv < 100 || cvv > 999) {
            markInvalid(field, ['CVV must be a three digit number.'])
        } else {
            markValid(field);
        }
    }
}

function validateExpirationDate() {
    var input = document.getElementById('expiration');
    var field = document.getElementById('expiration-field');
    if (input.value === "") {
        markInvalid(field, ['Expiration date is required.']);
        return;
    }

    var month,
        year,
        yearStart;
    var expiration = input.value;

    if (expiration[0] == '0') {
        month = parseInt(expiration.slice(0, 2), 10);
        yearStart = 3;
    } else if (expiration[0] == '1' && (expiration[1] == '1' || expiration[1] == '2')) {
        month = parseInt(expiration.slice(0, 2), 10);
        yearStart = 3;
    } else {
        month = parseInt(expiration[0], 10);
        yearStart = 2;
    }
    year = parseInt(expiration.slice(yearStart, yearStart + 2));

    if (isNaN(month) || isNaN(year)) {
        markInvalid(field, ['Expiration date must be in the format MM/YY.']);
        return;
    }

    if (month < 1 || month > 12 || year < 1 || year > 99) {
        markInvalid(field, ['Expiration date must be a valid month and year.']);
        return;
    }

    year += 2000;
    var today = new Date();
    var todayMonth = today.getMonth() + 1;
    var todayYear = today.getFullYear();

    if (year < todayYear || (year == todayYear && month < todayMonth)) {
        markInvalid(field, ['Expiration date must not be in the past.']);
        return;
    }

    markValid(field);
}

function isValidCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("submit-button");
    button.addEventListener('click', function(event) {
        event.preventDefault();
        validate();
        console.log('clicked');
    })
})
