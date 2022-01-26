import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then(() => navigate(`/transactions`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          name="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          value={transaction.amount}
          type="number"
          onChange={handleNumberChange}
          placeholder="Amount"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          value={transaction.from}
          type="from"
          onChange={handleTextChange}
          placeholder="From"
          required
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          name="category"
          value={transaction.category}
          type="category"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransaction;
