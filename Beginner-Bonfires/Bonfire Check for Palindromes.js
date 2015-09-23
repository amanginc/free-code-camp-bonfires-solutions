function palindrome(str) {
	
    var upperRep = str.toUpperCase().replace(/\W|_/g, '');
	/*//for loop
    var len = upperRep.length;

	for(var i = 0, j = len-1; i < len/2; i++, j--){
		if(upperRep[i] !== upperRep[len-1]) return false;
	}
    return true;
    
    //functional
    
    return upperRep === upperRep.split('').reverse().join('');
  */
     //recursion 
     return upperRep === upperRep.split('').reverse().join('');
  }
  
palindrome('not a plain');
