// https://www.codewars.com/kata/highest-scoring-word 

// Given a string of words, you need to find the highest scoring word. 

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. 

// You need to return the highest scoring word as a string. 

// If two words score the same, return the word that appears earliest in the original string. 

// All letters will be lowercase and all inputs will be valid. 
let x = 'man i need a taxi up to ubud';
function high(x){
    //split at space
    let y = x.split(' ')
    let sum = 0;
    let arr = [];
    
    for (let i of y) {
        for (let z in i){
            console.log(parseInt(i, 8))
            sum += i.charCodeAt(z);
            
        }
        arr.push(sum);
        
    }
    let max = Math.max.apply(null, arr);
    //return index number for that max number from array;
    
    
    return y[arr.indexOf(max)];
}

high(x);