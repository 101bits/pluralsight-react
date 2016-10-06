import React, {PropTypes} from 'react';
import TransactionListRow from './TransactionListRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

const TransactionList = ({transactions}) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Transaction</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(transaction =>
          <TransactionListRow key={transaction.id} transaction={transaction}/>
        )}
      </TableBody>
    </Table>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionList;
