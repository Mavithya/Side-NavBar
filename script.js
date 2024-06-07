
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});

/* ======Carousal Wallpapers====== */

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const bgBlur = document.querySelector('.bg-blur');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  const currentImgSrc = carouselItems[currentIndex].querySelector('img').src;
  bgBlur.style.backgroundImage = `url(${currentImgSrc})`;
  
}
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

const button = document.querySelector('.button');

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      // if (currentIndex < 0) {
        //   currentIndex = carouselItems.length + 1;
        // }
      updateCarousel();
    });
    
    
    setInterval(autoSlide, 100000); // Change image every 3 seconds

    updateCarousel(); // Initial update

/*Button*/
const Button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.classList.add("animate");
  setTimeout(() =>{
    button.classList.remove("animate");
  },600);
});

window.addEventListener('resize', function() {
  var nav1 =document.querySelector('.sidebar');
  var nav = document.querySelector('.sm-nav');
  var viewportWidth = window.innerWidth;

  
  if (viewportWidth <= 500) {
    sidebar.classList.toggle("close");
    // carousel.remove('.carousel');
    // bgBlur.remove('.bg-blur');
    // nextButton.remove('next');
    // prevButton.remove('prev')
    nav.classList.remove('opacity-0');
    nav1.classList.remove('opacity-100');
    nav1.classList.add('opacity-0');
    
  } else {
    nav.classList.remove('opacity-0');
    nav.classList.add('opacity-0');
    nav1.classList.add('opacity-100');
  }
});

