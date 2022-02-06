import './ExpenseItem.css';
import React, {useReducer, useState} from 'react';
function ExpenseItem(props){
   const [ammount, newAmmount] = useState(props.ammount);
   const [title, changeTitle] = useState(props.title);
   const [date, changeDate] = useState(props.date)
   
    function clickHandler(){
        newAmmount(ammount+2)
        changeTitle(title+ 'Changed')
        changeDate('03/04/20')
        console.log("Clicked !!")
    }
    return <div className='expenses'>
        <div>{title}</div>
        <div>{ammount}</div>
        <div>{date}</div>
        <button onClick={clickHandler}>Click Events</button>
    </div>
}
export default ExpenseItem;