import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Interview from "./pages/Interview";
import ResultPage from "./pages/ResultPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/interview"
        element={<Interview />}
      />

      <Route
        path="/result"
        element={<ResultPage />}
      />

    </Routes>

  );
}

export default App;