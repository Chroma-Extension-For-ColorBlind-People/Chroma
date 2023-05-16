
///////////////////////////////////////
// var script2 = document.createElement("script");
// // Set the source of the script to script2.js
// script2.src = "test.js";
// // Append the script element to the document's body
// document.body.appendChild(script2);
let data = JSON.parse(localStorage.getItem('mydata'));
console.log("data", data);
// console.log("Data:", data);
///////////////////////////////////////

const edited = new Set();
var condition = Array();

function checkcolor(element, checkstr) {
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
        test = test.split('\n');
        if (test[0] == '') {
            // console.log(test);
            // console.log("empty", element);
            i++;

        }
    }

    document.getElementsByClassName;

    let color = style.getPropertyValue(arr[i]);
    const pattern = /rgb.?\(.*?\)/g;
    // const pattern1 = /rgba\(.*?\)/g;
    const matches = color.match(pattern);
    // const matches1 = color.match(pattern1);
    // if (matches1 != null){
    // matches.concat(matches1);
    // }
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
// var injectScript = function (element) {
//     var node = document.createElement('script');
//     var jscode = "(" + "let html = '<div style=\'width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);\'>'" + element.innerHTML + "'</div>';elements[i].innerHTML = html; + ')();';";
//     node.innerHTML = jscode;
//     document.body.appendChild(node);
// };

function clear(){
    const userInput = prompt("Enter your input:");
    console.log(userInput);
    if (userInput == "stop") {
        console.log("stop");
        // observer.disconnect();
      for (const element of edited) {
        const regex =
          /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)/g;
        const match = element.style.backgroundImage.replace(regex, "");
        element.style.backgroundImage = match;
      }
      throw new Error('Script execution stopped1.');
    }
}

(() => {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    // let disease = localStorage.getItem("disease");
    // let name = localStorage.getItem("name");
    // let email = localStorage.getItem("email");
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
        console.log("counter: ",counter);
        // if(counter > 5){
        //     observer.disconnect();
        //     clear();
        //     throw new Error('Script execution stopped.');
        // }
      console.log(mutations);
      observer.disconnect();
      let checkedelements = Array();
      // Check for changes in the DOM here
      if (isCheckingColor) {
        console.log("andar");

        // for (let i = 0; i < mutations.length; i++) {
        //     checkcolor(mutations[i].target, 'mutation');
        //     if (mutations[i].type === 'childList' && mutations[i].addedNodes.length > 0) {
        //       let childs = mutations[i].addedNodes;
        //       let childsarray = Array.from(childs);
        //       console.log('childlist:', mutations[i].addedNodes);
        //       for (let j = 0; j < childsarray.length; j++) { // Updated loop variable
        //         console.log('child:', childsarray[j].parentElement);
        //         let elements = childsarray[j].parentElement.querySelectorAll("*"); // Moved the definition of `elements`
        //         for (let k = 0; k < elements.length; k++) { // Updated loop variable
        //           checkcolor(elements[k], 'mutation');
        //         }
        //       }
        //     }
        //   }

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

        // edited = Array();
        console.log(
          "------------------------------------------------------------------------"
        );
      }
      isCheckingColor = true;

      console.log("bahir");

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

    

    // {// // Select the node that will be observed for mutations
    // // const targetNode = document.body;

    // // // Options for the observer (which mutations to observe)
    // // const config = { childList: true, subtree: true };

    // // // Callback function to execute when mutations are observed
    // // const callback = function (mutationsList, observer) {
    // //     for (let mutation of mutationsList) {
    // //         if (mutation.type === 'childList') {
    // //             console.log('A child node has been added or removed.');
    // //         }
    // //         else{
    // //             console.log('The ' + mutation.attributeName + ' attribute was modified.');
    // //             checkcolor(mutation.target);
    // //         }
    // //     }
    // // };

    // // // Create a new observer instance
    // // const observer = new MutationObserver(callback);

    // // // Start observing the target node for configured mutations
    // // observer.observe(targetNode, config);
    // }
    if (request.message != "hello") {
      console.log("url: ", request.message);
     
      sendResponse({ message: "hi" });
    }
    return true;
  });
})();
console.log("hello from content.js");

body = document.querySelector("body");
body.style.border = "5px solid blue";
