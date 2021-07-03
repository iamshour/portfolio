const mobileBtn = document.getElementById('hamburger')
    nav = document.querySelector('nav')
    navList = document.querySelectorAll('.nav-list li')
    mobileBtnExit = document.getElementById('close-icon');
    images = document.querySelectorAll(".certificate img:nth-child(2)")
    modal = document.querySelector(".modal");
    modalImg = document.querySelector(".modal-img");
    closeMod = document.querySelector(".close-mod");
    idea = document.querySelector('svg.idea');

    
// // Mobile Nav

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navList.forEach((item) => {
    item.addEventListener("click", () => {
        nav.classList.remove('menu-btn');
    });
});



// Modal

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.classList.add("appear");

        closeMod.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});


// Idea (Lamp)

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 10 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {

    if (isInViewport(idea)) {
        idea.classList.remove('exits');
        idea.classList.add('enters'); 
    } else {
        idea.classList.add('exits')
        idea.classList.remove('enters');
    }
    
}, {
    passive: true
});



// Slider

  $(function(){
    var i= 0;

$('.nextt').on("click", function(){
    i = i + 1;
    if (i == $('.imgg').length) {
    i=0;
}
var currentImg = $('.imgg').eq(i);
var prevImg = $('.imgg').eq(i-1);
animateImage(prevImg, currentImg);	
});

$('.prevv').on("click", function(){
    
    if (i==0) {	
        prevImg = $('.imgg').eq(0);
        i=$('.imgg').length-1;
        currentImg = $('.imgg').eq(i);
    } 
    else {
        i=i-1;
        currentImg = $('.imgg').eq(i);
        prevImg = $('.imgg').eq(i+1);
    }
    animateImageLeft(prevImg, currentImg);	
});

function animateImageLeft(prevImg, currentImg) {
    currentImg.css({"left":"100%"});
    currentImg.animate({"left":"0%"}, 1000);
    prevImg.animate({"left":"-100%"}, 1000);
}

function animateImage(prevImg, currentImg) {
    currentImg.css({"left":"-100%"});
    currentImg.animate({"left":"0%"}, 1000);
    prevImg.animate({"left":"100%"}, 1000);	
}
});