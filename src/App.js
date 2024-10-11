import React from 'react';
import Home from "./pages/home/Home";
import Single from './pages/single/Single';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/login/LogIn';
import NewPage from './pages/newPage/NewPage';
import List from './pages/list/List';
//import SideBar from './components/sidebar/SideBar';
import NavBar from './components/navbar/NavBar';

// import { userInputs } from './formSource';
import './style/dark.css';
import { useContext } from 'react';
import { DarkModeContext } from './components/context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<LogIn />} />
            <Route path='/single' element={<Single />} />
            <Route path='/new' element={<NewPage />} />
            <Route path='/list' element={<List />} />
            <Route path='/navbar' element={<NavBar />} />
            {/* <Route path='users' >
            <Route index element={<List />} />
            <Route path=':single' element={<Single />} />
            <Route path='newPage' element={<NewPage />} />
          </Route> */}


          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
