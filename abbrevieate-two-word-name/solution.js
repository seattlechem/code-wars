let name = 'Peter Chan';
function abbrevName(name){
  let first = name[0].toUpperCase();
  let second;
  let abbrev;
  for (let i in name) {
    if(name[i] === ' '){
      second = name[parseInt(i) + 1].toUpperCase();
      abbrev = `${first}.${second}`;
    }
  }
  return abbrev;

}

abbrevName(name);