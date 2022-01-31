function Todo(props){
    function deleteFun(){
        console.log('Clicked')
        console.log(props.title)
    }
    
    return <div className='card'>
    <h2>Title: {props.title}</h2>
    <button className='btn' onClick={deleteFun}>Delete</button>
    </div>
}
export default Todo;