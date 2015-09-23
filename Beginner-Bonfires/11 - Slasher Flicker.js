function slasher(arr, howMany) {
  
  //return arr.slice(howMany);
  /*
  for(var i = 0; i < howMany; i++){
      arr.shift();
  }
  return arr;
  */
  var result = [];
  for(var i = howMany; i < arr.length; i++){
      result.push(arr[i]);
  }
  return result;
}

slasher([1, 2, 3], 2);
