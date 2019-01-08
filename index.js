function produceDrivingRange(range){
  return function setValue(a, b){
    const numA = parseInt(a)
    const numB = parseInt(b)
    const numRange = parseInt(range)
    const distance = Math.abs(numB - numA)
    //Math.abs returns the absolute value of an expression
  if (distance < numRange){
    return `within range by ${numRange - distance}`
  } else {
    return `${distance - numRange} blocks out of range`
  }
 }
}

function produceTipCalculator(percentage) {
  return function thePercentage(amount){
    return amount * percentage
  }
}
function createDriver() {
  let id = 0
  return class {
    constructor(name) {
    this.name = name
    this.id = id++
   }
  }
}
