import './App.css';
import Todo from './components/Todo/Todo'
import Modal from './components/Todo/Model'
import Backdrop from './components/Todo/Backdrop'
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/Expenses/card';

function App() {
  const expenses=[
    {
    title: 'Tv',
    ammount: '250',
    date: '02/02/2022'
  },
  {
    title: 'Veggies',
    ammount: '150',
    date: '05/02/2022'
  },
  {
    title: 'Mobile',
    ammount: '50',
    date: '10/02/2022'
  }];

  return (
  <div>
 <Card className="expenses">
 <ExpenseItem title={expenses[0].title} ammount={expenses[0].ammount} date={expenses[0].date}/>
    <ExpenseItem title={expenses[1].title} ammount={expenses[1].ammount} date={expenses[1].date}/>
    <ExpenseItem title={expenses[2].title} ammount={expenses[2].ammount} date={expenses[2].date}/>
   
 </Card>
    </div>
  );
}

export default App;
