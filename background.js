chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { message: "hello" }, function (response) {
      if (chrome.runtime.lastError) {
        console.log("Error handling response: " + chrome.runtime.lastError.message);
      } else {
        console.log(response.message);
      }
    });
  }
  
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "sendData") {
        console.log("Received data from redirect:", request.data);
        chrome.storage.sync.set({'myData': request.data}, function() {
          console.log('Data stored: ', request.data);
      });
  
        sendResponse({message: "Data received"});
    }
    if (request.message === "Logout") {
      chrome.storage.sync.remove('myData', function() {
        console.log('Data removed');
      });
      sendResponse({message: "Data removed"});
    }
});

