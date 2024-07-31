const r = document.querySelector(":root");
const cabinetClosedPosition = "-470px";
const cabinetOpenPosition = "0px";
const mediaQuery = window.matchMedia("(max-width: 1067px)");

const cabinetFronts = document.getElementsByClassName("cabinet-front");
const cabinetsAreOpen = Array(cabinetFronts.length).fill(false)
const labelsByCabinet = Array(cabinetFronts.length);
for (let i = 0; i < labelsByCabinet.length; i++) {
  labelsByCabinet[i] = cabinetFronts.item(i).parentElement.getElementsByClassName("label");
}

const closeCabinet = (cabinetFront, labels) => {
    cabinetFront.classList.remove("open");
    for(let i = 0; i < labels.length; i++){
      labels.item(i).removeAttribute("tabIndex");
    }
}

const openCabinet = (cabinetFront, labels) => {
    cabinetFront.classList.add("open");
  for (let i = 0; i < labels.length; i++) {
    labels.item(i).tabIndex = "0";
  }
}

for (let i = 0; i < cabinetFronts.length; i++) {
  cabinetFronts.item(i).addEventListener("click", () => {
    cabinetsAreOpen[i] = !cabinetsAreOpen[i];
    if (cabinetFronts.item(i).classList.contains("open")) {
      closeCabinet(cabinetFronts.item(i), labelsByCabinet[i]);
    } else {
      openCabinet(cabinetFronts.item(i), labelsByCabinet[i]);
      if (mediaQuery.matches) {
        for (let j = 0; j < cabinetFronts.length; j++) {
          if(j != i) {
            closeCabinet(cabinetFronts.item(j), labelsByCabinet[j]);
          }
        }
      }
    }
    if (previousFolder < folders.length) {
      folders.item(previousFolder).classList.remove("selected");
    }
    console.log(cabinetFronts);
    console.log(cabinetsAreOpen);
  })
}

const folders = document.getElementsByClassName("folder");

let previousFolder = folders.length;
for (let i = 0; i < folders.length; i++) {
  folders.item(i).addEventListener("click", () => {
    if (previousFolder < folders.length) {
      folders.item(previousFolder).classList.remove("selected");
    }
    if (previousFolder == i) {
      folders.item(i).classList.remove("selected");
      previousFolder = folders.length;
    }
    else {
      folders.item(i).classList.add("selected");
      previousFolder = i;
    }

  })
}