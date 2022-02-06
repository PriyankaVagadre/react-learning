import { useState } from 'react'
import './NewExpenseForm.css'
function NewExpenseForm() {
     const [enteredTitle, setNewTitle] = useState('') // you can create multiple states
    const [enteredAmmount, setNewAmmount] = useState('')
    const [enteredDate, setNewDate] = useState('')
//    const [userInput, setUserInput] = useState({ //u can also create single state
//         title: '',
//         ammount:'',
//         date:''
//     })

    const onTitleChange = (event) => {
       setNewTitle(event.target.value)
    //   setUserInput({
    //       ...userInput,
    //       title : event.target.value
    //   })
    }
    const onAmmountChange = (event) =>{
      setNewAmmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     ammount : event.target.value
        // })
    }
    const onDateChange = (event) =>{
        setNewDate(event.target.value)
    }

    const onSubmitForm = (event)=>{
      event.preventDefault();
      const formData ={
          title: enteredTitle,
          ammount: enteredAmmount,
          date: new Date(enteredDate)
      }
      console.log(formData)
      setNewTitle('')
      setNewAmmount('')
      setNewDate('')
    }
    return <div>
        <form onSubmit={onSubmitForm}>
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={onTitleChange} />
            </div>
            <div className="new-expense__controls">
                <label>Ammount</label>
                <input type="number" min="0.01" step="1" value={enteredAmmount} onChange={onAmmountChange} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2020-02-02" max="2022-12-20" value={enteredDate} onChange={onDateChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
}

export default NewExpenseForm;