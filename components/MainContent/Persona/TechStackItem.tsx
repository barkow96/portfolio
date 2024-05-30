import classes from "./TechStack.module.css";

const TechStackitem: React.FC<{ children: React.ReactNode; link: string; imgSrc: string }> = (props) => {
	const { children, link, imgSrc } = props;

	return (
		<div className={classes.skill}>
			<a href={link} target="blank">
				<img className={classes.skillIcon} src={imgSrc} />
				{children}
			</a>
		</div>
	);
};
export default TechStackitem;
