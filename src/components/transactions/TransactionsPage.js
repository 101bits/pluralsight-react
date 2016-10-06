import React, {PropTypes} from "react";
import {connect} from "react-redux";
import TransactionList from "./TransactionList";
import {loadTransactions} from "../../actions/transactionActions";

class TransactionsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.dispatch(loadTransactions());
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>
        <TransactionList transactions={this.props.transactions}/>
      </div>
    );
  }
}

TransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToProps)(TransactionsPage);
