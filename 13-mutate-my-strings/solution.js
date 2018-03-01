'use strict';

// Source https://www.codewars.com/kata/mutate-my-strings/train/javascript

// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

let stringOne = 'bubble gum', stringTwo ='turtle ham';
function mutateMyStrings(stringOne, stringTwo){
    let arrOne = stringOne.split('');
    let arrTwo = stringTwo.split('');
    let answers = [arrOne.join('')];
    for (i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        arrOne[i] = arrTwo[i];
        answers.push(arrOne.join(''));
      }
    }
    return answers.join('\n') + '\n';
}

mutateMyStrings(stringOne, stringTwo);