const r = document.querySelector(":root");
const cabinetClosedPosition = "-470px";
const cabinetOpenPosition = "0px";


const cabinetFronts = document.getElementsByClassName("cabinet-front");
const cabinetsAreOpen = Array(cabinetFronts.length).fill(false)

for (let i = 0; i < cabinetFronts.length; i++) {
  cabinetFronts.item(i).addEventListener("click", () => {
    r.style.setProperty("--cabinet-inside-position", cabinetsAreOpen[i] ? cabinetClosedPosition : cabinetOpenPosition);
    cabinetsAreOpen[i] = !cabinetsAreOpen[i];
    if (cabinetFronts.item(i).classList.contains("open")) {
      cabinetFronts.item(i).classList.remove("open");
    } else {
      cabinetFronts.item(i).classList.add("open");
    }
    if(previousFolder < folders.length) {
      folders.item(previousFolder).classList.remove("selected");
    }  
  })
}

const folders = document.getElementsByClassName("folder");

let previousFolder = folders.length;
for(let i = 0; i < folders.length; i++)
  {
    folders.item(i).addEventListener("click",() => {
      if(previousFolder < folders.length) {
        folders.item(previousFolder).classList.remove("selected");
      }  
      if(previousFolder == i) {
        folders.item(i).classList.remove("selected");
        previousFolder = folders.length;
      }
      else{
        folders.item(i).classList.add("selected");
        previousFolder = i;
      }
      
    })
  }