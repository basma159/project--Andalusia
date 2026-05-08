



// let  btn =document.querySelector(".menuBtn")
// let menu =document.querySelector("#nav1")
// let icon =document.querySelector(".icon")


// btn.addEventListener("click",function(){
//     menu.classList.toggle("hidden")
//     if (menu.classList.contains("hidden")){
//         icon.classList.remove("fa-xmark")
//         icon.classList.add("fa-bars")
//     }
//     else{
//          icon.classList.remove("fa-bars")
//         icon.classList.add("fa-xmark")
//     }
// })

let btn = document.getElementById("menuBtn")
let menu = document.getElementById("menuMobile")
let icon = document.getElementById("menuId")


btn.onclick = function () {
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")

    }
    else {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")

    }
}

document.querySelectorAll("#menuMobile a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});

window.onload = function () {
    document.getElementById("loader").style.display = "none"
}

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// window.addEventListener("scroll", function () {

//     let scroll = document.documentElement.scrollTop
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

//     let progress = (scroll / height) * 100

//     document.getElementById("progressBar").style.width = progress + "%"

// })


let cursor = document.getElementById("cursor")
let glow = document.getElementById("cursorGlow")
let progressBar = document.getElementById("progressBar")

/* Andalusian Star Shape */
cursor.style.clipPath = `
polygon(
50% 0%,
61% 35%,
100% 50%,
61% 65%,
50% 100%,
39% 65%,
0% 50%,
39% 35%
)
`

cursor.style.transform = "translate(-50%, -50%) rotate(45deg)"



/* Cursor Movement */
document.addEventListener("mousemove", (e) => {

    let x = e.clientX
    let y = e.clientY

    cursor.style.left = x + "px"
    cursor.style.top = y + "px"

    glow.style.left = x + "px"
    glow.style.top = y + "px"

})


/* Cursor Rotation Animation */
let rotate = 45

document.addEventListener("mousemove", () => {

    rotate += 8

    cursor.style.transform =
        `translate(-50%, -50%) rotate(${rotate}deg)`

})



/* Hover Effects */
let hoverItems = document.querySelectorAll("a, button")

hoverItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add(
            "scale-150",
            "shadow-[0_0_30px_rgba(255,215,0,1)]"
        )

        glow.classList.add(
            "scale-150",
            "bg-yellow-300/30"
        )

    })

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove(
            "scale-150",
            "shadow-[0_0_30px_rgba(255,215,0,1)]"
        )

        glow.classList.remove(
            "scale-150",
            "bg-yellow-300/30"
        )

    })

})



/* Scroll Progress */
window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

    let progress = (scrollTop / height) * 100

    progressBar.style.width = progress + "%"



    /* Dynamic Color Change */

    if (progress < 30) {

        progressBar.className =
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-emerald-700 to-green-400 shadow-[0_0_20px_rgba(16,185,129,.7)]"

    }

    else if (progress < 70) {

        progressBar.className =
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-lime-500 to-yellow-400 shadow-[0_0_20px_rgba(250,204,21,.7)]"

    }

    else {

        progressBar.className =
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-yellow-400 to-amber-600 shadow-[0_0_25px_rgba(212,175,55,1)]"

    }

})

AOS.init();

const track = document.querySelector(".track");

// 1. ننسخ العناصر تلقائي
const cards = Array.from(track.children);
cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});

let position = 0;
let speed = 1;
let isPaused = false;

// عرض العنصر الواحد تقريبًا
const cardWidth = cards[0].offsetWidth + 20;

function animate() {
    if (!isPaused) {
        position -= speed;

        // لما نوصل لنص العناصر نرجع للبداية بس بدون ما نحس
        if (Math.abs(position) >= track.scrollWidth / 2) {
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animate);
}

animate();

// 2. pause عند hover
track.addEventListener("mouseenter", () => {
    isPaused = true;
});

track.addEventListener("mouseleave", () => {
    isPaused = false;
});


