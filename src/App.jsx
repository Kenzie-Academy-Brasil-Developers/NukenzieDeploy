import { useState } from "react";
import StartPage from "./pages/StartPage";
import { v4 as uuid } from "uuid";
import "./App.css";


function App() {
  const [listTransactions, setListTransactions] = useState([]);


  function addTransactions(transaction) {
    const newTransaction = { ...transaction, id: uuid() };
    setListTransactions([...listTransactions, newTransaction]);
  }

  function removeTransactions(newId) {
    const newLi = [...listTransactions];

    const newDelete = newLi.filter((transaction) => transaction.id !== newId);

    return setListTransactions(newDelete);
  }

  const totalValueTransactions = listTransactions.reduce(
    (accumulate, valueCurrent) => {
      if (valueCurrent.type == "Entrada") {
        return accumulate + valueCurrent.value;
      } else if (valueCurrent.type == "Despesa") {
        return accumulate - valueCurrent.value;
      }
    },
    0
  );

  



  return (
    <div>
      <StartPage
        listTransactions={listTransactions}
        addTransactions={addTransactions}
        removeTransactions={removeTransactions}
        totalValueTransactions={totalValueTransactions}
      />
    </div>
  );
}

export default App;
