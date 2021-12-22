const nav = document.querySelector(".nav-links")
const burger = document.querySelector(".burger")

burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
})

const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })