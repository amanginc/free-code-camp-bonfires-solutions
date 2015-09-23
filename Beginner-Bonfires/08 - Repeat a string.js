function repeat(str, num) {
  if (num < 0) return '';
    /*
  arr = [];
  for (var i = 0; i < num; i++){
     arr.push(str);
  }
  return arr.join("");
    
    //2nd for loop
    var result = '';
    for(var i = 0; i < num; i++){
        result += str;
    }
    return result;
    
    //while loop
    var result = '';
    while (num-- > 0){
        result += str;
    }
    return result;
    */
  //functional
  return num < 0 ? '' : str.repeat(num);
}

repeat('abc', 3);
