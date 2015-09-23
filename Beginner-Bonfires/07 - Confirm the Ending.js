function end(str, target) {
/*
    var spl = str.split(' ');
    if (spl.length === 1){
        return str[str.length-1] === target;
    } else {
        if (spl[spl.length-1] === target){
            return true;
        } else{
            return false;
        }
    }
  */
  return str.substr(-target.length) === target;
}
[end('He has to give me a new name', 'name')
,end('Bastian', 'n')
];
