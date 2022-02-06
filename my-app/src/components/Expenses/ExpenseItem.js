import './ExpenseItem.css';
function ExpenseItem(props){
    function clickHandler(){
        console.log("Clicked !!")
    }
    return <div className='expenses'>
        <div>{props.title}</div>
        <div>{props.ammount}</div>
        <div>{props.date}</div>
        <button onClick={clickHandler}>Click Events</button>
    </div>
}
export default ExpenseItem;