// Get the current URL
var currentUrl = window.location.href;

// Set the value of the hidden input field to the current URL
document.getElementById("urlField").value = currentUrl;
// Show an alert message when the response is received
function showAlert(message) {
  alert(message);
}
function changepopup(data) {
    console.log(data);
  if (data.disease === "Protonopia") {
    console.log("Protonopia");
    var popup = document.querySelector(".protonopia");
    var info = document.querySelector(".info");
    info.style.display = "none";
    popup.style.display = "block";
  }
}
// Submit the form using AJAX
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://chroma.ap-1.evennode.com/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      var data = JSON.parse(this.responseText);
      showAlert(data.msg);
      localStorage.setItem("mydata", JSON.stringify(data));
      // localStorage.setItem("disease", data.disease);
      // localStorage.setItem("name", data.name);
      ///////////////////////////////////////////////////////////
      // var script2 = document.createElement("script");
      // // Set the source of the script to script2.js
      // script2.src = "popup.js";
      // // Append the script element to the document's body
      // document.body.appendChild(script2);
      ////////////////////////////////////////////////////
    } else if (this.readyState === XMLHttpRequest.DONE && this.status === 404) {
      showAlert(data.msg);
    }
  };
  var url = new FormData(event.target);
  const data = {};
  for (let pair of url.entries()) {
    data[pair[0]] = pair[1]; // Create a key-value pair for each form field
  }
  // console.log(data);
  xhr.send(JSON.stringify(data));
});
