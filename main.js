const projects = [
    {name: "Chess Game",
    description: "My implementation of chess game using HTML, CSS and vanilla JS. Play the game of kings!",
    skills: ["HTML", "CSS", "JS"],
    image: "./img/PR_00_img.png",
    video: "./img/PR_00_vid.mp4",
    link: "https://barkow96.github.io/chess-game/"},

    {name: "Snake Game",
    description: "My implementation of snake game using HTML, CSS (Tailwind) and vanilla JS.",
    skills: ["HTML", "Tailwind CSS", "JS"],
    image: "./img/PR_01_img.png",
    video: "./img/PR_01_vid.mp4",
    link: "https://barkow96.github.io/snake-game/"},

    {name: "Slider App",
    description: "Photo gallery using React.js.",
    skills: ["HTML", "CSS", "React JS"],
    image: "./img/PR_02_img.png",
    video: "./img/PR_02_vid.mp4",
    link: "https://barkow96.github.io/slider-app/"},

    {name: "Sorting Algorithms",
    description: "Comparison of sorting algorithms: bubble sort, selection sort, quick sort.",
    skills: ["HTML", "CSS", "JS"],
    image: "./img/PR_03_img.png",
    video: "./img/PR_03_vid.mp4",
    link: "https://barkow96.github.io/algorithms-sorting/"}
];

//GET ACCESS TO HTML ELEMENTS
const projectDivs = document.querySelectorAll(".project");
const projectVID = document.querySelector("#mainProjectVID");
const projectName = document.querySelector("#mainProjectName");
const projectDescription = document.querySelector("#mainProjectDescription");
const projectSkills = document.querySelector("#mainProjectSkills");
const projectLink = document.querySelector("#projectLink");

//CREATE DYNAMIC ELEMENTS
const VID = document.createElement("video");
const img0 = document.createElement("img");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
let liElement = document.createElement("li");

//APPEND DYNAMIC ELEMENTS TO DOM ELEMENTS
projectVID.appendChild(VID);
projectDivs[0].appendChild(img0);
projectDivs[1].appendChild(img1);
projectDivs[2].appendChild(img2);

//DEFINE VARIABLES AND CONSTANTS
const RENDER_TIME = 500;
const PROJECTS_NUMBER = projects.length;
let mainProject = 1;

//FIRST LOAD OF THE PAGE
window.onload = () => {
    projectLink.href = projects[1].link;

    VID.src = projects[1].video;
    VID.style.backgroundImage = `url(${projects[1].image})`;
    VID.muted = true;
    VID.autoplay = true;
    VID.loop = true;
    
    projectName.innerHTML = projects[mainProject].name;
    projectDescription.innerHTML = projects[mainProject].description;

    projects[1].skills.forEach(skill => {
        liElement = document.createElement("li");
        liElement.innerHTML = skill;
        projectSkills.appendChild(liElement);
    });
    
    img0.src = projects[0].image;
    img1.src = projects[1].image;
    img2.src = projects[2].image;
};

//RENDER ANOTHER MAIN PROJECT AND SIDE PROJECTS
const renderProjects = () => {
    projectVID.classList.add("minOpacity");
    projectVID.classList.remove("maxOpacity");

    setTimeout(() => {
        projectVID.classList.add("maxOpacity");
        projectVID.classList.remove("minOpacity");

        img1.src = projects[mainProject].image;
        if (mainProject >= 1 && mainProject <= PROJECTS_NUMBER-2) {
            img0.src = projects[mainProject-1].image;
            img2.src = projects[mainProject+1].image;
        }
        else if (mainProject == 0) {
            img0.src = projects[PROJECTS_NUMBER-1].image;
            img2.src = projects[mainProject+1].image;
        }
        else if (mainProject == PROJECTS_NUMBER-1) {
            img0.src = projects[mainProject-1].image;
            img2.src = projects[0].image;
        }

        projectLink.href = projects[mainProject].link;

        VID.src = projects[mainProject].video;
        VID.style.backgroundImage = `url(${projects[mainProject].image})`;
        
        projectName.innerHTML = projects[mainProject].name;
        projectDescription.innerHTML = projects[mainProject].description;

        projectSkills.innerHTML = "";
        projects[mainProject].skills.forEach(skill => {
            liElement = document.createElement("li");
            liElement.innerHTML = skill;
            projectSkills.appendChild(liElement);
        });
    }, RENDER_TIME); 
};

//ADD EVENT LISTENERS
projectDivs.forEach(div => {
    div.addEventListener("click", (event) => {
        switch (event.composedPath()[1].id) {
            case "PR_left":
                if (mainProject >= 1) mainProject--;
                else mainProject = PROJECTS_NUMBER-1;
                break;
            case "PR_middle":
                break;
            case "PR_right":
                if (mainProject  <= PROJECTS_NUMBER-2) mainProject++;
                else mainProject = 0;
                break;
        };

        renderProjects();
    });
});
