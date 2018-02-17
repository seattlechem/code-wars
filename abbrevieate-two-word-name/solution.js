let name = 'Peter Chan';
function abbrevName(name){
  let first = name[0];
  let second;
  let abbrev;
  for (let i in name) {
    if(name[i] === ' '){
      second = name[parseInt(i) + 1];
      abbrev = `${first}.${second}`;
    }
  }
  return abbrev;

}

abbrevName(name);