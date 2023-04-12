import { IProjectItem } from '../types/types';

function ProjectItem({data}: IProjectItem) {
  return ( 
    <div className="proj-item_container">
    <div className="proj-text">
      <p>{data.Name}</p>
    </div>
    <div className="proj-text">
      <p>
        GitHub: <a href={data.GitHub}>{data.GitHub}</a>
      </p>
    </div>
    <div className="proj-text">
      <p>
        Deploy: <a href={data.Deploy}>{data.Deploy}</a>
      </p>
    </div>
    <div className="proj-text">
      <p>Description: </p>
      <span>{data.Description}</span>
    </div>
    <div className="proj-text">
      <p>Technologies:</p>
      <span>{data.Technologies?.join(", ")}</span>
    </div>
  </div>
   );
}

export default ProjectItem;