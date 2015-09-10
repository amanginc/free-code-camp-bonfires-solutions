function factorialize(num) {
 
  if (num < 0) return undefined;
  if (num === 0) return 1;

  var result = num;
  /* //for loop
  
  for(var i = 1; i < num; i++){
    result*=i;
  }
  
  //while loops
  
  var i = 1;
  
  while(++i < num){
    result*=i;
  }
  
  while(--num){
    result*=num;
  }
 */
  //Recursion
  
  return num * factorialize(num-1);
  
  return result;
}

factorialize(2);
