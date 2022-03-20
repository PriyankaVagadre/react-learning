import classes from './ProjectCard.module.css';

function ProjectCard(props) {
    return <div className={classes.card}>{props.children}
    </div>
}

export default ProjectCard;