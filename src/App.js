
import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
//import RedstringUI from './Component/RedstringUI';

function App() {
  return (
    <>
     <div className=' flex flex-row justify-center items-center gap-3'>
     <Navbar/>
     <Hero/>
     </div>
     
    </>
  );
}

export default App;
