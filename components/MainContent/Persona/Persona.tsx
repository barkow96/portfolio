import classes from "./Persona.module.css";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";

export default function Persona() {
	return (
		<section className={classes.persona}>
			<AboutMe />
			<TechStack />
		</section>
	);
}
