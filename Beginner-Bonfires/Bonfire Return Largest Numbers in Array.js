function largestOfFour(arr) {
    /*
    arr2 = [];
  for(var i = 0; i < arr.length; i++){
      var largest = 0;
      for(var j = 0; j < arr[i].length; j++){
          if(largest < arr[i][j]) {
              largest = arr[i][j];
          }
      }
      arr2.push(largest);
  }
  return arr2;
  */
  //functional
  
  return arr.map((eachEle) => Math.max.apply(null,eachEle));
 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
