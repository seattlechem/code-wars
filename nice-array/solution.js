function isNice(arr){
  let counter = 0;
  console.log(arr);
  if (arr.length === 0) {
    return false;
  }
  for (let i of arr) {
    console.log(i);
    if (arr.includes(i - 1) || arr.includes(i + 1)) {
      counter++;
    } else {
      return false;
    }

  }
  if (counter === arr.length) {
    return true;
  }

}