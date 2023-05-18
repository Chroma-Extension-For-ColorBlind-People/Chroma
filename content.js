let data = "";
// state = "OFF";
chrome.storage.sync.get(["myData"], function (result) {   //GET THE DATA FROM CHROME STORAGE STORED BY BACKGROUND.JS
  data = result.myData;
  console.log("data:", data);
});
chrome.storage.sync.get(["state"], function (result) {   //GET THE DATA FROM CHROME STORAGE STORED BY BACKGROUND.JS
  state = result.state;
  console.log("state:", state);
});

chrome.storage.sync.onChanged.addListener(function (changes, namespace) { //LISTENER FOR CHANGES IN CHROME STORAGE (WHEN USER LOGS OUT)
  chrome.storage.sync.get(["myData"], function (result) {
    data = result.myData;
    if (data === "logout") {
      clear();
      data = "";
      return;
    }
  });
  chrome.storage.sync.get(["state"], function (result) {   //GET THE DATA FROM CHROME STORAGE STORED BY BACKGROUND.JS
    state = result.state;
    state = state.trim();
    console.log("state:", state);
    if (state === "OFF") {
      clear();
      return;
    }
  });
});

function clear() {
  for (const element of edited) {
    console.log("clearing")
    let background = element.style.backgroundImage;
    console.log(background);
    const regex1 = /repeating-linear-gradient\(\d+deg, transparent, transparent 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g; //REGEX TO MATCH THE BACKGROUND IMAGE
    let match = element.style.backgroundImage.replace(regex1, "");    //REPLACE THE BACKGROUND IMAGE WITH EMPTY STRING
    const regex2 = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
    match = match.replace(regex2, "");
    match = match.trim();
    console.log("matches: ",match);
    element.style.backgroundImage = match;
    edited.delete(element);
  }
  return;
}
const edited = new Set();

function checkcolor(element, first, second, third) {      //FUNCTION TO CHECK THE COLOR OF THE ELEMENT
  //FIRST, SECOND AND THIRD ARE THE INDEXES OF THE RGB VALUES 
  try {
    if (data === "logout" || data === "" || state != "ON") {
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


    let style = getComputedStyle(element);      //GET THE COMPUTED STYLE OF THE ELEMENT
    let falg = true;                             //FLAG TO CHECK IF THE BACKGROUND IMAGE HAS BEEN CHANGED
    for (let i = 0; i < arr.length; i++) {
    }

    for (let i = 0; i < arr.length; i++) {      //LOOP THROUGH THE ARRAY OF STYLES
      if (i == 0) {                           //CHECK IF THE ELEMENT IS A TEXT ELEMENT is empty AND SKIP IT
        let test = element.textContent;
        test = test.split("\n");
        if (test[0] == "") {
          i++;
        }
      }

      let color = style.getPropertyValue(arr[i]);
      const pattern = /rgb.?\(.*?\)/g;     //REGEX TO MATCH THE RGB VALUES
      let matches = color.match(pattern);

      let spaces = /[^ ]/; // regular expression that matches any non-space character
      // let hasNonSpaceChar = regex.test(str);

      if (matches == null) {
        continue;
      }
      for (let j = 0; j < matches.length; j++) {   //LOOP THROUGH THE MATCHES
        color = matches[j].match(/\d+/g);
        let color1 = parseInt(color[first]);        //VALUES OF COLORS WILL BE ASSIGNED ACCORDING TO FIRST, SECOND AND THIRD VALUES DEPENDIND ON THE DISEASE
        let color2 = parseInt(color[second]);
        let color3 = parseInt(color[third]);
        //CONDITIONS TO CHECK THE COLOR OF THE ELEMENT AND CHANGE THE BACKGROUND IMAGE ACCORDINGLY

        if (color1 != 0 && color2 == 0 && color3 == 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");

          // match = match.trim();

          if (spaces.test(match)) {
            match = ", " + match;
          }

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = " repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;
          edited.add(element);
          falg = false;

        } else if (color1 > color3 / 3 && color2 == 0 && color3 != 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");
          // match = match.trim();

          if (spaces.test(match)) {
            match = ", " + match;
          }

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = " repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;
          edited.add(element);
          falg = false;

        } else if (color1 == 0 && color2 != 0 && color3 == 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");
          // match = match.trim();


          if (spaces.test(match)) {
            match = ", " + match;
          }

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = " repeating-linear-gradient(90deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;
          edited.add(element);
          falg = false;

        } else if (color2 > color3 / 3 && color1 == 0 && color3 != 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");
          // match = match.trim();


          if (spaces.test(match)) {
            match = ", " + match;
          }
       

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = " repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;

          edited.add(element);

          falg = false;
        } else if (Math.abs(color1 - color2) > 20 && color3 == 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");
          // match = match.trim();


          if (spaces.test(match)) {
            match = ", " + match;
          }
        

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = " repeating-linear-gradient(30deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;
          edited.add(element);
          falg = false;

        } else if (Math.abs(color1 - color2) > 20 && color1 != 0) {
          const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
          let match = style.getPropertyValue("background-image").replace(regex, "");
          match = match.trim();


          if (spaces.test(match)) {
            match = ", " + match;
          }
         

          element.style.backgroundImage = element.style.backgroundImage.replace(regex, "");
          element.style.backgroundImage = "repeating-linear-gradient(110deg,transparent,transparent 10px,#000 12px,#000 2px)" + match;
          edited.add(element);
          falg = false;

        } else {
        }
      }

    }

    if (element.style.backgroundImage && falg === true) {   //IF NONE OF THE PROPERTIES SASTISFY THE CONDITIONS THEN REMOVE THE BACKGROUND IMAGE IF IT HAS BEEN CHANGED BEFORE
      let background = style.getPropertyValue("background-image")
      if (background.includes("repeating-linear-gradient") && background.includes("transparent, transparent 10px, rgb(0, 0, 0) 12px, rgb(0, 0, 0) 2px")) {
        const regex = /repeating-linear-gradient\(\d+deg, rgba\(0, 0, 0, 0\), rgba\(0, 0, 0, 0\) 10px, rgb\(0, 0, 0\) 12px, rgb\(0, 0, 0\) 2px\)\,/g;
        let match = background.replace(regex, "");
        edited.delete(element);
        element.style.backgroundImage = match;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {    //LISTENER FOR MESSAGES FROM BACKGROUND.JS
    if (request.message === "hello") {
      console.log("url: ", request.message);

      sendResponse({ message: "hi" });
    }
    try {
      if (data && state === "ON") {                 //CHECK IF THE DATA HAS BEEN RECEIVED FROM THE BACKGROUND.JS
        let diseasecheck1 = 0;
        let diseasecheck2 = 1;
        let diseasecheck3 = 2;
        if (data.disease === "Protonopia") {        //CHECK THE DISEASE OF THE USER AND ASSIGN THE VALUES ACCORDINGLY THAT WILL BE USED IN THE FUNCTION
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
        Arr = document.querySelectorAll("*");       //GET ALL THE ELEMENTS IN THE DOCUMENT
        var elements = Array.from(Arr);           //CONVERT THE NODELIST TO ARRAY
        for (let j = 0; j < elements.length; j++) {     //LOOP THROUGH THE ELEMENTS TO GET THE BODY ELEMENT
          if (elements[j].tagName == "BODY") {
            var count = j;
            break;
          }
        }


        for (let i = count; i < elements.length; i++) {                           //LOOP THROUGH THE ELEMENTS CHECK COLORS
          checkcolor(elements[i], diseasecheck1, diseasecheck2, diseasecheck3);
        }
        let isCheckingColor = true;

        const observer = new MutationObserver((mutations) => {          //OBSERVER TO OBSERVE THE CHANGES IN THE DOM

          observer.disconnect();    //DISCONNECT THE OBSERVER TO AVOID ELEMENTS BEING CHANGE BY EXTENSION
          let checkedelements = Array();          //ARRAY TO STORE THE ELEMENTS THAT HAVE BEEN CHECKED
          if (isCheckingColor) {
            for (let i = 0; i < mutations.length; i++) {     //LOOP THROUGH THE MUTATIONS
              if (!checkedelements.includes(mutations[i].target)) {      //CHECK IF THE ELEMENT HAS BEEN CHECKED BEFORE
                checkcolor(mutations[i].target, diseasecheck1, diseasecheck2, diseasecheck3);   //CHECK THE COLOR OF THE ELEMENT
                try {
                  let elements = mutations[i].target.querySelectorAll("*");    //GET ALL THE ELEMENTS IN THE MUTATION
                  for (let j = 0; j < elements.length; j++) {      //LOOP THROUGH THE ELEMENTS TO GET THE BODY ELEMENT

                    checkcolor(elements[j], diseasecheck1, diseasecheck2, diseasecheck3);

                  }
                  checkedelements.push(mutations[i].target);
                }
                catch (error) {
                  console.log(error);
                }
                // let elements = mutations[i].target.querySelectorAll("*");    //GET ALL THE ELEMENTS IN THE MUTATION
                // for (let j = 0; j < elements.length; j++) {      //LOOP THROUGH THE ELEMENTS TO GET THE BODY ELEMENT

                //   checkcolor(elements[j], diseasecheck1, diseasecheck2, diseasecheck3);

                // }
                // checkedelements.push(mutations[i].target);
              }
            }
          }
          isCheckingColor = true;
          if (data === "logout" && state != "ON") {   //CHECK IF THE USER HAS LOGGED OUT
            observer.disconnect();
            clear();
            data = "";
            return;
          }

          observer.observe(document.body, {   //OBSERVE THE BODY FOR CHANGES AGAIN
            subtree: true,
            childList: true,
            attributes: true,
            characterData: true,
            attributeFilter: ["style", "class"],
            // repeat: 3000 // Check for changes every second
          });
        });

        // Check for changes in the DOM here
        observer.observe(document.body, {   //OBSERVE THE BODY FOR CHANGES(THIS IS THE FIRST TIME THE OBSERVER IS CALLED)
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true,
          attributeFilter: ["style", "class"],
          // repeat: 3000 // Check for changes every second
        });


        return true;
      }
    } catch (error) {
      console.log(error);
    }
  });
})();
console.log("hello from content.js");
