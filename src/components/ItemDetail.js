import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ selectedTx }) => {
  return (
    <div className="detail-container">
      <div className="detail-title">{selectedTx.customerName}</div>
      <div className="detail-amount">{selectedTx.txAmount}</div>
      <div className="detail-description">{selectedTx.txDetails}</div>
      <div className="detail-date">{selectedTx.date.toString()}</div>
    </div>
  );
};

export default ItemDetail;
