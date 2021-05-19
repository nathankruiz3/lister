import React, { useState } from "react";
import TxList from "./TxList";
import ItemDetail from "./ItemDetail";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "rgb(136, 167, 194)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0px",
        left: "0px",
        overflowY: "auto",
      }}
    >
      <div
        style={{ fontSize: "45px", margin: "20px 0px", textAlign: "center" }}
      >
        TX Lister
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          opacity: ".2",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "2",
          visibility: `${modalOpen ? "" : "hidden"}`,
        }}
        onClick={() => {
          setModalOpen(false);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
        }}
      >
        <TxList
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setSelectedTx={setSelectedTx}
          selectedTx={selectedTx}
        />
        {selectedTx ? <ItemDetail selectedTx={selectedTx} /> : null}
      </div>
    </div>
  );
};

export default App;
