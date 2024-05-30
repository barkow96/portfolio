import classes from "./MainContent.module.css";
import Persona from "../Persona/Persona";
import Slider from "../Slider/Slider";

export default function MainContent() {
	return (
		<main className={classes.container}>
			<Persona />
			<Slider />
		</main>
	);
}
