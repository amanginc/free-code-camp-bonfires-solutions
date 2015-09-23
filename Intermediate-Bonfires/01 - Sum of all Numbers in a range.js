function sumAll(arr) {
 /*
 //using min/max
 var min = Math.min.apply(null,arr),max = Math.max.apply(null,arr);
  var arr2 = [];
  for(var i = min; i <=max; i++){
    arr2.push(i);
  }
   var sim = arr2.reduce(function(prevVal,currentVal){
    return prevVal+currentVal;
  });
  return sim;
 */ 
  //using sort to sort array numbers without using min/max function
  var arr2 = [];
  arr.sort(function(a,b){
    return a-b;
  });
  
  for(var i = arr[0]; i <= arr[1]; i++){
    arr2.push(i);
  }
  var sum = arr2.reduce(function(prevVal,currVal){
    return prevVal+currVal;
  });
  return sum;
}

sumAll([4, 1]);
