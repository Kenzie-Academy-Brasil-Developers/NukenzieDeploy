import React from "react";
import TransactionList from "../../components/TransactionList";
import { useState } from "react";
import "./StartPage.css"
import TransactionCreateForm from "../../components/TransactionCreateForm";
import InitialPage from "../../components/Initial";
import nuKenzieBlack from "/src/assets/NukenzieLogoBlack.png"

export default function StartPage({ listTransactions, addTransactions, removeTransactions,totalValueTransactions,}) {
  const [startPageIn, setStartPageIn] = useState(false);

  function Start() {
    if (startPageIn == false) {
      return setStartPageIn(true);
    } 
  }

  function StartOff(){
    if (startPageIn == true){
      return setStartPageIn(false)
    }
  }

 
  if (startPageIn == true){
    return (
      
      <div className="financialSummary">
        <nav>
        <img className="imgLogo" src={nuKenzieBlack} alt="" />
        <button onClick={StartOff}>Inicio</button>

        </nav>
        <TransactionCreateForm addTransactions={addTransactions}/>
        <TransactionList listTransactions={listTransactions} removeTransactions={removeTransactions} totalValueTransactions={totalValueTransactions}/>
      </div>
    );

  } else {
    return(
      <div>
        <InitialPage/>
           <button className="btnInitial" onClick={Start}>
              Iniciar
            </button>
       
      </div>

    )
  }

}
