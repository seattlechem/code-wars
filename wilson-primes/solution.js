// https://www.codewars.com/kata/wilson-primes/javascript

// function amIWilson(p) {
//     // check if prime is Wilson
//     if(p === 5 || p === 13 || p === 563){
//       return true;
//       } else {
//         return false;}
      
//   }


const amIWilson = p => [5, 13, 563].indexOf(p) > -1
