import ProjectItem from './ProjectItem';
import classes from './ProjectList.module.css'
function ProjectList(props) {
    debugger
    return<div>
      <ul className={classes.list}>
      {props.projects.map(item=> <ProjectItem key={item.id} project={item}/>)}
          
      </ul>
    </div>
}

export default ProjectList;