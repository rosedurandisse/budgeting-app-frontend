import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);

  useEffect(() => {
    axios.get(`${URL}transactions`).then((response) => {
      setTransactions(response.data);
    });
  }, [URL]);

  const renderListedTransactions = () => {
    return transactions.map((eachTransaction, index) => {
      return (
        <li key={index} index={index} className="Transaction">
          <b>{eachTransaction.date}</b>
          <p>
            <a href={`/transactions/${index}`}>{eachTransaction.item_name}</a>
          </p>
          <p> ${eachTransaction.amount}</p>
        </li>
      );
    });
  };

  const transactionTotal = transactions.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );

  const renderTotal = () => {
    if (transactionTotal < 0) {
      return <p style={{ color: "red" }}>${transactionTotal}</p>;
    }
    if (transactionTotal > 1000) {
      return <p style={{ color: "green" }}>${transactionTotal}</p>;
    } else {
      return <p>${transactionTotal}</p>;
    }
  };
  return (
    <div>
      Total Balance Amount:
      {renderTotal()}
      <p>
        {transactionTotal < 0 ? "Don't buy anything till payday, girl!" : null}
      </p>
      <div>
        <body>{renderListedTransactions()}</body>

        {/* <ul>{listedTransaction}</ul> */}
      </div>
    </div>
  );
}

export default Transactions;
