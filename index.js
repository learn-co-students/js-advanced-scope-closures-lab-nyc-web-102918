function produceDrivingRange(blockRange) {
  return function (start, end) {
    let startBlock = parseInt(start)
    let endBlock = parseInt(end)
    let distance = Math.abs(endBlock - startBlock);
    let acceptableRange = blockRange - distance;

    if (acceptableRange > 0) {
      return `within range by ${acceptableRange}`;
    }
    else {
      return `${Math.abs(acceptableRange)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentTip) {
  return function (bill) {
    return bill * percentTip;
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name, id) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
