import MagneticTape from "./MagneticTape";

class SolidStateDrive extends MagneticTape{
    
    storageCapacity:Number = 1000000;
    initialRelease:Number = 2007;

    dataDensity: Number = 1000000;
    speed: Number = 3500;
    
    about(): void {
        console.log("SSD - Faster read/write speeds, compact and durable.");
    }
    usage(): void {
        console.log("SSD - Cloud storage complements physical drives.");
    }

    values():void {
        console.log(`StorageCapacity - ${this.storageCapacity}mb,  InitialRelease - ${this.initialRelease}mb, DataDensity - ${this.dataDensity}mb, Speed - ${this.speed}mb/sec`);
    }

    constructor(){
        super();
        console.log("SSD - Solid State Drives constructor.");
    }
}

export default SolidStateDrive;