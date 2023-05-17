const info = document.querySelector(".info");
const protonopia = document.querySelector(".protonopia");
const deuteranopia = document.querySelector(".duetronopia");
const tritanopia = document.querySelector(".tritanopia");
const logout = document.querySelector(".log-out");

function giveRangeValue() {
  var range = document.getElementById("customRange1").value;
  var range2 = document.getElementById("customRange2").value;
  console.log(range);
  console.log(range2);
  // console.log(green);
}
function changepopup(data) {
  console.log(data);
  if (data.disease === "Protonopia") {
    console.log("Protonopia");
    info.style.display = "none";
    protonopia.style.display = "block";
  }
}
let dataaaaa = JSON.parse(localStorage.getItem("mydata"));
console.log("data:", dataaaaa);
if (dataaaaa) {
 

  let disease = dataaaaa.disease;
  let name = dataaaaa.name;
  let email = dataaaaa.email;
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

  document.querySelector(".log-out1").addEventListener("click", function () {
    console.log("logout");
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage(
      { message: "Logout" },
      function (response) {
        console.log("Response from background script:", response);
      }
    );
    
    localStorage.removeItem("mydata");
    info.style.display = "block";
  });

  document.querySelector(".log-out2").addEventListener("click", function () {
    console.log("logout");
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage(
      { message: "Logout" },
      function (response) {
        console.log("Response from background script:", response);
      }
    );
   
    localStorage.removeItem("mydata");
    info.style.display = "block";
  });

  document.querySelector(".log-out3").addEventListener("click", function () {
    console.log("logout");
    if (disease === "Protonopia") {
      protonopia.style.display = "none";
    }
    if (disease === "Deuternopia") {
      deuteranopia.style.display = "none";
    }
    if (disease === "Tritanopia") {
      tritanopia.style.display = "none";
    }
    chrome.runtime.sendMessage(
      { message: "Logout" },
      function (response) {
        console.log("Response from background script:", response);
      }
    );
   
    localStorage.removeItem("mydata");
    info.style.display = "block";
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////

// Recieves message from content.js

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "sendData") {
//     console.log("Received data from redirect:", request.data);
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////
