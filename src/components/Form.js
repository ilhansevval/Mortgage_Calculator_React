import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import Inputs from "./Inputs";

function Form() {
 
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);


  function calculateMonthlyPayment() {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    function yearsToMonths(year) {
      return year * 12;
    }

    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );

    return monthlyPayment;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Inputs
        text="Loan amount"
        icon={<FaDollarSign />}
        placeholder={"Enter the loan amount"}
        min="1"
        required
        value={loanAmount}
        onInput={(e) => setLoanAmount(e.target.value)}
      />
      <Inputs
        text="Interest Rate (%)"
        placeholder={"Enter the interest rate"}
        min="1"
        required
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
      />
      <Inputs
        text="Loan Duration (yrs)"
        placeholder={"Enter the loan in years"}
        min="1"
        required
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
      />

      <button
        type="submit"
        onClick={calculateMonthlyPayment}
        className="btn btn-success btn-lg w-100 center mb-3">
        Calculate
      </button>

      <h4 className="alert alert-success fw-bold">
        Monthly payment: <FaDollarSign />
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

    </form>
  );
}

export default Form;