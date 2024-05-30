import classes from "./Projects.module.css";
import { actionType, projectType } from "./Slider";

const Projects: React.FC<{ projects: projectType[]; currentProjectId: number; onProjectChange: (action: actionType) => void }> = (props) => {
	const { projects, currentProjectId, onProjectChange } = props;
	const lastProjectId = projects.length - 1;
	const leftProjectId = currentProjectId > 0 ? currentProjectId - 1 : lastProjectId;
	const rightProjectId = currentProjectId != lastProjectId ? currentProjectId + 1 : 0;

	return (
		<div className={classes.projects}>
			<div className={classes.project} onClick={onProjectChange.bind(null, "DECREMENT")}>
				<img src={projects[leftProjectId].image} alt={projects[leftProjectId].description} />
			</div>
			<div className={classes.project}>
				<img src={projects[currentProjectId].image} alt={projects[currentProjectId].description} />
			</div>
			<div className={classes.project} onClick={onProjectChange.bind(null, "INCREMENT")}>
				<img src={projects[rightProjectId].image} alt={projects[rightProjectId].description} />
			</div>
		</div>
	);
};

export default Projects;
