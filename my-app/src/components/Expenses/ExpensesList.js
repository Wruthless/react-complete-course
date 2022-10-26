import React from 'react';

// Using the ExpenseItem component in the list.
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return <ul className='expenses-list'>
        {props.items.map((expense) => (
          <ExpenseItem                      // Expense item component.
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
          />
      ))};
    </ul>
};

export default ExpensesList;