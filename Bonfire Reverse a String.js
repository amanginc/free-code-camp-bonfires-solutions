function reverseString(str) {
  /*FUNCTIONAL Programming using functions
  
  return str.split('').reverse().join('');
  
  For Loop solution 
  
  var result = '';
  for (var i = str.length-1; i >= 0; i--){
    result += str[i];
  }
  return result;
  */
  /*While Loop solution
  
  var result = '';
  var i = str.length;
  while (i-- > 0){
    result+=str[i];
  }
  return result;
  
  Recursion w/o ternary operator
  
  if (!str) return '';
  return reverseString(str.slice(1)) + str[0];
  */
  //Recursion with ternary operator
  
  return str ? reverseString(str.slice(1)) + str[0] : '';
  
}

reverseString('htraE morf sgniteerG');
