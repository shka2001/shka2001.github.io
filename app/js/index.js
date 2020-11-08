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
  let is_empty = false;
  if (inputName.value == "") {
    inputName.style.borderColor = "red";
    is_empty = true;
    console.log("Name is empty");
  } else {
    inputName.style.borderColor = "black";
  }

  if (inputeEmail.value == "") {
    inputeEmail.style.borderColor = "red";
    is_empty = true;
    console.log("Email is empty");
  } else {
    inputeEmail.style.borderColor = "black";
  }

  if (inputTextarea.value == "") {
    inputTextarea.style.borderColor = "red";
    is_empty = true;
    console.log("Textarea is empty");
  } else {
    inputTextarea.style.borderColor = "black";
  }

  if (!is_empty) {
    window.location.assign("/app/sent.html");
  }
});
