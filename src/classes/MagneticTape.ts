abstract class MagneticTape{

    storageCapacity:Number = 5;
    initialRelease:Number = 1951;

    abstract dataDensity:Number;
    abstract speed:Number;

    abstract about():void;
    abstract usage():void;

    constructor(){
        console.log("Magnetic Tape constructor.");
    }
}

export default MagneticTape;