import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const TransactionListRow = ({transaction}) => {
  return (
    <TableRow>
      <TableRowColumn>{transaction.name}</TableRowColumn>
      <TableRowColumn>{transaction.amount}</TableRowColumn>
      <TableRowColumn>{transaction.transactionDate}</TableRowColumn>
      <TableRowColumn>{transaction.category.name}</TableRowColumn>
    </TableRow>
  );
};

TransactionListRow.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionListRow;
