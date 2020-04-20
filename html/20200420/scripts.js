
// Concepts:

// JavaScript in the browser
//      XMl, JSON, jQuery, Ajax, API

// JS Engines:
//      V8 (Chrome, Node, Edge, Opera)
//      SpiderMonkey (Firefox)
//      Chakra (Internet Explorer, Edge)

// DOM aka Document Object Module
//      DOM tree.

// Adding javascript to HTML:
//      - The `<script>` tag
//      - External JS with `<script src="...">`

// The Window object
//      (objects functions and variables) are member of window object.
//      document object is also member of the window object
//      the window object contain many Properties amd methods

// -Host object-
//      are objects supplied by a certain environment.
//      like in browser environment you will find window
//      in node.js environment you will find NodeList

// -Native object-
//      are standard built-in objects provided by Javascript.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects



// Code:

// window.alert("Hi you are here");
// let x = window.prompt("enter your name", "Ali");
// console.log(x);

function change() {
    window.document.getElementsByTagName("h1")[0].outerHTML =
      "<h6>Hi, this is me</h6>";
    let newBox = document.getElementById("main");
    console.log(newBox);
    newBox.style.backgroundColor = "red";
}

function reset() {
    window.document.getElementsByTagName("h6")[0].outerHTML =
    "<h1>Hi, this is me</h1>";
    let newBox = document.getElementById("main");
    console.log(newBox);
    newBox.style.backgroundColor = "white";
}

const multiply = () => {
  let userNum = document.querySelector("#num").value;
  //   console.log(userNum);
  let x = "";
  for (let i = 0; i <= 10; i++) {
      if (i < 10) {
          x += `&nbsp;&nbsp;${i} * ${userNum} = ${i * userNum} <br>`;
      } else
          x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  document.querySelector(".result").innerHTML = x;
};