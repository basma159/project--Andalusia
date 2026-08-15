

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

document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add("hidden");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    }
})

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, {
    rootMargin: "-100px 0px -60% 0px"
});

window.addEventListener("scroll", function () {

    let scroll = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let progress = (scroll / height) * 100

    document.getElementById("progressBar").style.width = progress + "%"

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
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-emerald-700 to-green-700 shadow-[0_0_20px_rgba(16,185,129,.7)]"

    }

    else if (progress < 70) {

        progressBar.className =
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-lime-500 to-yellow-600 shadow-[0_0_20px_rgba(250,204,21,.7)]"

    }

    else {

        progressBar.className =
            "fixed top-0 right-0 h-[5px] z-[99999] bg-gradient-to-l from-yellow-400 to-amber-600 shadow-[0_0_25px_rgba(212,175,55,1)]"

    }

})

AOS.init();
