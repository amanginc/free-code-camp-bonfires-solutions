function where(arr, num) {
  /*
  for(var i = 0; i < arr.length; i++){
      if(num <= arr[i]) return i;
  }
  return arr.length;
  */
  
 var sorted =arr.concat(num).sort((a,b)=>a-b);
  return sorted.indexOf(num);
}

where([40,60], 50);
