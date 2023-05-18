// GET THE URL OF THE CURRENT PAGE
var currentUrl = window.location.href;
// SET THE VALUE OF THE HIDDEN INPUT FIELD TO THE CURRENT URL
document.getElementById("urlField").value = currentUrl;
// FUNCTION TO SHOW ALERT
function showAlert(message) {
  alert(message);
}
// GETTING THE DATA FROM THE FORM AND SENDING IT TO THE SERVER AND THEN RECEIVING THE RESPONSE
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // XMLHttpRequest (TO SEND AND RECEIVE DATA TO SERVER DYNAMICALLY AND ASYNCHRONOUSLY)
  var xhr = new XMLHttpRequest(); // NEW XMLHTTPREQUEST OBJECT
  xhr.open("POST", "http://chroma.ap-1.evennode.com/"); // OPENING A CONNECTION (URL OF THE SERVER TO SEND DATA)
  xhr.setRequestHeader("Content-Type", "application/json"); // SETTING THE HEADER OF THE REQUEST
  // FUNCTION (CALLS WHEN THE STATE OF REQUEST CHANGES)
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // 200 -> SUCCESSFUL RESPONSE | .DONE -> PROPERTY OF XHR -> REQUEST HAS COMPLETED
      var data = JSON.parse(this.responseText);
      showAlert(data.msg);
      // SAVING THE DATA IN LOCAL STORAGE TO USE IT FURTHER
      localStorage.setItem("mydata", JSON.stringify(data));
      // TO SEND DATA TO BACKGROUND SCRIPT (background.js)
      chrome.runtime.sendMessage(
        { message: "sendData", data: data }, // MESSAGE TO BE SENT
        function (response) {  // CALLBACK FUNCTION
          console.log("Response from background script:", response);
        }
      );
      // IF PAGE IS NOT FOUND 
    } else if (this.readyState === XMLHttpRequest.DONE && this.status === 404) {
      showAlert(data.msg);
    }
  };
  // FORMDATA (TO GET THE DATA FROM THE FORM) (EVENT.TARGET -> FORM)
  var formData = new FormData(event.target);
  const data = {};
  for (let pair of formData.entries()) {
    data[pair[0]] = pair[1]; // CREATING KEY-VALUE PAIR OF ALL FIELDS OF DATA
  }
  xhr.send(JSON.stringify(data)); // SENDING THE DATA TO THE SERVER
}); 
