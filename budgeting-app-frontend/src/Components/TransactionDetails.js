import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams(); //this is actively changing so that is why let is used

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
        console.log(response.data);
      })
      .catch(() => {
        navigate("/transactions");
      });
  }, [URL]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => navigate("/transactions"));
  };

  return (
    <div>
      <div>
        <h4>{transaction.date}</h4>
        <h5>{transaction.item_name}</h5>
        <p>{transaction.amount}</p>
        <p>{transaction.category}</p>
      </div>

      <div>
        <Link to={"/transactions"}>
          <button>Back</button>
        </Link>

        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TransactionDetails;
