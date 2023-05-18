chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {    // CHROME API - onUpdated ... EVENT LISTENER FOR TABS TO CHECK IF THE TAB IS UPDATED
  if (changeInfo.status === 'complete') {                                // IF TAB IS UPDATED THEN SEND MESSAGE TO CONTENT.JS
    chrome.tabs.sendMessage(tabId, { message: "hello" }, function (response) {
      if (chrome.runtime.lastError) {
        console.log("Error handling response: " + chrome.runtime.lastError.message);
      } else {
        console.log(response.message);
      }
    });
  }

});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {    // CHROME API - onMessage ... EVENT LISTENER FOR MESSAGES 
  if (request.message === "sendData") {                                     // IF MESSAGE IS "sendData" (FROM redierct.js) THEN STORE THE DATA IN CHROME STORAGE
    console.log("Received data from redirect:", request.data);
    chrome.storage.sync.set({ 'myData': request.data,'state': "OFF" }, function () {
      console.log('Data stored: ', request.data);
    });
    sendResponse({ message: "Data received" });
  }
  if (request.message === "Logout") {                                   // IF MESSAGE IS "Logout" (FROM popup.js) THEN REMOVE THE DATA FROM CHROME STORAGE
    chrome.storage.sync.set({ 'myData': "logout","state": "OFF" }, function () {
      console.log('Data removed');

    });
    sendResponse({ message: "Data removed" });

  }
  if(request.message === "toggle"){
    chrome.storage.sync.set({ 'state': request.state }, function () {
      console.log('Data stored: ', request.state);
    });
    sendResponse({ message: "Data toggeled" });
  }
});

