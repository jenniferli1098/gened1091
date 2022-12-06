import React from "react";
import CardViewer from "./CardViewer";
import HomePage from "./HomePage";

import { HashRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

export function App() {
  return (
    <HashRouter base="/">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/viewer/:deckId" element={<CardViewer />} />
      </Routes>
    </HashRouter>
  );
}

// function App() {
//   return (
//     <Routes>
//       <Route exact path="/">
//         <HomePage />
//       </Route>
//       <Route exact path="/viewer/:deckId">
//         <CardViewer />
//       </Route>
//       <Route>
//         <div>Page not found!</div>
//       </Route>
//     </Routes>
//   );
// }

export default App;
