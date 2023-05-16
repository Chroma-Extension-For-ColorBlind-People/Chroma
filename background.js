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
