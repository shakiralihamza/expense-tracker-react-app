import React from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './incomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList/>
          <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
