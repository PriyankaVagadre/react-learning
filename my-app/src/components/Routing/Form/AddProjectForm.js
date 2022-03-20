import classes from './AddProjectForm.module.css'
import ProjectCard from '../UI-design/ProjectCard';
import {useRef} from 'react';

function AddProjectForm(params) {
    const enteredTitle = useRef();
    const enteredImage = useRef();
    const enteredAddress = useRef();
    const enteredDescription = useRef();

    function submitForm(event) {
        event.preventDefault();

        const getEnteredTitle = enteredTitle.current.value;
        const getEnteredImage = enteredImage.current.value;
        const getEnteredAddress = enteredAddress.current.value;
        const getEnteredDescription = enteredDescription.current.value;

        const project ={
            title: getEnteredTitle,
            image: getEnteredImage,
            address: getEnteredAddress,
            description: getEnteredDescription
        }
        console.log(project);

    }

    return <ProjectCard>
        <form className={classes.form} onSubmit={submitForm}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" id="title" required ref={enteredTitle}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type="text" id="image" required ref={enteredImage}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" id="address" required ref={enteredAddress}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea type="text" id="description" required rows="4" ref={enteredDescription}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
    </ProjectCard>
}

export default AddProjectForm;