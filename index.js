function produceDrivingRange(range){
  return function setValue(start, end){
    const numStart = parseInt(start)
    const numEnd = parseInt(end)
    const numRange = parseInt(range)
    const distance = Math.abs(numEnd - numStart)
  if (distance < numRange){
    return `within range by ${numRange - distance}`
  } else {
    return `${distance - numRange} blocks out of range`
  }
 }
}

function produceTipCalculator(percentage) {
  return function toPercent(amount){
    return amount * percentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
    this.name = name
    this.id = driverId++
   }
  }
}
