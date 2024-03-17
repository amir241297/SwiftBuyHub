import { Navbar as AdminNavbar } from './Admin_Panel/Components/Navbar';
import { AllRoutes as AdminAllRoutes } from './Admin_Panel/Components/AllRoutes';
import './App.css';
import { Navbar as UserNavbar } from "./User_Panel/Component/Navbar"
import { AllRoutes as UserAllRoutes } from "./User_Panel/Component/AllRoutes"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const [text_color, setText_color] = useState("white")
  const [bg_color, setBg_color] = useState("blue-gray-900")
  const adminLogin = useSelector((store) => { return store.adminReducer.isLogin })
  const theme = useSelector((store) => { return store.userReducer.mode })


  useEffect(() => {
    if (theme === "light") {
      setText_color("black")
      setBg_color("white")
    } else {
      setText_color("white")
      setBg_color("black")
    }
    console.log(`text-${text_color} bg-${bg_color} h-screen`)
  },[theme])
  
  if (adminLogin) {
    return (
      <div className="App border border-black bg-purple-400 h-screen">
        <div className="background-image-container fixed inset-0 z-0">
          <img src={'/bg_image.png'} alt="bgimage" className="w-full h-full object-cover" />
        </div>
        <div className='relative z-1000'>
          <AdminAllRoutes />
          <AdminNavbar />
        </div>
      </div>
    );
  } else {
    return (
      <div className=
      {`text-${text_color} bg-${bg_color} h-screen`}
      >
        <UserNavbar />
        <UserAllRoutes />
        <AdminAllRoutes />
      </div>
    )
  }

}

export default App;
