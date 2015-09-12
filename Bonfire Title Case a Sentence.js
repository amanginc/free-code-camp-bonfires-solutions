function titleCase(str) {
    /*
    first i will split them into an array
    then i will make a for loop to capitalize each element's first letter
    */
    /*
    //first for loop
    var result = [];
    var split = str.toLowerCase().split(' ');
    for(var i = 0; i < split.length; i++){
      result.push(split[i].charAt(0).toUpperCase()  + split[i].substring(1));
    }
    return result.join(' ');
    
    //2nd for loop
    var result = "";
    for(var i = 0; i < str.length; i++){
        result += str.charAt(i).toUpperCase();
        for(var j = 1; i+j < str.length && str.charAt(i+j) !== ' '; j++){
            result += str.charAt(i+j).toLowerCase();
        }
        i += j;
        if(i < str.length){
            result += " ";
        }
    }
    return result;
    
    //functional 
    var split = str.toLowerCase().split(' ');
    var compl = split.map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return compl.join(' ');
    
    //functional one line
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    */
    //with replace function
    return str.toLowerCase().replace(/\S+/g, match => match.charAt(0).toUpperCase() + match.slice(1));
                
}

titleCase("i'm a little tea pot");
