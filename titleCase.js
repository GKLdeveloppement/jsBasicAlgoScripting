/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let wordArr = str.split(' ')
    let newArr = []
    //console.log(wordArr)
    for (let i=0; i < wordArr.length; i++) {
      let newWord = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1).toLowerCase();
      
      newArr.push(newWord)
  
    }
    return newArr.join(' ')
  }
  
  titleCase("I'm a little tea pot");