let autotype = document.querySelector("#auto-type");
let closeMenu = document.querySelector("#closeMenu");
let openMenu = document.querySelector("#openMenu");


openMenu.addEventListener("click", () => {
  
})

var typed = new Typed(autotype, {
  strings: [
    "Front-end Developer",
    "Programmer",
    "Video Editor",
    "Content Creator",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

// Card styling using GSAP
const card = document.querySelector(".card-content");
const img = card.querySelector("img");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (centerY - y) / 10;
  const rotateY = (x - centerX) / 10;

  gsap.to(card, {
    duration: 0.5,
    rotateX: rotateX,
    rotateY: rotateY,
    ease: "power1.out",
  });

  gsap.to(img, {
    duration: 0.5,
    translateZ: 50,
    ease: "power1.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    duration: 0.5,
    rotateX: 0,
    rotateY: 0,
    ease: "power1.out",
  });

  gsap.to(img, {
    duration: 0.5,
    translateZ: 0,
    ease: "power1.out",
  });
});

// About Card styling using GSAP
const aboutCard = document.querySelector(".about-card");
const aboutImg = aboutCard.querySelector("img");

aboutCard.addEventListener("mousemove", (e) => {
  const rect = aboutCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (centerY - y) / 10;
  const rotateY = (x - centerX) / 10;

  gsap.to(aboutCard, {
    duration: 0.5,
    rotateX: rotateX,
    rotateY: rotateY,
    ease: "power1.out",
  });

  gsap.to(aboutImg, {
    duration: 0.5,
    translateZ: 50,
    ease: "power1.out",
  });
});

aboutCard.addEventListener("mouseleave", () => {
  gsap.to(aboutCard, {
    duration: 0.5,
    rotateX: 0,
    rotateY: 0,
    ease: "power1.out",
  });

  gsap.to(aboutImg, {
    duration: 0.5,
    translateZ: 0,
    ease: "power1.out",
  });
});


var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link")
  }

  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab")
}