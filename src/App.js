import React from "react";
import CardViewer from "./CardViewer";
import HomePage from "./HomePage";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/viewer/:deckId" element={<CardViewer />} />
        <Route exact path="/" element={<HomePage />} />
        <Route element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
