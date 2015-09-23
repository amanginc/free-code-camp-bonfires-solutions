function truncate(str, num) {
 
  result = '';
  if (str.length === num || str.length < num) return str;
 /*
  for(var i = 0; i < num-3; i++){
      result += str[i];
  }
  result += '...';
  return result;
  */
  
  return str.slice(0,num-3) + '...';
}

truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
