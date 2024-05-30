import classes from "./MainProject.module.css";
import { projectType } from "./Slider";

const MainProject: React.FC<{ project: projectType }> = (props) => {
	const { project } = props;
	let dynamicTransitionClassname = "";

	return (
		<div className={classes.mainProject}>
			<a className={classes.link} href={project.link} target="blank">
				<h3 className={classes.name}>{project.name}</h3>
				<div className={`${classes.video} ${dynamicTransitionClassname}`}>
					<video autoPlay muted loop src={project.video}></video>
				</div>
				<p className={classes.description}>{project.description}</p>
				<div>
					<ul className={classes.skills}>
						{project.skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>
			</a>
		</div>
	);
};
export default MainProject;
