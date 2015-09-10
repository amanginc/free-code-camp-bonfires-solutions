function reverseString(str) {
  //FUNCTIONAL Programming
  //return str.split('').reverse().join(''); 
  //HARDCODE BY USING FOR LOOP TO REVERSE
  var result = '';
  for (var i = str.length-1; i >= 0; i--){
    result += str[i];
  }
  return result;
}

reverseString('htraE morf sgniteerG');
