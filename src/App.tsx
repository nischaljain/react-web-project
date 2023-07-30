import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/createpost';

function App() {
  return (
    <div className="App">
      {/* everything that needs to use react-router-dom will go inside the Router tag */}
      <Router>
        {/* Navbar component uses "Link" component from react-router-dom */}
        <Navbar/>

        {/* everything that needs to be a route (a page i.e. a url) will go inside the Routes tag */}
        <Routes>
          {/* inside Routes, we only have Route components */}
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
