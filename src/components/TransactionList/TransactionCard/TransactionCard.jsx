import React from "react";
import { FaList, FaTrash } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export default function TransactionCard({ transaction, removeTransactions }) {
  if (transaction.type === "Entrada") {
    return (
      <li className="entradaCard">
        <h3>{transaction.description}</h3>
        <p>{transaction.value}</p>
        <p>{transaction.type}</p>
        <button onClick={() => removeTransactions(transaction.id)}>
          <FaTrash />
        </button>
      </li>
    );
  }
  else if(list.type === "Despesa"){
    return (
      <li className="despesaCard">
        <h3>{transaction.description}</h3>
        <p>{transaction.value}</p>
        <p>{transaction.type}</p>
        <button onClick={() => removeTransactions(transaction.id)}>
          <FaTrash />
        </button>
      </li>)

  }
}
