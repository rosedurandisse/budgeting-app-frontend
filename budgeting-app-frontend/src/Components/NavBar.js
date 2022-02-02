import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar(props) {
  return (
    <nav>
      <button>
        <Link to="/transactions">All Transactions</Link>
      </button>
      <button>
        <a href="/transactions/new">Add a Transaction</a>
      </button>
    </nav>
  );
}
