import './ExpenseItem.css';
function ExpenseItem(props){
    return <div className='expenses'>
        <div>{props.title}</div>
        <div>{props.ammount}</div>
        <div>{props.date}</div>
    </div>
}
export default ExpenseItem;