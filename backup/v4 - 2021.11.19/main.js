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



const projectDivs = document.querySelectorAll(".project");
const projectIMG = document.querySelector("#mainProjectIMG");
const projectVID = document.querySelector("#mainProjectVID");
const projectName = document.querySelector("#mainProjectName");
const projectDescription = document.querySelector("#mainProjectDescription");
const projectSkills = document.querySelector("#mainProjectSkills");
const projectLink = document.querySelector("#projectLink");

let mainProject = 1;
const projectsNumber = projects.length;


//const IMG = document.createElement("img");
const VID = document.createElement("video");
const img0 = document.createElement("img");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
let liElement = document.createElement("li");

//projectIMG.appendChild(IMG);
projectVID.appendChild(VID);
projectDivs[0].appendChild(img0);
projectDivs[1].appendChild(img1);
projectDivs[2].appendChild(img2);    

window.onload = () => {
    projectLink.href = projects[1].link;

    //IMG.src = projects[1].image;
    VID.src = projects[1].video;
    VID.muted = true;
    VID.autoplay = true;
    VID.loop = true;
    
    projectName.innerHTML = projects[mainProject].name;
    projectDescription.innerHTML = projects[mainProject].description;

    for (let i=0; i<projects[1].skills.length; i++) {
        liElement = document.createElement("li");
        liElement.innerHTML = projects[mainProject].skills[i];
        projectSkills.appendChild(liElement);
    }

    img0.src = projects[0].image;
    img1.src = projects[1].image;
    img2.src = projects[2].image;
};

projectDivs.forEach(div => {
    div.addEventListener("click", (event) => {
        switch (event.path[1].id) {
            case "PR_left":
                if (mainProject >= 1) mainProject--;
                else mainProject = projectsNumber-1;
                break;
            case "PR_middle":
                break;
            case "PR_right":
                if (mainProject  <= projectsNumber-2) mainProject++;
                else mainProject = 0;
                break;
        };

        renderProjects();
    });
});

const renderProjects = () => {
    img1.src = projects[mainProject].image;
    if (mainProject >= 1 && mainProject <= projectsNumber-2) {
        img0.src = projects[mainProject-1].image;
        img2.src = projects[mainProject+1].image;
    }
    else if (mainProject == 0) {
        img0.src = projects[projectsNumber-1].image;
        img2.src = projects[mainProject+1].image;
    }
    else if (mainProject == projectsNumber-1) {
        img0.src = projects[mainProject-1].image;
        img2.src = projects[0].image;
    }

    //IMG.src = projects[mainProject].image;
    VID.src = projects[mainProject].video;
    projectLink.href = projects[mainProject].link;
    
    projectName.innerHTML = projects[mainProject].name;
    projectDescription.innerHTML = projects[mainProject].description;

    projectSkills.innerHTML = "";
    //let liElement;

    for (let i=0; i<projects[mainProject].skills.length; i++) {
        liElement = document.createElement("li");
        liElement.innerHTML = projects[mainProject].skills[i];
        projectSkills.appendChild(liElement);
    }


};

/*

 skills: ["HTML", "CSS", "JS"],

const projectDivs = document.querySelectorAll(".project");
const projectIMG = document.querySelector("#mainProjectIMG");
const projectName = document.querySelector("#mainProjectName");
const projectDescription = document.querySelector("#mainProjectDescription");
const projectSkills = document.querySelector("#mainProjectSkills");
*/