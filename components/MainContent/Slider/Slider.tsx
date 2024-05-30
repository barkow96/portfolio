import classes from "./Slider.module.css";
import MainProject from "./MainProject";
import Projects from "./Projects";
import { useState } from "react";

export type projectType = {
	id: number;
	name: string;
	description: string;
	skills: string[];
	image: string;
	video: string;
	link: string;
};

export type actionType = "INCREMENT" | "DECREMENT";

const projects: projectType[] = [
	{
		id: 0,
		name: "Chess Game",
		description: "My implementation of chess game. Play the game of kings with your friend.",
		skills: ["HTML", "CSS", "JavaScript"],
		image: "./img/PR_00_img.png",
		video: "./img/PR_00_vid.mp4",
		link: "https://barkow96.github.io/chess-game/",
	},

	{
		id: 1,
		name: "Cryptocurrencies Tracker",
		description: "Responsive cryptocurrencies tracker. You can check live coin prices and create your own coin portfolio to track gains and losses.",
		skills: ["NextJS with TypeScript", "ChakraUI", "Strapi (PostgreSQL)"],
		image: "./img/PR_06_img.png",
		video: "./img/PR_06_vid.mp4",
		link: "https://github.com/barkow96/crypto-tracker",
	},

	{
		id: 2,
		name: "Application System",
		description:
			"Fullstack application developed in NextJS technology. Student application system for studies at AGH University of Science and Technology.",
		skills: ["HTML", "SCSS", "NextJS", "MongoDB"],
		image: "./img/PR_05_img.png",
		video: "./img/PR_05_vid.mp4",
		link: "https://github.com/barkow96/application-system",
	},

	{
		id: 3,
		name: "Event Handling Studies",
		description: "Studies on event handling in JavaScript. Media queries based responsive design.",
		skills: ["HTML", "CSS", "JavaScript"],
		image: "./img/PR_04_img.png",
		video: "./img/PR_04_vid.mp4",
		link: "https://barkow96.github.io/responsive-event-handling/",
	},

	{
		id: 4,
		name: "Slider App",
		description: "Photo slider with some inspiring images. Created as ready to deploy React component.",
		skills: ["HTML", "CSS", "React"],
		image: "./img/PR_02_img.png",
		video: "./img/PR_02_vid.mp4",
		link: "https://barkow96.github.io/slider-app/",
	},

	{
		id: 5,
		name: "Sorting Algorithms",
		description: "Performance comparison of sorting algorithms: bubble, selection and quick sort.",
		skills: ["HTML", "CSS", "JavaScript"],
		image: "./img/PR_03_img.png",
		video: "./img/PR_03_vid.mp4",
		link: "https://barkow96.github.io/algorithms-sorting/",
	},

	{
		id: 6,
		name: "Snake Game",
		description: "My implementation of snake game. Control the snake with WSAD buttons and collect as many fruits as possible.",
		skills: ["HTML", "Tailwind CSS", "JavaScript"],
		image: "./img/PR_01_img.png",
		video: "./img/PR_01_vid.mp4",
		link: "https://barkow96.github.io/snake-game/",
	},
];

export default function Slider() {
	const [currentProjectId, setCurrentProjectId] = useState(1);

	function changeCurrentProject(action: actionType) {
		if (action === "INCREMENT") {
			if (currentProjectId < projects.length - 1) setCurrentProjectId((prevId) => prevId + 1);
			else setCurrentProjectId(0);
		}

		if (action === "DECREMENT") {
			if (currentProjectId > 0) setCurrentProjectId((prevId) => prevId - 1);
			else setCurrentProjectId(projects.length - 1);
		}
	}

	return (
		<section className={classes.slider}>
			<MainProject project={projects[currentProjectId]} />
			<Projects projects={projects} currentProjectId={currentProjectId} onProjectChange={changeCurrentProject} />
		</section>
	);
}
