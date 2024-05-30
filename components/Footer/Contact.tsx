import classes from "./Footer.module.css";

const Contact: React.FC<{ children: React.ReactNode; link: string; imgSrc: string }> = (props) => {
	const { children, link, imgSrc } = props;

	return (
		<div className={classes.contact}>
			<a href={link} target="blank">
				<img className={classes.contactIcon} src={imgSrc} />
				<div>{children}</div>
			</a>
		</div>
	);
};
export default Contact;
