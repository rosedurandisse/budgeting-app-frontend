import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionEdit() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((response) => {
      setTransaction({
        item_name: response.data.item_name,
        amount: response.data.amount,
        date: response.data.date,
        from: response.data.from,
        category: response.data.category,
      });
    });
  }, [URL]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/${index}`));
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
          onChange={handleTextChange}
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

export default TransactionEdit;
