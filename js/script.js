



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

window.addEventListener("scroll", function () {

    let scroll = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let progress = (scroll / height) * 100

    document.getElementById("progressBar").style.width = progress + "%"

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


