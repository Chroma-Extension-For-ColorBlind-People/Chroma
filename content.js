let data = "";
chrome.storage.sync.get(["myData"], function (result) {
  console.log("Data retrieved: ", result.myData);
  data = result.myData;
});

chrome.storage.sync.onChanged.addListener(function (changes, namespace) {
  chrome.storage.sync.get(["myData"], function (result) {
    console.log("Data retrieved: ", result.myData);
    data = result.myData;
    if(data==="logout"){
      clear();
      data="";
      return;
    }
  });
});


function clear() {
  for (const element of edited) {
    const regex =
      /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
    const match = element.style.backgroundImage.replace(regex, "");
    element.style.backgroundImage = match;
  }
}
const edited = new Set();
var condition = Array();

function checkcolor(element, checkstr) {
  if(data==="logout" || data===""){
    clear();
    data="";
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
        // console.log(test);
        // console.log("empty", element);
        i++;
      }
    }

    document.getElementsByClassName;

    let color = style.getPropertyValue(arr[i]);
    const pattern = /rgb.?\(.*?\)/g;
    const matches = color.match(pattern);

    if (matches == null) {
      continue;
    }

    for (let j = 0; j < matches.length; j++) {
      color = matches[j].match(/\d+/g);
      red = parseInt(color[0]);
      green = parseInt(color[1]);
      blue = parseInt(color[2]);
      // console.log(red, green, blue);
      if (red != 0 && green == 0 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)";

        // console.log("fuck");
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
        // console.log("fuck");

        falg = false;
      } else if (red == 0 && green != 0 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(90deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);
        // console.log("fuck");

        falg = false;
      } else if (green > blue / 3 && red == 0 && blue != 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);
        // console.log("fuck");

        falg = false;
      } else if (Math.abs(red - green) > 20 && blue == 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");

        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(30deg,transparent,transparent 10px,#000 12px,#000 2px)";
        edited.add(element);
        // console.log("fuck");

        falg = false;
      } else if (Math.abs(red - green) > 20 && red != 0) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage =
          match +
          " repeating-linear-gradient(110deg,transparent,transparent 10px,#000 12px,#000 2px)";

        edited.add(element);
        // console.log("fuck");
        falg = false;
      } else {
        // console.log('no fuck')
      }
    }
  }
  // console.log(falg);
  if (element.style.backgroundImage && falg === true) {
    // console.log(element.style.backgroundImage);
    let background = element.style.backgroundImage;
    if (
      background.includes("repeating-linear-gradient") &&
      background.includes(
        "transparent, transparent 10px, rgb(0, 0, 0) 12px, rgb(0, 0, 0) 2px"
      )
    ) {
      const regex =
        /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
      // console.log("removed");

      const match = background.replace(regex, "");
      edited.delete(element);
      element.style.backgroundImage = match;
    }
  }
}

(() => {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (data) {
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
        checkcolor(elements[i], "first");
      }
      let isCheckingColor = true;
      let counter = 0;

      const observer = new MutationObserver((mutations) => {
        counter++;
        console.log("counter: ", counter);
        console.log(mutations);
        observer.disconnect();
        let checkedelements = Array();
        // Check for changes in the DOM here
        if (isCheckingColor) {
          console.log("andar");

          for (let i = 0; i < mutations.length; i++) {
            console.log(1);
            if (!checkedelements.includes(mutations[i].target)) {
              console.log(2);
              let elements = mutations[i].target.querySelectorAll("*");
              for (let j = 0; j < elements.length; j++) {
                console.log(3);
                checkcolor(elements[j], "mutation");
              }
              checkedelements.push(mutations[i].target);
            }
          }

          console.log(
            "------------------------------------------------------------------------"
          );
        }
        isCheckingColor = true;

        console.log("bahir");
        if(data==="logout"){
          clear();
          data="";
          return;
        }
          
        observer.observe(document.body, {
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true,
          attributeFilter: ["style", "class"],
          // repeat: 3000 // Check for changes every second
        });
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
        attributeFilter: ["style", "class"],
        // repeat: 3000 // Check for changes every second
      });

      if (request.message != "hello") {
        console.log("url: ", request.message);

        sendResponse({ message: "hi" });
      }
      return true;
    }
  });
})();
console.log("hello from content.js");

body = document.querySelector("body");
body.style.border = "5px solid blue";
