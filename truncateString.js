/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let newStr = str.substring(0,num)
    console.log(str.length)
    if (newStr.length < str.length) {
      console.log(newStr)
      return newStr+'...'
    }
    else {
      console.log(newStr)
      return newStr
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);