const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const menuIcon = 'assets/images/menu_icon.svg';
const closeIcon = 'assets/images/close_icon.svg';

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');

    const img = toggleBtn.querySelector('img');
    if (nav.classList.contains('active')) {
      img.src = closeIcon;
    } else {
      img.src = menuIcon;
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggleBtn.querySelector('img').src = menuIcon; 
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        toggleBtn.querySelector('img').src = menuIcon; 
    }
});


const sections = document.querySelectorAll("section[id]");
function setActiveLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector(`.nav a[href*=${sectionId}]`).classList.add("active-link");
    } else {
      document.querySelector(`.nav a[href*=${sectionId}]`).classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", setActiveLink);


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
