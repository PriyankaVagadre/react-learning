import './NewExpenseForm.css'
function NewExpenseForm(){
    const onValueChange = (event) =>{
console.log(event.target.value)
    }
    return <div>
<form>
    <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" onChange={onValueChange}/>
    </div>
    <div className="new-expense__controls">
        <label>Ammount</label>
        <input type="number" min="0.01" step="1"/>
    </div>
    <div className="new-expense__controls">
        <label>Date</label>
        <input type="date" min="02/02/1020" max="02/12/2022"/>
    </div>
    <button type='submit'>Submit</button>
</form>
    </div>
}

export default NewExpenseForm;