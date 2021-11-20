import IMG_00 from "./img/PR_00_img.png";
import IMG_01 from "./img/PR_01_img.png";
import IMG_02 from "./img/PR_02_img.png";
import IMG_03 from "./img/PR_03_img.png";
import VID_00 from "./img/PR_00_vid.mp4";
import VID_01 from "./img/PR_01_vid.mp4";
import VID_02 from "./img/PR_02_vid.mp4";
import VID_03 from "./img/PR_03_vid.mp4";

const projects = [
    {name: "Chess Game",
    description: "My implementation of chess game using HTML, CSS and vanilla JS. Play the game of kings!",
    skills: ["HTML", "CSS", "JS"],
    image: IMG_00,
    video: VID_00,
    link: "https://barkow96.github.io/chess-game/"},

    {name: "Snake Game",
    description: "My implementation of snake game using HTML, CSS (Tailwind) and vanilla JS.",
    skills: ["HTML", "Tailwind CSS", "JS"],
    image: IMG_01,
    video: VID_01,
    link: "https://barkow96.github.io/snake-game/"},

    {name: "Slider App",
    description: "Photo gallery using React.js.",
    skills: ["HTML", "CSS", "React JS"],
    image: IMG_02,
    video: VID_02,
    link: "https://barkow96.github.io/slider-app/"},

    {name: "Sorting Algorithms",
    description: "Comparison of sorting algorithms: bubble sort, selection sort, quick sort.",
    skills: ["HTML", "CSS", "JS"],
    image: IMG_03,
    video: VID_03,
    link: "https://barkow96.github.io/algorithms-sorting/"}
];

export default projects;