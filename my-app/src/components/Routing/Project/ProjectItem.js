import classes from './ProjectItem.module.css'
function ProjectItem(props) {
    return <li className={classes.item} key={props.project.id}>
        <div className={classes.image}>
            <img src={props.project.image} />
        </div>
        <div className={classes.content}>
            <h1>{props.project.title}</h1>
            <p>{props.project.address}</p>
            <p>{props.project.description}</p>
        </div>
        <div className={classes.actions}>
            <button>ACTION</button>

        </div>
    </li>

}

export default ProjectItem;