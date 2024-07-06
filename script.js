const r = document.querySelector(":root");
const cabinetClosedPosition = "0px";
const cabinetOpenPosition = "100px";
let cabinetIsOpen = true;
const cabinetFront = document.getElementById("cabinet-front");
cabinetFront.addEventListener("click", () => {
  r.style.setProperty("--cabinet-inside-position", cabinetIsOpen ? cabinetClosedPosition : cabinetOpenPosition);
  cabinetIsOpen = !cabinetIsOpen;
  
})

console.log(cabinetFront)