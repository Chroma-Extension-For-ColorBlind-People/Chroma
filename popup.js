// ALL THE CODE IN THIS FILE IS EXECUTED WHEN THE POPUP IS OPENED
// This file is responsible for the popup window that opens when the extension icon is clicked
// It is also responsible for the login and logout functionality

// ALL THE ELEMENTS THAT WE NEED IN POPU.JS

const info = document.querySelector(".info");
const protonopia = document.querySelector(".protonopia");
const deuteranopia = document.querySelector(".duetronopia");
const tritanopia = document.querySelector(".tritanopia");
const logout = document.querySelector(".log-out");

// THE DATA OF THE USER HAS BEEN TAKED FROM THE REDIRECT.JS BY USING THE STORAGE API OF CHROME AND SAVED IN THE LOCAL STORAGE THEN WE ARE GETTING THE DATA FROM THE LOCAL STORAGE AND USING IT TO DISPLAY THE DATA OF THE USER
let dataLogin = JSON.parse(localStorage.getItem("mydata"));
console.log("data:", dataLogin);
// IF THE USER IS LOGGED IN THEN THE DATA OF THE USER WILL BE IN THE LOCAL STORAGE AND THE DATA WILL BE USED TO MAKE DIVS BLOCK AND NONE
if (dataLogin) {
  // THE DATA OF THE USER NOW CAN BE USED TO MAKE DIVS BLOCK AND NONE
  let disease = dataLogin.disease;
  if (disease === "Protonopia") {
    console.log("Protonopia");
    info.style.display = "none";
    protonopia.style.display = "block";
  }
  if (disease === "Deuternopia") {
    console.log("Deuteranopia");
    info.style.display = "none";
    deuteranopia.style.display = "block";
  }
  if (disease === "Tritanopia") {
    console.log("Tritanopia");
    info.style.display = "none";
    tritanopia.style.display = "block";
  }

  // LOGOUT BUTTON FUNCTIONALITY

  document.querySelector(".log-out1").addEventListener("click", function () {
    // MAKING THE DIVS BLOCK AND NONE
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage({ message: "Logout" }, function (response) {
      console.log("Response from background script:", response);
    });

    // REMOVING THE DATA FROM THE LOCAL STORAGE AFTER THAT HE LOGGED OUT
    localStorage.removeItem("mydata");
    localStorage.removeItem("state");
    info.style.display = "block";
  });

  // LOGOUT BUTTON FUNCTIONALITY

  document.querySelector(".log-out2").addEventListener("click", function () {
    // MAKING THE DIVS BLOCK AND NONE
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage({ message: "Logout" }, function (response) {
      console.log("Response from background script:", response);
    });

    // REMOVING THE DATA FROM THE LOCAL STORAGE AFTER THAT HE LOGGED OUT

    localStorage.removeItem("mydata");
    localStorage.removeItem("state");

    info.style.display = "block";
  });

  // LOGOUT BUTTON FUNCTIONALITY
  document.querySelector(".log-out3").addEventListener("click", function () {
    // MAKING THE DIVS BLOCK AND NONE
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage({ message: "Logout" }, function (response) {
      console.log("Response from background script:", response);
    });

    // REMOVING THE DATA FROM THE LOCAL STORAGE AFTER THAT HE LOGGED OUT
    localStorage.removeItem("mydata");
    localStorage.removeItem("state");

    info.style.display = "block";
  });
}

var toggleButton = document.getElementById('customSwitches');
var toggleButton1 = document.getElementById('customSwitches1');
var toggleButton2 = document.getElementById('customSwitches2');

  toggleButton.addEventListener('change', function() {
    var value = this.checked ? 'ON' : 'OFF';
    localStorage.setItem("state", value);
    chrome.runtime.sendMessage(
      { message: "toggle", state: value }, // MESSAGE TO BE SENT
      function (response) {  // CALLBACK FUNCTION
        console.log("Response from background script:", response);
      }
      
    );
  });
  toggleButton1.addEventListener('change', function() {
    var value = this.checked ? 'ON' : 'OFF';
    localStorage.setItem("state", value);
    chrome.runtime.sendMessage(
      { message: "toggle", state: value }, // MESSAGE TO BE SENT
      function (response) {  // CALLBACK FUNCTION
        console.log("Response from background script:", response);
      }

    );
  });
  toggleButton2.addEventListener('change', function() {
    var value = this.checked ? 'ON' : 'OFF';
    localStorage.setItem("state", value);
    chrome.runtime.sendMessage(
      { message: "toggle", state: value }, // MESSAGE TO BE SENT
      function (response) {  // CALLBACK FUNCTION
        console.log("Response from background script:", response);
      }

    );
  });

  toggleButton2.addEventListener('change', function() {
    var value = this.checked ? 'ON' : 'OFF';
    localStorage.setItem("state",value);
    chrome.runtime.sendMessage(
      { message: "toggle", state: value }, // MESSAGE TO BE SENT
      function (response) {  // CALLBACK FUNCTION
        console.log("Response from background script:", response);
      }
    );
  });


  var state = localStorage.getItem("state");
  if(state === "ON"){
    toggleButton.checked = true;
    toggleButton1.checked = true;
    toggleButton2.checked = true;
  }
  else{
    toggleButton.checked = false;
    toggleButton1.checked = false;
    toggleButton2.checked = false;
  }
