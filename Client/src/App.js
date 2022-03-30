

import { Route, Routes } from "react-router-dom";
import Title from './component/title';
import { photo } from "./component/photo";
import React from 'react'
import "./App.css";
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <Title/>
      <div className="app__content">
        <Routes>
          <Route path="/photoGallery/:id" element={<photo/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
