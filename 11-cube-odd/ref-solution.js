let cubeOdd = a => {
  var isNumeric = a.every(x=>!isNaN(x))
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}