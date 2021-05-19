import { combineReducers } from "redux";

const txHistory = (txList = [], action) => {
  if (action.type === "ADD_TX") {
    return [...txList, action.payload];
  } else {
    return txList;
  }
};

const selectedTx = (selectedTx = null, action) => {
  if (action.type === "SELECT_TX") {
    return action.payload;
  } else {
    return selectedTx;
  }
};

export default combineReducers({
  txHistory: txHistory,
  selectedTx: selectedTx,
});
