import logo from './logo.svg';
import './App.css';
import { Home } from './Admin_Panel/Home'
import { Login } from './Admin_Panel/Login';
import Navbar from './Admin_Panel/Components/Navbar';
import AllRoutes from './Admin_Panel/Components/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
