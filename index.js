const produceDrivingRange = (blocks) => {

    let inRange = (x,y) => {
        let net_blocks = (x,y) => {return Math.abs(parseInt(x) - parseInt(y))}

       let withinRange = (netblocks) =>  {
           if (netblocks <= blocks) {
                return `within range by ${Math.abs(blocks - netblocks)}`  
            } 
            else {
                return `${Math.abs(blocks - net_blocks(x,y))} blocks out of range`
            }
        }
        return withinRange(net_blocks(x,y));
    }

    return inRange
}


const produceTipCalculator = (tip) => {
    return fare => fare * tip;
}

const createDriver = (name) => {
    let driverId = 0
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
        

    }

}