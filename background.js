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
        // chrome.runtime.sendMessage(
        //   { message: "givedata", data: request.data },
        //   function (response) {
        //     console.log("Response from background script:", response);
        //   }
        // );

        chrome.storage.sync.set({'myData': request.data}, function() {
          console.log('Data stored: ', request.data);
      });
        
        // Do something with the data
        
        // Send a response back to the popup
        sendResponse({message: "Data received"});
    }
});

