const r = document.querySelector(":root");

const contactDiv = document.getElementById("contact-div")


const mediaQuery = window.matchMedia("(max-width: 1067px)");


const Pages = {
  HOME: "home",
  PROJECTS: "projects",
  CONTACTS: "contacts"
}
/*
const csProjects = [document.getElementById("cs-1"), document.getElementById("cs-2"), document.getElementById("cs-3"), document.getElementById("cs-4"), document.getElementById("cs-5"), document.getElementById("cs-6")]

const webdevProjects = [document.getElementById("webdev-1"), document.getElementById("webdev-2"), document.getElementById("webdev-3"), document.getElementById("webdev-4"), document.getElementById("webdev-5"), document.getElementById("webdev-6"), document.getElementById("webdev-7"), document.getElementById("webdev-8"), document.getElementById("webdev-9")]
*/

let currentFolder;
let currentProject;

const cabinetFronts = document.getElementsByClassName("cabinet-front");
const cabinetsAreOpen = Array(cabinetFronts.length).fill(false)
const labelsByCabinet = Array(cabinetFronts.length);
for (let i = 0; i < labelsByCabinet.length; i++) {
  labelsByCabinet[i] = cabinetFronts.item(i).parentElement.getElementsByClassName("label");
}

const projects = document.getElementsByClassName("project");

const closeCabinet = (cabinetFront, labels) => {
  cabinetFront.classList.remove("open");
  for (let i = 0; i < labels.length; i++) {
    labels.item(i).removeAttribute("tabIndex");
  }
}

const openCabinet = (cabinetFront, labels) => {
  cabinetFront.classList.add("open");
  for (let i = 0; i < labels.length; i++) {
    labels.item(i).tabIndex = "0";
  }
}

const folders = document.getElementsByClassName("folder");

for (let i = 0; i < cabinetFronts.length; i++) {
  cabinetFronts.item(i).addEventListener("click", () => {
    cabinetsAreOpen[i] = !cabinetsAreOpen[i];
    if (cabinetFronts.item(i).classList.contains("open")) {
      closeCabinet(cabinetFronts.item(i), labelsByCabinet[i]);
    } else {
      openCabinet(cabinetFronts.item(i), labelsByCabinet[i]);
      if (mediaQuery.matches) {
        for (let j = 0; j < cabinetFronts.length; j++) {
          if (j != i) {
            closeCabinet(cabinetFronts.item(j), labelsByCabinet[j]);
          }
        }
      }
    }
    if (previousFolder < folders.length) {
      folders.item(previousFolder).classList.remove("selected");
      projects.item(previousFolder).classList.remove("selected");
    }

  })
}



let previousFolder = folders.length;
for (let i = 0; i < folders.length; i++) {
  folders.item(i).addEventListener("click", () => {
    if (previousFolder < folders.length) {
      folders.item(previousFolder).classList.remove("selected");
      projects.item(previousFolder).classList.remove("selected");
    }
    if (previousFolder == i && folders.item(i).classList.contains("selected")) {
      folders.item(i).classList.remove("selected");
      projects.item(i).classList.remove("selected");
      previousFolder = folders.length;
    }
    else {
      folders.item(i).classList.add("selected");
      projects.item(i).classList.add("selected");
      currentFolder = folders.item(i);
      currentProject = projects.item(i);
      previousFolder = i;
    }

  })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const toggleContact = () => {
  if (contactDiv.style.display == "block") {
    contactDiv.style.display = "none";
  } else {
    contactDiv.style.display = "block";
  }

}

contactDiv.addEventListener("click", e => {
  if (e.target == contactDiv) toggleContact();
})

const projectList = document.getElementById("project-list");

const toggleProjectList = () => {
  if (projectList.classList.contains("reveal-list")) {
    projectList.classList.remove("reveal-list");
  } else {
    projectList.classList.add("reveal-list");
  }
}

const projectOverlay = document.getElementById("project-overlay");

const toggleProjectOverlay = (e) => {
  if (e.target == projectOverlay) {
    currentFolder.classList.remove("selected");
    if (currentProject) currentProject.classList.remove("selected");

  }
}

projectOverlay.addEventListener("click", toggleProjectOverlay);

const projectListDiv = document.getElementById("project-shortcut-list");
const projectShortcuts = document.getElementsByClassName("project-shortcut");

const toggleShortcuts = () => {
  if (projectListDiv.classList.contains("display-list")) {
    projectListDiv.classList.remove("display-list");
    for (let i = 0; i < projectShortcuts.length; i++) {
      projectShortcuts.item(i).tabIndex = "-1"
    }
  } else {
    projectListDiv.classList.add("display-list");
    for (let i = 0; i < projectShortcuts.length; i++) {
      projectShortcuts.item(i).tabIndex = "0";
    }
  }
}

const displayProject = (index) => {
  if (previousFolder < folders.length) {
    folders.item(previousFolder).classList.remove("selected");
    projects.item(previousFolder).classList.remove("selected");
  }


  folders.item(index).classList.add("selected");
  projects.item(index).classList.add("selected");
  currentFolder = folders.item(index);
  previousFolder = index;
  toggleShortcuts();
}

const mainDiv = document.getElementById("main");
const pageOneDiv = document.getElementById("page-1");
const pageTwoDiv = document.getElementById("page-2");
const pageThreeDiv = document.getElementById("page-3");
const backgroundDiv = document.getElementById("background");
const changeDisplay = (pageToDisplay) => {
  switch (pageToDisplay) {
    case Pages.HOME:
      mainDiv.style.marginLeft = "0px";
      backgroundDiv.style.marginLeft = "0px";
      togglePageOpactiy(1);
      scrollToTop();
      break;
    case Pages.PROJECTS:
      mainDiv.style.marginLeft = "calc(-100% - 50px)";
      backgroundDiv.style.marginLeft = "-25%";
      togglePageOpactiy(2);
      scrollToTop();
      break;
    case Pages.CONTACTS:
      mainDiv.style.marginLeft = "calc(-200% - 100px)";
      backgroundDiv.style.marginLeft = "-50%";
      togglePageOpactiy(3);
      scrollToTop();
      break;
  }
}

const togglePageOpactiy = (pageNum) => {
  switch (pageNum) {
    case 1:
      pageOneDiv.style.opacity = "1";
      pageTwoDiv.style.opacity = "0";
      pageThreeDiv.style.opacity = "0";
      break;
    case 2:
      pageOneDiv.style.opacity = "0";
      pageTwoDiv.style.opacity = "1";
      pageThreeDiv.style.opacity = "0";
      break;
    case 3:
      pageOneDiv.style.opacity = "0";
      pageTwoDiv.style.opacity = "0";
      pageThreeDiv.style.opacity = "1";
      break;
    default:
      pageOneDiv.style.opacity = "1";
      pageTwoDiv.style.opacity = "1";
      pageThreeDiv.style.opacity = "1";
      break;
  }
}