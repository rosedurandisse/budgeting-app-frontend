import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      {/* <h1>
    <Link to="/bookmarks">Bookmarks</Link>
    </h1> */}
      <button>
        <Link to="/transactions">All Transactions</Link>
      </button>
      <button>
        <a href="/transactions/new">Add a Transaction</a>
      </button>
    </nav>
  );
}
