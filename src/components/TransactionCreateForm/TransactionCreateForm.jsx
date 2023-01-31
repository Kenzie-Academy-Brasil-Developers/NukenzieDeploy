import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TransactionCreateForm({ addTransactions }) {
  const [formData, setFormData] = useState({
    
    description: "",
    value: 0,
    type: "Entrada",
  });

  function submit(event) {
    event.preventDefault();
    if (formData.description !== "" && formData.type !== "") {
      addTransactions(formData);
    } else {
      alert("Preencha os dados");
    }

    setFormData({
      description: "",
      value: 0,
      type: "Entrada",
    });
  }

 

  return (
    <form onSubmit={submit} className="formBills">
      <fieldset className="descriptionMoney">
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <p>Ex: compra de roupas</p>
      </fieldset>

      <fieldset className="valueInputs">
        <div className="valueMoney">
          <label htmlFor="priceValue">Valor</label>
          <span>
            <input
              id="priceValue"
              type="text"
              placeholder="1"
              value={formData.value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  value: parseFloat(event.target.value),
                })
              }
            />
            <span> R$</span>
          </span>
        </div>
        <div className="typeMoney">
          <label htmlFor="typeValue">Tipo de valor</label>
          <select
            id="typeValue"
            value={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </fieldset>

      <button className="btnPink" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
