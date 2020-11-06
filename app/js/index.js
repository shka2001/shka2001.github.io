/*var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});*/

const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#485563";
  } else {
    header.style.backgroundColor = "#254441";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let inputName = document.getElementById("input-name");
let inputeEmail = document.getElementById("input-email");
let inputTextarea = document.getElementById("input-textarea");
let inputSubmit = document.getElementById("input-submit");

console.log(inputSubmit.value);

inputSubmit.addEventListener("click", function (e) {
  if (inputName.value == "") {
    inputName.style.borderColor = "red";
    console.log("Name is empty");
  }
  if (inputeEmail.value == "") {
    inputeEmail.style.borderColor = "red";
    console.log("Email is empty");
  }
  if (inputTextarea.value == "") {
    inputTextarea.style.borderColor = "red";
    console.log("Textarea is empty");
  }
  if (
    inputName.value == "" &&
    inputeEmail.value == "" &&
    inputTextarea.value == ""
  ) {
    inputName.style.borderColor = "red";
    inputeEmail.style.borderColor = "red";
    inputTextarea.style.borderColor = "red";
    console.log("Name Email Message are empty");
  }
  if (inputName.value.length > 0) {
    inputName.style.borderColor = "black";
  }
  if (inputeEmail.value.length > 0) {
    inputeEmail.style.borderColor = "black";
  }
  if (inputTextarea.value == "") {
    inputTextarea.style.borderColor = "black";
    console.log("Textarea is empty");
  } else if (inputName.value == "") {
    inputName.style.borderColor = "black";
    inputName.style.borderColor = "red";
    console.log("Name is empty");
  } else if (inputeEmail.value == "") {
    inputeEmail.style.borderColor = "black";
    inputeEmail.style.borderColor = "red";
    console.log("Email is empty");
  } else if (inputTextarea.value == "") {
    inputTextarea.style.borderColor = "black";
    inputTextarea.style.borderColor = "red";
    console.log("Textareais empty");
  }
});
