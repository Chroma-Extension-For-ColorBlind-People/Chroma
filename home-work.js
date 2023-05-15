// Description: This file contains the code that will be injected into the webpage

// var Rgb = Array();
// var RgB = [];
// var rGB = [];
// var rGb = [];

var selected = Array();
var condition = Array();

function checkcolor(element) {
    let arr = ['color', 'background-color', 'fill', 'stroke', 'stop-color', 'flood-color',
        'lighting-color', 'background'];
    let arr1 = ['color', 'backgroundColor', 'fill', 'stroke', 'stopColor', 'floodColor',
        'lightingColor', 'background'];

    // const myElement = document.getElementById("myElement");

    // const newDiv = document.createElement("div");

    // let html = '<div style="width: 100%; height: 100%; repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ element.innerHTML + '</div>';
    // element.innerHTML = html;

    let style = getComputedStyle(element);

    for (let i = 0; i < arr.length; i++) {

        let color = style.getPropertyValue(arr[i]);
        // if (color && element.tagName == "DIV") {
        const pattern = /rgb\(.*?\)/g;
        const matches = color.match(pattern);
        if (matches == null) {
            continue;
        }

        for (let j = 0; j < matches.length; j++) {
            color = matches[j].slice(4, -1);
            color = color.split(",");
            red = parseInt(color[0]);
            green = parseInt(color[1]);
            blue = parseInt(color[2]);
            // continue;
            if (red != 0 && green == 0 && blue == 0) {
                // let propertyValue = element.style.getPropertyValue(arr1[i]);
                // if (propertyValue && propertyValue !== 'none') {
                    // element.style.setProperty(arr1[i], propertyValue + ', repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)');
                    element.style.backgroundImage += ' repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    console.log(element);
                // }

                    // let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ element.innerHTML + '</div>';
                    // element.innerHTML = html;

                    // const targetElement = element;// Insert the opening tag before the target element
                    // const parentElement = targetElement.parentNode;
                    // parentElement.insertAdjacentHTML('beforebegin', '<div id="temp">');
                    // // Insert the closing tag after the target element
                    // targetElement.insertAdjacentHTML('afterend', '</div>');
                    // Second Attempt start
                    // Create a new div element
                    // const newDiv = document.createElement('div');

                    // Set the HTML content of the new div element to the inner HTML of the form group element
                    // newDiv.innerHTML = element.innerHTML;
                    // newDiv.style.width = "100%";
                    // newDiv.style.height = "100%";
                    // newDiv.style.backgroundImage = 'repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)';


                    // Replace the inner HTML of the form group element with the new div element
                    // element.innerHTML = '';
                    // element.appendChild(newDiv);

                    // Second Attempt end


                    // element.innerHTML.insertBefore('<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">');
                    // element.innerHTML.insertAfter('</div>');

                    // if (!(selected.includes(element))){
                    //     selected.push(element);
                    //     condition.push('Rgb');
                    //     console.log(selected);
                    //     console.log(element);
                    // }

                    let observer = new MutationObserver(function(mutations) {
                        // Handle mutations here
                        console.log('DOM mutation detected:', mutations);
                      });
                      

                    return true;


                }
                if (red > blue / 3 && green == 0 && blue != 0) {
                    element.style.backgroundImage += ' repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    // let propertyValue = element.style.getPropertyValue(arr1[i]);
                    // if (propertyValue && propertyValue !== 'none') {
                        // element.style.setProperty(arr1[i], propertyValue + ', repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)');


                    // console.log("b/3");
                    // element.style.backgroundImage = 'repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    // let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ element.innerHTML + '</div>';
                    // element.innerHTML = html;
                    // const newDiv = document.createElement('div');

                    // Set the HTML content of the new div element to the inner HTML of the form group element
                    // newDiv.innerHTML = element.innerHTML;
                    // newDiv.style.width = "100%";
                    // newDiv.style.height = "100%";
                    // newDiv.style.backgroundImage = 'repeating-linear-gradient(0deg,transparent,transparent 10px,#000 12px,#000 2px)';


                    // Replace the inner HTML of the form group element with the new div element
                    // element.innerHTML = '';
                    // element.appendChild(newDiv);
                    // element.innerHTML = html;

                    // if(!(selected.includes(element))){
                    //     selected.push(element);
                    //     condition.push('RgB');
                    //     console.log(selected);
                    //     console.log(element);
                    // }

                    return true;
                }

                else if (green > blue / 3 && red == 0 && blue != 0) {
                    element.style.backgroundImage = element.style.backgroundImage + ' repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)';

                    // element.style.backgroundImage = 'repeating-linear-gradient(90deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    // let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ element.innerHTML + '</div>';
                    // element.innerHTML = html;
                    // const newDiv = document.createElement('div');

                    // Set the HTML content of the new div element to the inner HTML of the form group element
                    // newDiv.innerHTML = element.innerHTML;
                    // newDiv.style.width = "100%";
                    // newDiv.style.height = "100%";
                    // newDiv.style.backgroundImage = 'repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)';


                    // Replace the inner HTML of the form group element with the new div element
                    // element.innerHTML = '';
                    // element.appendChild(newDiv);
                }


                else if (red == 0 && green != 0 && blue == 0) {
                    // element.style.backgroundImage = 'repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    // let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ element.innerHTML + '</div>';
                    // element.innerHTML = html;
                    // const newDiv = document.createElement('div');

                    // Set the HTML content of the new div element to the inner HTML of the form group element
                    // newDiv.innerHTML = element.innerHTML;
                    // newDiv.style.width = "100%";
                    // newDiv.style.height = "100%";
                    // newDiv.style.backgroundImage = 'repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px)';


                    // Replace the inner HTML of the form group element with the new div element
                    // element.innerHTML = '';
                    // element.appendChild(newDiv);

                }
                else if (red == 0 && green == 0 && blue != 0) {
                    // element.style.backgroundImage = 'repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)';
                    // const newDiv = document.createElement('div');

                    // Set the HTML content of the new div element to the inner HTML of the form group element
                    // newDiv.innerHTML = element.innerHTML;
                    // newDiv.style.width = "100%";
                    // newDiv.style.height = "100%";
                    // newDiv.style.backgroundImage = 'repeating-linear-gradient(90deg,transparent,transparent 10px,#000 12px,#000 2px)';


                    // Replace the inner HTML of the form group element with the new div element
                    // element.innerHTML = '';
                    // element.appendChild(newDiv);
                }



                // if (element.style.backgroundImage != 'repeating-linear-gradient(45deg,transparent,transparent 10px,#ccc 12px,#ccc 2px)') {
                //     if (red < 256) {
                //         // element.classList.add("diagonal-lines");
                //         // element.style.border = "solid 1px";
                //         element.style.backgroundImage = 'repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px)';

                //         // console.log(element.style);
                //     }
                // }

            }

            // }
        }
    }
    var injectScript = function (element) {
        var node = document.createElement('script');
        var jscode = "(" + "let html = '<div style=\'width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);\'>'" + element.innerHTML + "'</div>';elements[i].innerHTML = html; + ')();';";
        node.innerHTML = jscode;
        document.body.appendChild(node);
    };


    (() => {
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


            Arr = document.querySelectorAll("*");
            var elements = Array.from(Arr);

            // console.log(elements);
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].tagName == "BODY") {
                    elements[j].elementId
                    var count = j;
                    break;
                }
            }
            // document.head.innerHTML+= '<meta http-equiv="Content-Security-policy" content="style-src "self" https://fonts.googleapis.com https://apis.google.com "unsafe-inline"; font-src "self" https://fonts.gstatic.com; script-src "self" https://adservice.google.com/adsid/integrator.js?domain=www.friv.com/>'
            for (let i = count; i < elements.length; i++) {

                // console.log(elements[i].tagName);
                // console.log(elements[i]);
                // console.log(getComputedStyle(elements[i]));

                if (checkcolor(elements[i])) {
                    selected.push(i);
                    // condition.push('Rgb');
                    // console.log(selected);
                    // console.log(elements[i]);
                }
                // if(i==100){
                //     break;
                // }

            }
            console.log(selected);
            // console.log(condition);

            // for(let i=0;i<selected.length;i++){
            //     // if(condition[i] == 'Rgb'){
            //         let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(45deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ elements[i].innerHTML + '</div>';
            //         elements[i].innerHTML = html;
            // }
            // else if(condition[i] == 'RgB'){
            //     let html = '<div style="width: 100%; height: 100%; background-image: repeating-linear-gradient(135deg,transparent,transparent 10px,#000 12px,#000 2px);">'+ selected[i].innerHTML + '</div>';
            //     selected[i].innerHTML = html;

            // }
            // }


            if (request.message === "hello") {
                console.log("hello");
                sendResponse({ message: "hi" });
            }
            return true; // Need to add this line to indicate that you will be sending a response asynchronously
        });
    })();
    console.log("hello from content.js");

    body = document.querySelector("body");
    body.style.border = "5px solid blue";



// div1 = document.getElementById("calcform");
// style = getComputedStyle(div1);
// console.log(style);