var message = "Hello Typescript";
console.log(message);
// create a new heading 1 element
var heading = document.createElement("h1");
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
document.body.onload = addElement;
function addElement() {
    // create a new div element
    var newDiv = document.createElement("div");
    // and give it some content
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
var myHeading = document.querySelector("h1");
myHeading === null || myHeading === void 0 ? void 0 : myHeading.append("fsdafsdfasf");
