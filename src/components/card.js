import React, { useEffect, useState } from "react";
import "./App.css";

const Card = () => {
  const [bill, setBill] = useState(null);
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(null);
  const [people, setPeople] = useState(1);
  const [customTip, setCustomTip] = useState(null);

  function calculateTotal() {
    let totalPerPerson = bill / people;
    setTotal(totalPerPerson);
  }

  function calculateTip() {
    let tip = (bill * customTip) / 100;
    let tipPerPerson = tip / people;
    setTipAmount(tipPerPerson);
  }

  function reset() {
    setBill(0);
    setTotal(0);
    setTipAmount(0);
    setPeople(1);
    setCustomTip(null);
  }
  useEffect(() => {
    calculateTotal();
    calculateTip();
    // eslint-disable-next-line
  }, [bill, total, people, customTip]);

  return (
    <div className="container1">
      <div>
        <div className="bill-box">
          <label for="bill" id="bill">
            Bill
          </label>
          <input
            type="text"
            id="bname"
            name="bname"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          ></input>
        </div>
        <div className="buttons-container">
          <div className="select-btn-box">
            <label for="select" id="select">
              Select Tip %
            </label>
          </div>
          <button
            className="tip-btn"
            type="button"
            onClick={() => setCustomTip(5)}
          >
            5%
          </button>
          <button
            className="tip-btn"
            type="button"
            onClick={() => setCustomTip(10)}
          >
            10%
          </button>
          <button
            className="tip-btn"
            type="button"
            onClick={() => setCustomTip(15)}
          >
            15%
          </button>
          <button
            className="tip-btn"
            type="button"
            onClick={() => setCustomTip(20)}
          >
            25%
          </button>
          <button
            className="tip-btn"
            type="button"
            onClick={() => setCustomTip(50)}
          >
            50%
          </button>
          <input
            type="text"
            id="sname"
            name="sname"
            placeholder="Custom"
            onChange={(e) => setCustomTip(e.target.value)}
          ></input>
        </div>
        <div>
          <div className="people-box">
            <label for="numer" id="number">
              Number of People
            </label>
          </div>
          <input
            type="text"
            id="nname"
            name="nname"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="container2">
        <div className="tip-amount">
          <div className="tip-amount-box">
            <label id="tip-amount">Tip Amount</label>
            <label id="person">/ person</label>
          </div>
          <output className="bill-output" for="bname">
            ${tipAmount}
          </output>
        </div>
        <div className="total-amount">
          <div className="total-amount-box">
            <label id="total">Total</label>
            <label id="person">/ person</label>
          </div>
          <output className="bill-output" for="bname">
            ${total}
          </output>
        </div>
        <div className="btn-reset">
          <button type="button" id="reset" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
