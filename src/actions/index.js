export const selectTx = (tx) => {
  return {
    type: "SELECT_TX",
    payload: tx,
  };
};

export const addTx = (tx) => {
  return {
    type: "ADD_TX",
    payload: tx,
  };
};
