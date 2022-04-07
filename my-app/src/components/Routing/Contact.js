import AddProjectForm from './Form/AddProjectForm';
import {useHistory} from 'react-router-dom';

function ContactPage(){
//s    const history = useHistory();

    function sendDataToserver(project) {
        fetch('https://react-project-444af-default-rtdb.firebaseio.com/project.json',
        {
            method:'POST',
            body: JSON.stringify(project),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(()=>{
            // history.replace('/')
        })
    }
    return<div>Contact Page
        <AddProjectForm sendData={sendDataToserver}/>
    </div>
    }
export default ContactPage;