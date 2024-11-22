import MagneticTape from "./MagneticTape";

class HardDiskDrive extends MagneticTape{
    
    storageCapacity:Number = 500000;
    initialRelease:Number = 1956;

    dataDensity: Number = 500000;
    speed: Number = 100;

    about(): void {
        console.log("HDD - Higher storage capacities, random access.");
    }
    usage(): void {
        console.log("HDD - Portable external drives became common.");
    }

    values():void {
        console.log(`StorageCapacity - ${this.storageCapacity}mb,  InitialRelease - ${this.initialRelease}mb, DataDensity - ${this.dataDensity}mb, Speed - ${this.speed}mb/sec`);
    }
        
    constructor(){
        super();
        console.log("HDD - Hard Disk Drives constructor.");
    }
}

export default HardDiskDrive;