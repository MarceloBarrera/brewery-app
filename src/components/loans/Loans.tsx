import BusinessLoans from "./businessLoan/BusinessLoan";
import RevolvingCreditFacility from "./revolvingCreditFacility/RevolvingCreditFacility";
import "./Loans.css";

const Loans = () => (
  <>
    <h2>Your Loan</h2>

    <div className="container-loan">
      <button>Recalculate</button>
      <div className="loan-request">
        <label htmlFor="amountRequested">Amount requested:</label>
        <input type="number" id="amountRequested" defaultValue="10"></input>
        <span>(in £)</span>

        <label htmlFor="durationRequested">Duration:</label>
        <input type="number" id="durationRequested" defaultValue="4"></input>
        <span>(in months)</span>
      </div>

      <div className="loan-calculations">
        <RevolvingCreditFacility amountRequested={10000} duration={4} />
        <BusinessLoans amountRequested={10000} duration={4} />
      </div>
    </div>
  </>
);

export default Loans;
