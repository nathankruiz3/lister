import React, { Component } from "react";
import { connect } from "react-redux";
import { addTx, selectTx } from "../actions";
import TxItem from "./TxItem";
import "./TxItem.css";
import FloatingButton from "./FloatingButton";
import TxForm from "./TxForm";

class TxList extends Component {
  addNewTx = (tx) => {
    console.log(tx);
    const newTx = {
      customerName: tx.customerName,
      txAmount: tx.txAmount,
      txDetails: tx.txDetails,
      isExpense: tx.isExpense,
      date: tx.date,
    };
    this.props.addTx(newTx);
  };

  renderTxList() {
    return this.props.txHistory.map((tx, index) => {
      return (
        <div
          key={index}
          className="ui item pointer"
          onClick={() => {
            if (tx === this.props.selectedTx) this.props.selectTx(tx);
            this.props.setSelectedTx(tx);
          }}
        >
          <TxItem tx={tx} />
        </div>
      );
    });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    return (
      <div style={{ width: this.props.selectedTx ? "55%" : "100%" }}>
        <FloatingButton
          onClick={() => {
            this.props.setModalOpen(true);
          }}
        />
        <TxForm
          data={{
            modalOpen: this.props.modalOpen,
            toggleModal: this.props.setModalOpen,
            onSubmit: this.addNewTx.bind(this),
          }}
        />
        <div className="ui relaxed divided list" style={{ overflow: "auto" }}>
          {this.renderTxList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    txHistory: state.txHistory,
  };
};

export default connect(mapStateToProps, {
  addTx: addTx,
  selectTx: selectTx,
})(TxList);
