// https://www.codewars.com/kata/making-change/javascript

let change = {};
  let sum = 0;

  function calc(coinName, coinValue){
    let num = 0;
    while(sum + coinValue <= amount) {
      num += 1;
      sum += coinValue;
    }

    if(num > 0) {
      change[coinName] = num;
    }  
  
  }

  calc('H', 50);
  calc('Q', 25);
  calc('D', 10);
  calc('N', 5);
  calc('P', 1);

  return change;