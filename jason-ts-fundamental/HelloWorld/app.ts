let message: string = "Hello Typescript";
console.log(message);

// create a new heading 1 element
let heading = document.createElement("h1");
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

const myHeading = document.querySelector("h1");
myHeading?.append("\n something added");
