import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Transactions from "./Pages/Index";
import TransactionDetails from "./Components/TransactionDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/transactions" element={<Transactions />}>
            {" "}
          </Route>
          <Route path="/transactions/:index" element={<TransactionDetails />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
