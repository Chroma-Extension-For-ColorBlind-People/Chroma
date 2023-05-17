let data = "";
chrome.storage.sync.get(["myData"], function (result) {   //get login data from storage
  console.log("Data retrieved: ", result.myData);
  data = result.myData;
});

chrome.storage.sync.onChanged.addListener(function (changes, namespace) { //listen for changes in storage mostly logout
  chrome.storage.sync.get(["myData"], function (result) {
    console.log("Data retrieved: ", result.myData);
    data = result.myData;
    if (data === "logout") {
      clear();
      data = "";
      return;
    }
  });
});

function clear() {
  for (const element of edited) {
    const regex =
      /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g; //regex to remove the background image
    const match = element.style.backgroundImage.replace(regex, "");    //replace the background image with empty string
    element.style.backgroundImage = match;
  }
}
const edited = new Set();

function checkcolor(element, first, second, third) {
  if (data === "logout" || data === "") {
    clear();
    data = "";
    return;
  }
  let arr = [
    "color",
    "background-color",
    "fill",
    "stroke",
    "stop-color",
    "flood-color",
    "lighting-color",
    "background",
    "background-image",
  ];
  let arr1 = [
    "color",
    "backgroundColor",
    "fill",
    "stroke",
    "stopColor",
    "floodColor",
    "lightingColor",
    "background",
    "backgroundImage",
  ];

  let style = getComputedStyle(element);
  let falg = true;

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      let test = element.textContent;
      test = test.split("\n");
      if (test[0] == "") {
        i++;
      }
    }

    let color = style.getPropertyValue(arr[i]);
    const pattern = /rgb.?\(.*?\)/g;     //regex to match rgb values
    const matches = color.match(pattern);

    if (matches == null) {
      continue;
    }

    for (let j = 0; j < matches.length; j++) {
      color = matches[j].match(/\d+/g);
      red = parseInt(color[first]);
      green = parseInt(color[second]);
      blue = parseInt(color[third]);
      if (red != 0 && green == 0 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)";
        edited.add(element);
        falg = false;
      } else if (red > blue / 3 && green == 0 && blue != 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);

        falg = false;
      } else if (red == 0 && green != 0 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(90deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);

        falg = false;
      } else if (green > blue / 3 && red == 0 && blue != 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);

        falg = false;
      } else if (Math.abs(red - green) > 20 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");

        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(30deg,transparent,transparent 10px,#000 12px,#000 2px)";
        edited.add(element);

        falg = false;
      } else if (Math.abs(red - green) > 20 && red != 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(110deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);
        falg = false;
      } else {
      }
    }
  }
  if (element.style.backgroundImage && falg === true) {
    let background = element.style.backgroundImage;
    if (
      background.includes("repeating-linear-gradient") &&
      background.includes(
        "transparent, transparent 10px, rgb(0, 0, 0) 12px, rgb(0, 0, 0) 2px"
      )
    ) {
      const regex = /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
      const match = background.replace(regex, "");
      edited.delete(element);
      element.style.backgroundImage = match;
    }
  }
}

(() => {
  chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    if (request.message != "hello") {
      console.log("url: ", request.message);

      sendResponse({ message: "hi" });
    }
    if (data) {
      console.log("data: ", data);
      let diseasecheck1 = 0;
      let diseasecheck2 = 1;
      let diseasecheck3 = 2;
      if (data.disease === "Protonopia") {
        diseasecheck1 = 0;
        diseasecheck2 = 1;
        diseasecheck3 = 2;
      } else if (data.disease === "Deuternopia") {
        diseasecheck1 = 1;
        diseasecheck2 = 0;
        diseasecheck3 = 2;
      } else if (data.disease === "Tritanopia") {
        diseasecheck1 = 2;
        diseasecheck2 = 1;
        diseasecheck3 = 0;
      }
      Arr = document.querySelectorAll("*");
      var elements = Array.from(Arr);
      for (let j = 0; j < elements.length; j++) {
        if (elements[j].tagName == "BODY") {
          var count = j;
          break;
        }
      }

      console.log(document.getElementsByTagName("html"));

      for (let i = count; i < elements.length; i++) {
        checkcolor(elements[i], diseasecheck1, diseasecheck2, diseasecheck3);
      }
      let isCheckingColor = true;

      const observer = new MutationObserver((mutations) => {
        console.log(mutations);
        observer.disconnect();    //disconnect the observer to avoid changes done by the extension to be observed
        let checkedelements = Array();         //array to store the elements that have been checked to avoaid repitition
        if (isCheckingColor) {
          for (let i = 0; i < mutations.length; i++) {     //loop through the mutations
            if (!checkedelements.includes(mutations[i].target)) {      //check if the element has been checked before
              let elements = mutations[i].target.querySelectorAll("*");    //get all the elements inside the target
              for (let j = 0; j < elements.length; j++) {      //loop through the elements
                checkcolor(elements[j], diseasecheck1, diseasecheck2, diseasecheck3);
              }
              checkedelements.push(mutations[i].target);
            }
          }
        }
        isCheckingColor = true;
        if (data === "logout") {   //check if the user has logged out
          clear();
          data = "";
          return;
        }

        observer.observe(document.body, {   //observe the body for changes
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true,
          attributeFilter: ["style", "class"],
          // repeat: 3000 // Check for changes every second
        });
      });

        // Check for changes in the DOM here
      observer.observe(document.body, {   //observe the body for changes (initially)
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
        attributeFilter: ["style", "class"],
        // repeat: 3000 // Check for changes every second
      });

      
      return true;
    }
  });
})();
console.log("hello from content.js");
