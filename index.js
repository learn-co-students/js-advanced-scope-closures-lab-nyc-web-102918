function produceDrivingRange(range){
  return function drivingRange(start,end){
    const distance= Math.abs(start.slice(0,-2)-end.slice(0,-2));
    console.log(distance, range)
    if(distance < range){return `within range by ${range - distance}`;}
    else{return `${distance - range} blocks out of range`;}
  }
}

function produceTipCalculator(percent){
  return function(price){return percent * price;}
}

function createDriver()
{ let driverId=0;
  return class{
    constructor(name, revenue){
      this.name= name;
      this.revenue= revenue;
      this.id=driverId++;
    }
  }
}
