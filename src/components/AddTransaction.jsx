import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Clock from 'react-live-clock';

export const AddTransaction = (props) => {


  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  
  return (
    <>
      <h3 className='new-transaction'>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" className='text-field' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" className='amount-field' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
      <div className='btns'>
       <button className="btn1">ADD Transaction</button>
        <p className='date'>
          {props.date}
         
          </p>

         <p className='date'> <Clock format={'HH:mm:ss'} ticking={true} /></p>
         
       </div>
      </form>
    </>
  )
}