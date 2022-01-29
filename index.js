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

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
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
  duration: 1000,
  distance: "1rem",
  interval: 200,
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
