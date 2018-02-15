'use strict';
const num = 454793;
function insertDash(num) {
  let numStr = num.toString();
  let str = numStr[0];
  for(var i=1; i<numStr.length; i++) {
    if(parseInt(numStr[i])%2!==0 && parseInt(numStr[i-1])%2!==0) {
      str = str + '-' + numStr[i];
    }
    else {
      str = str + numStr[i];
    }
  }
  return str;
}

insertDash(num);