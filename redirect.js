// Get the current URL
var currentUrl = window.location.href;

// Set the value of the hidden input field to the current URL
document.getElementById('urlField').value = currentUrl;
// Show an alert message when the response is received
function showAlert(message) {
    alert(message);
}
// Submit the form using AJAX
document.querySelector('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://chroma.ap-1.evennode.com/');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                showAlert(this.responseText);
            }
            else if (this.readyState === XMLHttpRequest.DONE && this.status === 404) {
                showAlert(this.responseText);
            }
        };
        var url = new FormData(event.target);
        const data = {};
        for (let pair of url.entries()) {
            data[pair[0]] = pair[1]; // Create a key-value pair for each form field
        }
        console.log(data);
        xhr.send(JSON.stringify(data));
    });