document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".pimg1, .pimg2, .pimg3");
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Keskikohta
  
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});