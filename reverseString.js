/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/


function reverseString(str) {
    let reverseStr="";
    for (let i=0; i<str.length; i++) {
      let eachLetter = str.charAt(i)
      reverseStr =  eachLetter + reverseStr
    }
  
    return reverseStr;
  }
  
  reverseString("hello");