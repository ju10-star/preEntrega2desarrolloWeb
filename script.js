document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const gallerySection = document.getElementById("gallery");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.add("hide-header");
          } else {
            header.classList.remove("hide-header");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (gallerySection) {
      observer.observe(gallerySection);
    }
  });
  
window.addEventListener('scroll', function() {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add('header-no-shadow');
  } else {
    header.classList.remove('header-no-shadow');
  }
});
window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add('header-no-bg');
    } else {
      header.classList.remove('header-no-bg');
    }
});
  