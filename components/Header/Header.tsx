import classes from "./Header.module.css";

export default function Header() {
	return (
		<header className={`glassmorphism ${classes.header}`}>
			<h1>www.podkowa7.pl</h1>
			<h2>by Bartosz Kowal</h2>
		</header>
	);
}
