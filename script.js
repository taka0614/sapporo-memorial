const targetElement = document.querySelectorAll(".animation");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElement.length; i++) {
        const TargetDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .5;
        if(window.innerHeight > TargetDistance) {
            targetElement[i].classList.add("active");
        }
    }
});