function diff(arr1, arr2) {
 var newArr = arr1.concat(arr2);
 
 newArr = newArr.filter(function(item){ 
     if(arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1)          return item;
     });
 return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
