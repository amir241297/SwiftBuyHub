import './App.css';
import Navbar from './Admin_Panel/Components/Navbar';
import AllRoutes from './Admin_Panel/Components/AllRoutes';

function App() {
  return (
    <div className="App border border-black bg-purple-400 h-screen">
      <img src={'/bg_image.png'} alt="bgimage" className="background-image" />
      <div className='relative z-1000'>
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
