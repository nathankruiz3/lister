import React from "react";
import "./TxItem.css";

const TxItem = ({ tx }) => {
  return (
    <div className={tx.isExpense ? "expense" : "purchase"}>
      <p className="content item-title">{tx.customerName}</p>
      <p className="item-price">{tx.txAmount}</p>
      <p className="item-description">{tx.txDetails}</p>
    </div>
  );
};

export default TxItem;
