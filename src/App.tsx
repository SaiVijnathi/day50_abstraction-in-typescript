import { clear } from 'console';
import './App.css';
import HardDiskDrive from './classes/HardDiskDrive';
import SolidStateDrive from './classes/SolidStateDrive';


function App() {
 
  return (
    <div className="App">
      <h1>Abstraction in Typescript</h1>
      <h2>Data Storage Devices</h2>

      <button onClick={()=>{
        console.clear();
        let HDD = new HardDiskDrive();
        HDD.about();
        HDD.usage();
        HDD.values();
      }}>HDDs</button>

      <button onClick={()=>{
        console.clear();
        let SSD = new SolidStateDrive;
        SSD.about();
        SSD.usage();
        SSD.values();
      }}>SSDs</button>

    </div>
  );
}

export default App;
