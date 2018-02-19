let s = 'abcdef';
function capitalize(s){
  let evenResult = [];
  let oddResult = [];
  let result = [];
  for (let i in s){
    if (parseInt(i) % 2 === 0){
      evenResult.push(s[i].toUpperCase());
    } else {
      evenResult.push(s[i]);
    }
  }

  for (let i in s) {
    if (parseInt(i) % 2 === 1){
      oddResult.push(s[i].toUpperCase());
    } else {
      oddResult.push(s[i]);
    }
  }
  result.push(evenResult.join(''), oddResult.join(''));
  return result;
}

capitalize(s);