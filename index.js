function produceDrivingRange(range) {
  return function (inicio, fin) {
    // tengo que utlizar parse porque en el test el 10 y el 20 tiene un th,
    // solo quiero los numeros para poder restarlos
    const num_Range = parseInt(range)
    const num_Start = parseInt(inicio)
    const num_Fin = parseInt(fin)
    const trip =Math.abs(num_Start - num_Fin)

    if (trip < num_Range) {
      return `within range by ${num_Range - trip}`
    } else {
      return `${trip - num_Range} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare){
      const total=tip*fare
      return total
  }
}

function createDriver() {
  let driverID=0
  return class Driver {
    constructor(name){
      this.name=name
      this.id = driverID++
    }

  }
}
