// https://www.codewars.com/kata/highest-scoring-word 

// Given a string of words, you need to find the highest scoring word. 

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. 

// You need to return the highest scoring word as a string. 

// If two words score the same, return the word that appears earliest in the original string. 

// All letters will be lowercase and all inputs will be valid. 

 

function high(x){ 
    var words = x.split(' ');
    let max = 0; 
    highWord = ''; 

    for(let i = 0; i < words.length; i++){ 
        let s = words[i]; 
        let val = 0;
        
        for(let j = 0; j < s.length; j++){ 
            val += (s.charCodeAt(j) - 96); 
        } 
    
        if(val > mx){ 
            max = val; 
            highWord = s; 
        }     
    } 
    return highWord; 
} 
    
    