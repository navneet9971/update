import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Add from "./pages/Add";
import Check from "./pages/Check";
import Download from "./pages/Download";
import Myaccount from "./pages/Myaccount";
import Review  from "./pages/Review";
import Start from "./pages/Start";
import View from "./pages/View";





const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="/review" element={<Review />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/check" element={<Check />} />
          <Route path="/add" element={<Add />} />
          <Route path="/download" element={<Download />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

  );
};



export default App;