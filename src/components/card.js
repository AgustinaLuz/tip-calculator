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
        <div>
          <label for="bill" id="bill">
            Bill
          </label>
          <br></br>
          <input
            type="text"
            id="bname"
            name="bname"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          ></input>
        </div>
        <div className="buttons-container">
          <label for="select" id="select">
            Select Tip %
          </label>
          <br></br>
          <button type="button" onClick={() => setCustomTip(5)}>
            5%
          </button>
          <button type="button" onClick={() => setCustomTip(10)}>
            10%
          </button>
          <button type="button" onClick={() => setCustomTip(15)}>
            15%
          </button>
          <button type="button" onClick={() => setCustomTip(20)}>
            25%
          </button>
          <button type="button" onClick={() => setCustomTip(50)}>
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
          <label for="numer" id="number">
            Number of People
          </label>
          <br></br>
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
        <label id="tip-amount">Tip Amount</label>
        <output className="bill-output" for="bname">
          {tipAmount}
        </output>
        <br></br>
        <label id="person">/ person</label>
        <output name="bill-output" for="bname"></output>
        <br></br>
        <label id="total">Total</label>
        <br></br>
        <label id="person">/ person</label>
        <output className="bill-output" for="bname">
          {total}
        </output>
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
