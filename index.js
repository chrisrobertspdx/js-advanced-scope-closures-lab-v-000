function produceDrivingRange(range) {
    return function(block1,block2) {
        //return (range <= blocks ? true : false)
        let blocks = Math.abs( parseInt ( block1.replace(/\D/g,''), 10 ) - parseInt ( block2.replace(/\D/g,''), 10 ) );
        if (blocks <= range) {
            return `within range by ${range - blocks}`
        }
        else {
            return `${blocks - range} blocks out of range`
        }
    }
}

function produceTipCalculator(rate) {
    return function(fare) {
        return (fare * rate);
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}













