import { useState } from "react";
import BusinessLoans from "./businessLoan/BusinessLoan";
import RevolvingCreditFacility from "./revolvingCreditFacility/RevolvingCreditFacility";
import "./Loans.css";

const Loans = () => {
  const [amount, setAmount] = useState<number>(10000);
  const [duration, setDuration] = useState<number>(4);

  const handleChange = (event: any) => {
    setAmount(parseInt(event.target.value));
  };

  const handleDuration = (event: any) => {
    setDuration(parseInt(event.target.value));
  };

  return (
    <>
      <h2>Your Loan</h2>

      <div className="container-loan">
        <div className="loan-request">
          <label htmlFor="amountRequested">Amount requested:</label>
          <input
            type="number"
            id="amountRequested"
            value={amount}
            onChange={handleChange}
          ></input>
          <span>(in £)</span>

          <label htmlFor="durationRequested">Duration:</label>
          <input
            type="number"
            id="durationRequested"
            value={duration}
            onChange={handleDuration}
          ></input>
          <span>(in months)</span>
        </div>

        <div className="loan-calculations">
          <RevolvingCreditFacility
            amountRequested={amount}
            duration={duration}
          />
          <BusinessLoans amountRequested={10000} duration={4} />
        </div>
      </div>
    </>
  );
};
export default Loans;
