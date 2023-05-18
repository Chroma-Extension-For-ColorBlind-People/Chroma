
// TO DISABLE THE BUTTON HOVER WHEN THE PAGE LOADS 
document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('loginButton');
  loginButton.style.pointerEvents = 'none'; // Disable hover effect initially
});


// FUNCTION TO CHECK IF ALL THE VALUES ARE FILLED
function checkform(event) {
  // DETECTING CHANGE IN THE FORM
  console.log("change");
  let disease = document.getElementById("disease").value; // GETTING THE VALUES OF THE FORM
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(
    "diease",
    disease,
    "name",
    name,
    "email",
    email,
    "password",
    password
  );
  if (
    !(
      disease === "NotConfirmed" ||
      name === "" ||
      email === "" ||
      password === "" ||
      disease === "SelectDisease"
    )
  ) {
    // CHECKING IF ALL THE VALUES ARE FILLED
    let btn = document.getElementById("loginButton");
    btn.disabled = false;
    btn.style.pointerEvents = "auto";
  } else {
    // IF NOT FILLED THEN DISABLE THE BUTTON
    let btn = document.getElementById("loginButton");
    btn.disabled = true;
    btn.style.pointerEvents = "none";

  }
}

document.querySelector(".myform").addEventListener("change", function (event) {
  //detecting change in the form

  var options = document.getElementById("disease").value;
  var protonopia = document.getElementById("Protonopia");
  var deutronopia = document.getElementById("Deuternopia");
  var tritonopia = document.getElementById("Tritonopia");

  if (options === "NotConfirmed") {
    // IF NOT CONFIRMED THEN SHOW THE FIRST QUESTION FOR TEST
    protonopia.style.display = "block";
  } else {
    // IF CONFIRMED THEN HIDE ALL THE QUESTIONS
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
  // CHECKING THE OPTION FOR RED COLOR BLINDNESS
  var radioButtons = document.getElementsByName("red-blind"); // GETTING ALL THE RADIO BUTTONS
  var detect = document.getElementById("detect-red");
  var protonopia = document.getElementById("Protonopia");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      if (selectedOption !== "26") {
        detect.innerHTML = "You have Protonopia"; // IF WRONG ANSWER THEN SHOW THE DISEASE DETECTED
        let disease = document.getElementById("disease");
        disease.value = "Protonopia";
        checkform();
        protonopia.style.display = "none";
      } else {
        // IF RIGHT ANSWER THEN SHOW THE NEXT QUESTION
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
  .addEventListener("click", checkOptionForRed); // ADDING EVENT LISTENER TO THE BUTTON

function checkOptionForGreen() {
  // CHECKING THE OPTION FOR GREEN COLOR BLINDNESS
  var radioButtons = document.getElementsByName("green-blind"); // GETTING ALL THE RADIO BUTTONS
  var deutronopia = document.getElementById("Deuternopia");
  var protonopia = document.getElementById("Protonopia");
  var detect = document.getElementById("detect-green");
  var detect1 = document.getElementById("detect-red");

  for (var i = 0; i < radioButtons.length; i++) {
    // CHECKING THE SELECTED OPTION
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      if (selectedOption !== "8") {
        // IF WRONG ANSWER THEN SHOW THE DISEASE DETECTED
        detect.innerHTML = "You have Deuternopia";
        let disease = document.getElementById("disease");
        disease.value = "Deuternopia";
        checkform();
        deutronopia.style.display = "none";
      } else {
        // IF RIGHT ANSWER THEN SHOW THE NEXT QUESTION
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
  .addEventListener("click", checkOptionForGreen); // ADDING EVENT LISTENER TO THE BUTTON

function checkOptionForBlue() {
  // CHECKING THE OPTION FOR BLUE COLOR BLINDNESS
  var radioButtons = document.getElementsByName("blue-blind"); // GETTING ALL THE RADIO BUTTONS
  var deutronopia = document.getElementById("Deuternopia");
  var detect1 = document.getElementById("detect-green");
  var detect = document.getElementById("detect-blue");
  for (var i = 0; i < radioButtons.length; i++) {
    // CHECKING THE SELECTED OPTION
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      var tritonopia = document.getElementById("Tritonopia");
      tritonopia.style.display = "none";
      if (selectedOption !== "8") {
        console.log("selectedOption", selectedOption);
        // IF WRONG ANSWER THEN SHOW THE DISEASE DETECTED
        detect1.innerHTML = "";
        detect.innerHTML = "You have Tritonopia";
        let disease = document.getElementById("disease");
        disease.value = "Tritanopia";
        checkform();
      } else {
        // IF RIGHT ANSWER THEN SHOW THE NEXT QUESTION
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
  .addEventListener("click", checkOptionForBlue); // ADDING EVENT LISTENER TO THE BUTTON

document.getElementById("loginPage").addEventListener("change", checkform); // ADDING EVENT LISTENER TO THE FORM
