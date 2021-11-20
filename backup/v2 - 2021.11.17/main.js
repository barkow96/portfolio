import IMG_00 from "./img/PR_00.png";
import IMG_01 from "./img/PR_01.png";
import IMG_02 from "./img/PR_02.png";
import IMG_03 from "./img/PR_03.png";

const projects = [
    {name: "Chess Game",
    description: "My implementation of chess game using HTML, CSS and vanilla JS. Play the game of kings!",
    skills: ["HTML", "CSS", "JS"],
    url: IMG_00,
    link: "https://barkow96.github.io/chess-game/"},
    {name: "Snake Game",
    description: "My implementation of snake game using HTML, CSS (Tailwind) and vanilla JS.",
    skills: ["HTML", "Tailwind CSS", "JS"],
    url: IMG_01,
    link: "https://barkow96.github.io/snake-game/"},
    {name: "Slider App",
    description: "Photo gallery using React.js.",
    skills: ["HTML", "CSS", "React JS"],
    url: IMG_02,
    link: "https://barkow96.github.io/slider-app/"},
    {name: "Sorting Algorithms",
    description: "Comparison of sorting algorithms: bubble sort, selection sort, quick sort.",
    skills: ["HTML", "CSS", "JS"],
    url: IMG_03,
    link: "https://barkow96.github.io/algorithms-sorting/"}
];



const projectDivs = document.querySelectorAll(".project");
const projectIMG = document.querySelector("#mainProjectIMG");
const projectName = document.querySelector("#mainProjectName");
const projectDescription = document.querySelector("#mainProjectDescription");
const projectSkills = document.querySelector("#mainProjectSkills");
const projectLink = document.querySelector("#projectLink");

let mainProject = 1;
const projectsNumber = projects.length;


const IMG = document.createElement("img");
const img0 = document.createElement("img");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
let liElement = document.createElement("li");

projectIMG.appendChild(IMG);
projectDivs[0].appendChild(img0);
projectDivs[1].appendChild(img1);
projectDivs[2].appendChild(img2);

        

window.onload = () => {
    IMG.src = projects[1].url;
    projectLink.href = projects[1].link;

    projectName.innerHTML = projects[mainProject].name;
    projectDescription.innerHTML = projects[mainProject].description;

    for (let i=0; i<projects[1].skills.length; i++) {
        liElement = document.createElement("li");
        liElement.innerHTML = projects[mainProject].skills[i];
        projectSkills.appendChild(liElement);
    }

    img0.src = projects[0].url;
    img1.src = projects[1].url;
    img2.src = projects[2].url;
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
    img1.src = projects[mainProject].url;
    if (mainProject >= 1 && mainProject <= projectsNumber-2) {
        img0.src = projects[mainProject-1].url;
        img2.src = projects[mainProject+1].url;
    }
    else if (mainProject == 0) {
        img0.src = projects[projectsNumber-1].url;
        img2.src = projects[mainProject+1].url;
    }
    else if (mainProject == projectsNumber-1) {
        img0.src = projects[mainProject-1].url;
        img2.src = projects[0].url;
    }

    IMG.src = projects[mainProject].url;
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