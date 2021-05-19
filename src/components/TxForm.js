import React, { useState } from "react";
import "./TxForm.css";

const TxForm = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [txAmount, setTxAmount] = useState("");
  const [txDetails, setTxDetails] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  return (
    <div className={`modal ${props.data.modalOpen ? "" : "invisible"}`}>
      <form className="ui form">
        <h3 className="ui dividing header">Enter Transaction Details</h3>
        <div className="field">
          <label>Customer Name</label>
          <div className="field">
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Transaction Amount</label>
          <div className="field">
            <input
              type="text"
              value={txAmount}
              onChange={(e) => setTxAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Transaction Details</label>
          <div className="field">
            <textarea
              rows="3"
              value={txDetails}
              onChange={(e) => setTxDetails(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              checked={isExpense}
              onChange={() => {
                setIsExpense(!isExpense);
              }}
            />
            <label>Expense</label>
          </div>
        </div>
        <div
          className="ui button blue"
          onClick={() => {
            const d = new Date().getTime();
            const t = new Date(d);
            console.log(t);
            const newTx = {
              customerName: customerName,
              txAmount: isExpense ? "-$" + txAmount : "+$" + txAmount,
              txDetails: txDetails,
              isExpense: isExpense,
              date: t,
            };
            if (isNaN(txAmount)) {
              alert("Tx amount must be a number value");
              return;
            } else {
              props.data.onSubmit(newTx);
              setCustomerName("");
              setIsExpense(false);
              setTxAmount("");
              setTxDetails("");
              props.data.toggleModal();
            }
          }}
        >
          Add Transaction
        </div>
      </form>
    </div>
  );
};

export default TxForm;
