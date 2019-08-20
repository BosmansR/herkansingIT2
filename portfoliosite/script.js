// hier komt je code
// console.log("Hallo wereld!");

//mobile size
let me = document.querySelector("#me")
let work = document.querySelector("#work")
let cont = document.querySelector("#cont")
let panelOne = document.querySelector("#panelOne");
let panelTwo = document.querySelector("#panelTwo");
let panelThree = document.querySelector("#panelThree");

me.onclick = function() {
  panelTwo.className = "";
  panelThree.className = "";
}

work.onclick = function() {
  if (panelTwo.className === "") {
    panelTwo.className = "twoShown";
    panelThree.className = "";
  } else {
    panelThree.className = "";
  }
}

cont.onclick = function() {
  if (panelThree.className === "") {
    panelThree.className = "threeShown"
    panelTwo.className = "twoShown"
  }
}

//full size

panelOne.onclick = function() {
  panelTwo.className = "";
  panelThree.className = "";
}

panelTwo.onclick = function() {
  if (this.className === "") {
    this.className = "twoShown";
    panelThree.className = "";
  } else {
    panelThree.className = "";
  }
}

panelThree.onclick = function() {
  if (this.className === "") {
    this.className = "threeShown"
    panelTwo.className = "twoShown"
  }
}

let photography = document.querySelector(".titel_fotografie");
let events = document.querySelector(".titel_event");
let logos = document.querySelector(".titel_logo");
let fotos = document.querySelectorAll(".fotografie");
let logo = document.querySelectorAll(".logo");
let event = document.querySelectorAll(".event");

console.log(fotos);

photography.onclick = function(){
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.add("weg");
  }
  for (let i = 0; i < event.length; i++) {
    event[i].classList.add("weg");
  }
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].classList.remove("weg");
  }
}

events.onclick = function(){
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.add("weg");
  }
  for (let i = 0; i < event.length; i++) {
    event[i].classList.remove("weg");
  }
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].classList.add("weg");
  }
}

logos.onclick = function(){
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.remove("weg");
  }
  for (let i = 0; i < event.length; i++) {
    event[i].classList.add("weg");
  }
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].classList.add("weg");
  }
}
