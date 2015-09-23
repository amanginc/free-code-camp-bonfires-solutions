function mutation(arr) {
    /*
    //first for loop
    var low = arr[0].toLowerCase();
    var spl = arr[1].toLowerCase().split('');
    for(var i = 0; i < spl.length; i++){
        if(low.indexOf(spl[i]) === -1) return false;
    }
    return true;
    
    //2nd for loop
    var needles = arr[1].toLowerCase();
    var haystack = arr[0].toLowerCase();
    for(var i = 0; i < needles.length; i++){
        var needle = needles[i];
        var found = false;
        for(var j = 0; j < haystack.length; j++){
            if(needle === haystack[j]){
                found = true;
                break;
            }
        }
        if(!found) {
            return false;
        }
    }
    return true;
    */
    var haystack = arr[0].toLowerCase();
    return arr[1]
              .toLowerCase()
              .split('')
              .every((needle) => haystack.indexOf(needle) > -1);
    
    
}
mutation(['Mary', 'Army']);
