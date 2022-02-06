import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props){ 
    const getTheFormValueInTheParent = (addedExpeseData) => {
      const assignDataFromChild = {
          ...addedExpeseData,
          id: Math.random().toString()
      }
     // console.log(assignDataFromChild)
     props.sendDataFromChild(assignDataFromChild)
    }
    return <div className='new-expense'>
        <NewExpenseForm onFormSaveDataFromChild={getTheFormValueInTheParent}/>
    </div>
}

export default NewExpense;