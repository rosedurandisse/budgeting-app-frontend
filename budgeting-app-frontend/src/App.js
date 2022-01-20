import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Transactions from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
