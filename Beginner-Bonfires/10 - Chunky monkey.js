function chunk(arr, size) {
  var arr2 = [];
  for(var i = 0; i < arr.length; i += size){
    arr2.push(arr.slice(i, i+size));
  }
  return arr2;
}
chunk(['a', 'b', 'c', 'd'], 2);
