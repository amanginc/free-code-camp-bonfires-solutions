function findLongestWord(str) {
  /*
  First I will split this string into an array for each word.
  Then I will make a for loop to compare each element of the array
  have a variable to hold the currentLargest element
  if statement to compare the elements
  Here is the pseudo code
  
  string.split(' ')
  currentLargest = str[i]
  for (var i = 0; i < str.length; i++)
    
    if currentLargest < str[i+1]
    currentLargest = str[i]
    
  return currentLargest
 */ 
 
  var arr = str.split(' '); // returns [ 'The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]
 var largest = arr[0];
/*
for(var i = 1; i < arr.length; i++){
    if(largest.length < arr[i].length) largest = arr[i];
}

    var i = 0;
    while(++i < arr.length){
        if (largest.length < arr[i].length) largest = arr[i];
    }
    
    
    var i = arr.length;
    while(i--){
        if (largest.length < arr[i].length) largest = arr[i];
    }
    
    */
    /*
    For functional, i will use the Array.map function to loop through the array, returning the length of each element. Then i will use the Math.max function to find the max length of the elements.
    */
    /*
    var wordLengths = arr.map(word => word.length);
    return Math.max.apply(null,wordLengths);
    */
    // one line functional
    return Math.max.apply(null,arr.map(word => word.length));
    
    //return largest.length;
    
}

findLongestWord('The quick brown fox jumped over the lazy dog');
