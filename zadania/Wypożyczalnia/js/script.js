const MobileMenu = document.querySelector(".mobile-menu");



MobileMenu.addEventListener("click",()=>{
    const line = document.querySelectorAll(".line");
    const mobileAbsolute = document.querySelector(".mobile-absolute");

    line[0].classList.toggle("line-reverse1");
    line[1].classList.toggle("hidden");
    line[2].classList.toggle("line-reverse2");

    mobileAbsolute.classList.toggle("hidden")
})