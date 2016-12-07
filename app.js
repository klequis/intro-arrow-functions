"use strict";

/*
 * - Open index.html in a browser to see the output of this file
 * - See explanations at http://klequis.commonly
*/

write("<h1>Hello. I love black.</h1>");

/*
 * EXAMPLE 01
*/
write("<b>Example 01</b>");
var traditional01 = function() {
  return "traditional01";
};
var arrow01 = () => "arrow01";
write(traditional01());
write(arrow01());

/*
 * EXAMPLE 02
*/
write("<b>Example 02</b>");
var traditional02 = function(str) {
  return str;
};
var arrow02 = str => str;
write(traditional02("traditional02"));
write(arrow02("arrow02"));

/*
 * EXAMPLE 03
 * - With arrow functions, you need '()' if you have 2 or more arguments.
*/
write("<b>Example 03</b>");
var traditional03 = function(str1, str2) {
  return str1 + " " + str2;
};
var arrow03 = (str1, str2) => str1 + " " + str2;
write(traditional03("this is", "traditional3"));
write(arrow03("this is", "arrow03"));

/*
 * EXAMPLE 04
*/
write("<b>Example 04</b>");
var traditional04 = function(str) {
  var strOut;
  if (str.length > 4) {
    strOut = str + " is more than 4 characters";
  } else {
    strOut = str + " is less than 4 characters";
  }
  return strOut;
};
var arrow04 = str => {
  var strOut;
  if (str.length > 4) {
    strOut = str + " is more than 4 characters";
  } else {
    strOut = str + " is less than 4 characters";
  }
  return strOut;
};
write(traditional04("traditional04"));
write(arrow04("arrow04"));

/*
 * Utility functions
*/
// This just adds "<br><br>" to the message for spacing.
function write(msg) {
  document.write(msg + "<br><br>");
}
