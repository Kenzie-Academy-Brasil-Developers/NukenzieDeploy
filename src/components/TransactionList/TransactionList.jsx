import React from "react";
import TransactionCard from "./TransactionCard";
import "./TransactionList.css"

export default function TransactionList({listTransactions, removeTransactions, totalValueTransactions}) {
  
  return (
    <div className="divContainerUl">
     
      
        {listTransactions.length > 0 ? (
         
         <div className="divUl">
          
          <div className="valueTotalDiv">
            <h3>
              O valor total é: <span>R${totalValueTransactions}</span>
            </h3>
            <p>O valor total se refere ao saldo</p>

          </div>
           <ul>
            {listTransactions.map((transaction, index) => (
              
            <TransactionCard key={index} transaction={transaction} removeTransactions={removeTransactions} />
            
            ))}
          
       </ul>
       </div>  ) : (
            <div className="imgNone">
                <p>Você ainda não possui nenhum lançamento</p>
                <img src="/src/assets/NoCard.png" alt="" />
                <img src="/src/assets/NoCard.png" alt="" />
                <img src="/src/assets/NoCard.png" alt="" />

            </div>
        )}
     
    </div>
  );
}
