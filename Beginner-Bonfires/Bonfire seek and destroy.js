function destroyer(arr) {
  var arg = arguments;
  var result = [];
    for(var i = 0; i < arr.length; i++){
        destroy = false;
        for(var j = 1;!destroy && j < arg.length; j++){
            if(arr[i] === arg[j]){
                destroy = true;
            }
        }
        if(!destroy){
            result.push(arr[i]);
        }
    }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
