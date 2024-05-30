import classes from "./TechStack.module.css";
import TechStackitem from "./TechStackItem";

export default function TechStack() {
	return (
		<div className={classes.techstack}>
			<TechStackitem link="https://en.wikipedia.org/wiki/HTML" imgSrc="./img/HTML.png">
				<p>HTML</p>
				<p>CSS / SCSS</p>
			</TechStackitem>

			<TechStackitem link="https://en.wikipedia.org/wiki/CSS" imgSrc="./img/CSS.png">
				<p>Bootstrap</p>
				<p>Material UI</p>
				<p>Chakra UI</p>
			</TechStackitem>

			<TechStackitem link="https://en.wikipedia.org/wiki/JavaScript" imgSrc="./img/JS.jpg">
				<p>JavaScript</p>
				<p>TypeScript</p>
			</TechStackitem>

			<TechStackitem link="https://en.wikipedia.org/wiki/React_(JavaScript_library)" imgSrc="./img/React.png">
				<p>React</p>
				<p>NextJS</p>
			</TechStackitem>

			<TechStackitem link="https://pl.wikipedia.org/wiki/MongoDB" imgSrc="./img/DB.png">
				<p>MongoDB</p>
				<p>PostgreSQL</p>
			</TechStackitem>

			<TechStackitem link="https://strapi.io/" imgSrc="./img/Strapi.jpg">
				<p>Strapi</p>
			</TechStackitem>
		</div>
	);
}
