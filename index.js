function produceDrivingRange(range) {
  return function (start, end) {
    const intRange = parseInt(range)
    const intStart = parseInt(start)
    const intEnd = parseInt(end)
    const trip = Math.abs(intStart - intEnd)

    if (trip < intRange) {
      return `within range by ${intRange - trip}`
    } else {
      return `${trip - intRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    const tipAmount = fare * tip
    return tipAmount
  }
}

function createDriver() {
  let driverID = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = driverID++
    }
  }
}
