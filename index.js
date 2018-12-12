function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    const difference = Math.max(parseInt(block1), parseInt(block2)) - Math.min(parseInt(block1), parseInt(block2))
    if (difference > blockRange) {
      return `${difference - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - difference}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return percentage * fare
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
