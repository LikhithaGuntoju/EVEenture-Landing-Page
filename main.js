const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen? "ri-menu-line" : "ri-close-line");
    if(isopen){
        navLinks.classList.add("close");
        navLinks.addEventListener("animationend", (e) => {
            // The animationend listener ensures that:The open and close classes are removed only after the animation completes, which prevents any visual flickering or abrupt changes.It allows for smooth transitions by syncing JavaScript actions with CSS animations.
            navLinks.classList.remove("open");
            navLinks.classList.remove("close");
        },{once : true});
    }
    else{
        navLinks.classList.add("open");
    }
});

// or 5-19  add event listener for menu bar
// menuBtn.addEventListener("click", () => {
//   const isOpen = navLinks.classList.toggle("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
  
// This JavaScript code uses the ScrollReveal library to animate elements as they enter the viewport when the user scrolls down the page. Each reveal function targets specific elements and applies the defined animation settings.

// This scrollRevealOption object defines the base settings for all animations:
// distance: Sets the distance each element will move during the animation.
// origin: Specifies the starting point for the animation (e.g., bottom, left, right, top).
// duration: Defines the time (in milliseconds) it takes for the animation to complete.
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container .section_subheader",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container .section_header",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_container .scroll_btn",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_container .header_socials",{
    ...scrollRevealOption,
    origin:"left",
    delay:1500,
});
// Revealing Specific Elements with ScrollReveal():Each reveal function targets different elements within .header__container and uses ...scrollRevealOption to apply the common animation settings. Specific delays are added to some elements for a staggered effect.
ScrollReveal().reveal(".about_image-1, .about_image-3",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".about_image-2",{
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".about_content .section_subheader",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".about_content .section_header",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".about_content p",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".about_content .about_btn",{
    ...scrollRevealOption,
    delay:2000,
});
