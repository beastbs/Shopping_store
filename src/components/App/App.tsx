import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import { HomePage } from "../pages";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
