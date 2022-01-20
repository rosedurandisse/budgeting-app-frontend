import axios from "axios";
import { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      setTransactions(response.data);
    });
  }, [URL]);

  const listedTransaction = transactions.map((eachTransaction, index) => {
    return (
      <li key={index} index={index} className="Transaction">
        <p>{eachTransaction.date}</p>
        <a href={`/transactions/${index}`}>
          Transaction: {eachTransaction.item_name}
        </a>
        <p> {eachTransaction.amount}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{listedTransaction}</ul>
    </div>
  );
}

export default Transactions;
