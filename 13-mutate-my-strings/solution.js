'use strict';

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
    let result = [];
    for (let i in stringTwo) {
        stringOne[parseInt(i)] = stringTwo[parseInt(i)];
        result.push(stringOne);
    }

}

mutateMyStrings(stringOne, stringTwo);