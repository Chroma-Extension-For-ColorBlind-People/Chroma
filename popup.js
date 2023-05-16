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
    // var popup = document.querySelector(".protonopia");
    // var info = document.querySelector(".info");
    info.style.display = "none";
    protonopia.style.display = "block";
  }
}
// document.querySelector(".mybtn").addEventListener("click", giveRangeValue);
// Listen for messages from content.js

// let disease = localStorage.getItem("disease");
// let name = localStorage.getItem("name");
// let email = localStorage.getItem("email");
// console.log("data:");
// console.log(disease);
// console.log(name);
// console.log(email);
let dataaaaa = JSON.parse(localStorage.getItem("mydata"));
console.log("data:", dataaaaa);
if (dataaaaa) {
 

  let disease = dataaaaa.disease;
  let name = dataaaaa.name;
  let email = dataaaaa.email;
  if (disease === "Protonopia") {
    console.log("Protonopia");
    // var popup = document.querySelector(".protonopia");
    // var info = document.querySelector(".info");
    info.style.display = "none";
    protonopia.style.display = "block";
    // localStorage.setItem("disease", "");
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
    // localStorage.setItem("disease", "");
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
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
    // localStorage.setItem("disease", "");
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
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
    // localStorage.setItem("disease", "");
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
    localStorage.removeItem("mydata");
    info.style.display = "block";
  });
}
