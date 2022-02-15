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

const eye1 = document.querySelector(".eye1");
const eye2 = document.querySelector(".eye2");
window.addEventListener("mousemove", (evt) => {
  const x = -(window.innerWidth / 1.5 - evt.pageX) / 10;
  const y = -(window.innerHeight / 1.5 - evt.pageY) / 10;
  eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
  eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

});

// const cursor = document.querySelector(".cursor");
// document.addEventListener("click", () => {
//   cursor.classList.add("expand");

//   setTimeout(() => {
//     cursor.classList.remove("expand");
//   }, 500);
// });

// document.addEventListener("mousemove", (e) => {
//  cursor.setAttribute(
//     "style",
//     "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
//    );
//  });

// animation

// intro

const sg = gsap.timeline({default: {ease: 'power1.out'}})

sg.to(".text", {rotateX:"0deg",duration:.5,opacity:.7, stagger:.1})

sg.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
sg.to(".intro", { y: "-100%", duration: 1 }, "-=1");
sg.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
sg.fromTo(
  ".linksNav",
  { y: "-50%", opacity: 0 },
  { y: "0%", opacity: 1, stagger: 0.3 },
  "-=1"
);
sg.fromTo(
  ".mensi1",
  { "border-top": "200px solid black", opacity: 0, y: "-15%" },
  { "border-top": "40px solid black", opacity: 1, duration: 1, y: "0%" },
  "-=1"
);
sg.fromTo(
  ".mensi2",
  { "border-top": "200px solid black", opacity: 0, y: "-15%" },
  { "border-top": "40px solid black", opacity: 1, duration: 1, y: "0%" },
  "-=1"
);

// var rule = CSSRulePlugin.getRule(".eye:hover::after"); //get the rule

// gsap.from(rule, {transfomr: 'translateY(0%)', color: "white"});



const boxe = document.querySelectorAll(".boxoso #layer");
boxe.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("active2");
    gsap.fromTo(
      ".active2",
      {
        duration: 0.1,
        scaleY: 2,
        ease: "elastic.out(2, 0.4)",
      },
      { duration: 2, scaleY: 1, ease: "elastic.out(3, 0.4" }
    );
    setTimeout(() => {
      element.classList.remove("active2");
    }, 300);
  });
});

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

// let path= document.querySelector("path")
// let pathLength = path.getTotalLength()

// path.style.strokeDasharray= pathLength +' '+ pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener('scroll', ()=>{

//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   var drawLength = pathLength * scrollPercentage

//   path.style.strokeDashoffset = pathLength-drawLength;

// })
