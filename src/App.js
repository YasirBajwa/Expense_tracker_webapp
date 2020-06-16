import React from 'react';

import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Expenses} from './components/Expenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



class App extends React.Component {
  state = {date: new Date()}
 
  render(){
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction date={this.state.date.toLocaleDateString()} />
      </div>
    </GlobalProvider>
  );
}
}


export default App;
