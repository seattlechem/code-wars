// https://www.codewars.com/kata/scrolling-text/train/javascript
// scrolling-text
let text = 'abc';
function scrollingText(text){
  //return array
  //iterate and split and join
  //shift takes the first one
  //push to the last
  let result = [];
  result.push(text.toUpperCase());
  let textArray = text.split('');
  for (let i = 0; i < textArray.length - 1; i++) {
    let pulledOutChar = textArray.shift();
    textArray.push(pulledOutChar);
    result.push(textArray.join('').toUpperCase());

  }
  return result;
}

// using string.prototype.slice() & concatenation

function scrollingText(text){
  let result = [];

  for( var i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase());
  }

  return result;
}

