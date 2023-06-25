// JS for TO TOP Button -----------------

// Get the button

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button -------------

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document --------------

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Form Validation -------------------

let name = document.getElementById("name");
let mail = document.getElementById("mail");

let mailErr = document.getElementById("mailErr");
let nameErr = document.getElementById("nameErr");

let nameReg = /^([\w]{3,})+\s+([\w\s]{3,})+$/;
let mailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let nameValid = 0;
let mailValid = 0;

function formValidate() {
  if (name.value == "") {
    nameErr.innerHTML = "* Please fill this feild";
    name.style.borderColor = "red";
  } else if (name.value.length < 3) {
    nameErr.innerHTML = "* Name must contain minimum 3 characters";
    name.style.borderColor = "red";
  } else if (!nameReg.test(name.value)) {
    nameErr.innerHTML = "* Please enter your full name";
    name.style.borderColor = "red";
  } else {
    nameErr.innerHTML = "*";
    name.style.borderColor = "#f1f1f1";
    nameValid = 1;
  }

  if (mail.value == "") {
    mailErr.innerHTML = "* Please fill this feild";
    mail.style.borderColor = "red";
  } else if (!mailReg.test(mail.value)) {
    mailErr.innerHTML = "* Please enter a valid mail";
    mail.style.borderColor = "red";
  } else {
    mailErr.innerHTML = "*";
    mail.style.borderColor = "#f1f1f1";
    mailValid = 1;
  }

  if (nameValid && mailValid) {
    return true;
  } else {
    return false;
  }
}

function refresh() {
  name.value = "";
  mail.value = "";
  name.style.borderColor = "#f1f1f1";
  mail.style.borderColor = "#f1f1f1";
  nameErr.innerHTML = "*";
  mailErr.innerHTML = "*";
}