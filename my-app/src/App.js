import './App.css';
import Todo from './components/Todo/Todo'
import Modal from './components/Todo/Model'
import NewExpense from './components/Expenses/NewExpense/NewExpense'
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/Expenses/card';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/Routing/Home';
import AboutMePage from './components/Routing/AboutMe';
import ContactPage from './components/Routing/Contact';
import MainNavigation from './components/Routing/Layout/MainNavigation';
import ContextHook from './components/Routing/Layout/Context-hook/ContextHook';

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

  const getDataInParent = (childData) =>{
    console.log('Child Data to parent\n' )
    console.log(childData)
  }
  
  var sendDataThroughCommonParent ;
  return (
  <div>
    {/* <NewExpense sendDataFromChild={getDataInParent}/>
    <Card className="expenses">
    <ExpensesFilter sendFilterDataToSibling={sendDataThroughCommonParent}/>
    <ExpenseItem title={expenses[0].title} ammount={expenses[0].ammount} date={expenses[0].date} getSiblingDataFromParent ={sendDataThroughCommonParent}/>
        <ExpenseItem title={expenses[1].title} ammount={expenses[1].ammount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} ammount={expenses[2].ammount} date={expenses[2].date}/>
    </Card> */}

<MainNavigation/>
<hr/>
    <Switch>
      <Route path="/" exact="true"><HomePage/></Route>
      <Route path="/aboutme"><AboutMePage/></Route>
      <Route path="/contact"><ContactPage/></Route>
      <Route path="/context-hook"><ContextHook/></Route>
    </Switch>



    </div>
  );
}

export default App;
