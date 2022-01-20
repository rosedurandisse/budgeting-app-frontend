import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Transactions from "./Pages/Index";
import TransactionDetails from "./Pages/Show";
import TransactionEdit from "./Pages/Edit";

//import the NacNar
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
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
            <Route
              path="/transactions/:index/edit"
              element={<TransactionEdit />}
            ></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
