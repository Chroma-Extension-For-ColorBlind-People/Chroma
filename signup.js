document.querySelector(".myform").addEventListener("change", function (event) {

  var options = document.getElementById("disease").value;
  var protonopia = document.getElementById("Protonopia");
  var deutronopia = document.getElementById("Deuternopia");
  var tritonopia = document.getElementById("Tritonopia");

  if (options === "NotConfirmed") {
    console.log(options);
    protonopia.style.display = "block";
  } else {
    let detect1 = document.getElementById("detect-red");
    let detect2 = document.getElementById("detect-green");
    let detect3 = document.getElementById("detect-blue");

    detect1.innerHTML = "";
    detect2.innerHTML = "";
    detect3.innerHTML = "";

    protonopia.style.display = "none";
    deutronopia.style.display = "none";
    tritonopia.style.display = "none";
  }
});
function checkOptionForRed() {
  var radioButtons = document.getElementsByName("red-blind");
  var detect = document.getElementById("detect-red");
  var protonopia = document.getElementById("Protonopia");
  var tritonopia = document.getElementById("Tritonopia");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      if (selectedOption !== "26") {
        detect.innerHTML = "You have Protonopia";
        let disease = document.getElementById("disease");
        disease.value = "Protonopia";
        protonopia.style.display = "none";
      } else {
        detect.innerHTML = "Right Answer";
        var Deuternopia = document.getElementById("Deuternopia");
        Deuternopia.style.display = "block";
        protonopia.style.display = "none";
      }
      break;
    }
  }
}
document
  .querySelector(".buttonRed")
  .addEventListener("click", checkOptionForRed);

function checkOptionForGreen() {
  var radioButtons = document.getElementsByName("green-blind");
  var deutronopia = document.getElementById("Deuternopia");
  var protonopia = document.getElementById("Protonopia");
  var detect = document.getElementById("detect-green");
  var detect1 = document.getElementById("detect-red");

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      if (selectedOption !== "8") {
        detect.innerHTML = "You have Deuternopia";
        let disease = document.getElementById("disease");
        disease.value = "Deuternopia";
        deutronopia.style.display = "none";
      } else {
        detect.innerHTML = "Right Answer";
        detect1.innerHTML = "";
        var tritonopia = document.getElementById("Tritonopia");
        tritonopia.style.display = "block";
        deutronopia.style.display = "none";
        protonopia.style.display = "none";
      }
      break;
    }
  }
}

document
  .querySelector(".buttonGreen")
  .addEventListener("click", checkOptionForGreen);

function checkOptionForBlue() {
  var radioButtons = document.getElementsByName("blue-blind");
  var deutronopia = document.getElementById("Deuternopia");
  var detect1 = document.getElementById("detect-green");

  var detect = document.getElementById("detect-blue");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      var tritonopia = document.getElementById("Tritonopia");
      tritonopia.style.display = "none";
      if (selectedOption !== "8") {
        detect1.innerHTML = "";
        detect.innerHTML = "You have Tritonopia";
        let disease = document.getElementById("disease");
        disease.value = "Tritonopia";
      } else {
        detect.innerHTML = "Right Answer";
        deutronopia.style.display = "none";
        detect.innerHTML =
          "You are not color blind. You can proceed to sign up";
      }
      break;
    }
  }
}

document
  .querySelector(".buttonBlue")
  .addEventListener("click", checkOptionForBlue);

document
  .querySelector("#loginPage")
  .addEventListener("change", function (event) {
    let disease = document.getElementById("disease").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (
      !(
        disease === "NotConfirmed" &&
        name === "" &&
        email === "" &&
        password === ""
      )
    ) {
      let btn = document.getElementById("loginButton");
      btn.disabled = false;
    }
  });
