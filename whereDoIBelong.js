function getIndexToIns(arr, num) {

    /*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
    */

    let sortArr = [...arr]
    sortArr.sort(function(a, b){return a - b}); // car le .sort() fonctionne très bien avec les string mais pas avec les chiffres donc il faut faire des comparaison
    
    
    let insertIndex = 0
      for (let i=0; i < sortArr.length; i++) {
        if (sortArr[0] > num ){
          console.log("cas 1 : "+sortArr)
          return 0
        }
        if (sortArr[i] === num ) {
          insertIndex = sortArr.indexOf(sortArr[i])
          console.log("cas 2 :"+insertIndex)
          return insertIndex
        } 
        if (sortArr[i] > num )  {
          insertIndex = sortArr.indexOf(sortArr[i])
          console.log(sortArr[i])
          console.log("cas 3 :"+ insertIndex)
          return insertIndex
        }
      }
      return (sortArr.length)
    }
    
    getIndexToIns([2, 5, 10], 15);