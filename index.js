// const myData = document.querySelector("#data");

// let datas = fetch("data.json")
//   .then((response) => response.json())
//   .then((transfer) => {
//     transfer.forEach((element) => {
//       myData.innerHTML += `<div class="col-md-3 col-6 sol mt-md-0 px-0">
//            <div class="muncim">
//            <img src="${element.img}" class="img-fluid " alt="">
//            <a href="${element.link}" class="muncimLink" target="_blank">Visit my
//             project</a>
//            </div>
//         </div>`;
//     });
//   });




// intro


const sg = gsap.timeline({default: {ease: 'power1.out'}})

sg.to(".text", { y: "0%",duration: 1.5, stagger: 0.25})

sg.to('.slider', {y : "-100%", duration : 1.5, delay:0.5})
sg.to('.intro', {y : "-100%", duration: 1}, "-=1")
sg.fromTo('nav',{opacity :0}, {opacity:1, duration: 1}) 




const boxe = document.querySelectorAll(".boxoso #layer");
boxe.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("active2");
    gsap.fromTo(".active2", {
      duration: 0.1,
      scaleY: 2,
      ease: "elastic.out(2, 0.4)",
    },{duration:2,scaleY:1, ease:"elastic.out(3, 0.4"});
    setTimeout(() => {
      element.classList.remove("active2");
    }, 300);
  });
});



const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});



document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     "style",
//     "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
//   );
// });

ScrollReveal().reveal(".top", {
  origin: "top",
  duration: 2000,
  distance: "5rem",
  interval: 100,
  opacity: 0,
});
ScrollReveal().reveal(".bottom", {
  origin: "bottom",
  duration: 2000,
  distance: "5rem",
  opacity: 0,
});
ScrollReveal().reveal(".left", {
  origin: "left",
  duration: 2000,
  distance: "5rem",
  interval: 100,
  opacity: 0,
});

ScrollReveal().reveal(".sag", {
  origin: "right",
  duration: 2000,
  distance: "5rem",
  interval: 300,
  opacity: 0,
});
ScrollReveal().reveal(".sol", {
  origin: "left",
  duration: 100,
  distance: "1rem",
  interval: 100,
  opacity: 0,
});

const tl = gsap.timeline({ default: { ease: "" } });
tl.fromTo(
  "nav",
  { opacity: 0, y: "-100%" },
  { y: "0%", opacity: 1, duration: 1 }
);
gsap.fromTo(
  ".sf",
  { x: "500", opacity: 0, rotation: "-120deg" },
  {
    ease: "elastic.out(1, 0.4)",
    opacity: 1,
    x: "0",
    duration: 3,
    rotation: "0deg",
  }
);
