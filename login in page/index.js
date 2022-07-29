"use strict";

function validate() {
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;

  if (Email == "login" && Password == "12345") {
    alert("login successfully");
  } else {
    alert("login failed, please try again");
  }
}
