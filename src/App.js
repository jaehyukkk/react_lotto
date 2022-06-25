import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from "./page/Main";
import Statistics from "./page/Statistics";
import RandomBno from "./page/RandomBno";

function App() {

  return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Main />}  />
                <Route path="/statistics"  element={<Statistics />}  />
                <Route path="/random" element={<RandomBno />} />
            </Routes>
    </div>
  );
}

export default App;
