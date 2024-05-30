import classes from "./Footer.module.css";
import Contact from "./Contact";

export default function Footer() {
	return (
		<footer className={`glassmorphism ${classes.footer}`}>
			<Contact link="https://linkedin.com/in/barkow96" imgSrc="./img/LinkedIN.png">
				barkow96
			</Contact>
			<Contact link="https://gmail.com" imgSrc="./img/gmail.png">
				bartoszkowal96
			</Contact>
			<Contact link="https://github.com/barkow96" imgSrc="./img/Github.png">
				barkow96
			</Contact>
		</footer>
	);
}
