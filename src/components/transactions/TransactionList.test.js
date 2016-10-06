import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import TransactionList from './TransactionList';
import {TableHeaderColumn} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function setup() {
  return mount(
    <MuiThemeProvider>
      <TransactionList transactions={[]}/>
    </MuiThemeProvider>, {
      getChildContext() {
        return {muiTheme: getMuiTheme()};
      },
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
}

describe("<TransactionList />", ()=> {
  const muiTheme = getMuiTheme();
  const mountWithContext = (node) => mount(node, {context: {muiTheme}});


  it('renders four <TableHeaderColumn /> components', () => {
    const wrapper = mountWithContext(<TransactionList transactions={[]}/>);
    expect(wrapper.find(TableHeaderColumn)).to.have.length(4);
  });

/*
  it('renders four <TableHeaderColumn /> components', () => {
    const wrapper = mount(<TransactionList transactions={[]}/>);
    expect(wrapper.find(TableHeaderColumn)).to.have.length(4);
  });

*/

});
