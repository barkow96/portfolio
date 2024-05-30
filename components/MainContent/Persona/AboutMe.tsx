import classes from "./AboutMe.module.css";

export default function AboutMe() {
	return (
		<div className={classes.aboutme}>
			<img src="./img/person.png" />
			<div className={classes.description}>
				<h3>FRONTEND DEVELOPER</h3>
				<p>
					Programming is not about rewriting the code, ready-to-use solutions. It is a creative venture that requires constant growth, diligence and
					insight. It is art of solving problems in the digital world.
				</p>
			</div>
		</div>
	);
}
