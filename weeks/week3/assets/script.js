// navigator.getBattery().then((battery) => {
//   function updateAllBatteryInfo() {
//     updateChargeInfo();
//     updateLevelInfo();
//     updateChargingInfo();
//     updateDischargingInfo();
//   }
//   updateAllBatteryInfo();

//   function updateChargeInfo() {
//     console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
//   }

//   function updateLevelInfo() {
//     console.log(`Battery level: ${battery.level * 100}%`);
//   }

//   function updateChargingInfo() {
//     console.log(`Battery charging time: ${battery.chargingTime} seconds`);
//   }

//   function updateDischargingInfo() {
//     console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
//   }
// });


// document.addEventListener(`copy`, (event) => {
//   event.preventDefault();
//   console.log(`you can't copy this data`);
//   event.clipboardData.setData(`text/plain`, `What do you think you're doing?`)
// })

const allH1Elements = document.getElementsByTagName(`h1`);
const OurPageTitle = allH1Elements[0];

OurPageTitle.innerText = "Welcome to IT3049C";
OurPageTitle.style.color = "red";
OurPageTitle.remove();

const allExampleElements = document.getElementsByClassName(`example`)
console.log(allExampleElements[0])

const specialExample = document.getElementById(`special-example`)
specialExample.textContent = "This is our special"

const containerDiv = document.getElementById(`container`)

console.log(containerDiv.innerHTML)
console.log(containerDiv.outerHTML)

// containerDiv.outerHTML = "<h3> We don't have a container here </h3>"

const specialExample2 = document.querySelector(`#special-example`)
const exampleClassElements = document.querySelectorAll(`.example`)
console.log(exampleClassElements)




























