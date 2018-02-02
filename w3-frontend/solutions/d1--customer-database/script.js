import moment from "moment";
import voca from "voca";

import customers from "./customers";
import { nameToAbbr } from "./states";

const customersDiv = document.getElementById("customers");
customersDiv.innerHTML = '';

function createDivWithClass(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

customers.forEach(function (customer) {
  const customerDiv = document.createElement("div");
  customerDiv.classList.add("customer");

  const customerImg = document.createElement("img");
  customerImg.classList.add("customer__picture");
  customerImg.src = customer.picture.large;
  customerDiv.appendChild(customerImg);

  const customerName = createDivWithClass("customer__name");
  customerName.innerText = voca.titleCase(`${customer.name.first} ${customer.name.last}`);
  customerDiv.appendChild(customerName);

  const customerEmail = createDivWithClass("customer__email");
  customerEmail.innerText = customer.email;
  customerDiv.appendChild(customerEmail);

  const customerAddress = createDivWithClass("customer__address");
  let addr = voca.titleCase(customer.location.street);
  addr += "<br />";
  addr += `${voca.titleCase(customer.location.city)}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
  customerAddress.innerHTML = addr;
  customerDiv.appendChild(customerAddress);

  const customerDob = createDivWithClass("customer__dob");
  customerDob.innerText = `DOB: ${moment(customer.dob).format("MMM D, YYYY")}`
  customerDiv.appendChild(customerDob);

  const customerSince = createDivWithClass("customer__since");
  customerSince.innerText = `Customer since: ${moment(customer.registered).format("MMM D, YYYY")}`
  customerDiv.appendChild(customerSince);

  customersDiv.appendChild(customerDiv);
})
