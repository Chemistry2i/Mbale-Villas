
// Toggle menu to display the navbar on mobile devices
const navbar = document.querySelector('.main002');
const mainNavBar = document.querySelector('.MainNavBar');
const close = document.querySelector('.close');

navbar.addEventListener('click', function(){
    mainNavBar.classList.toggle('active');
})

close.addEventListener('click',function(){
    mainNavBar.classList.remove('active');
})

const beforeBtn = document.querySelector('.beforeBtn');
const nextBtn = document.querySelector('.nextBtn');
const slider = document.querySelector('.homeInputs');

nextBtn.addEventListener('click', function(){
    slider.scrollTop += 100;
});


beforeBtn.addEventListener('click', function(){
    slider.scrollTop -= 100;
});


//Scroll Animation on different elements 
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    })
})

const section = document.querySelectorAll('.section');
const Section = document.querySelectorAll('#section');
Section.forEach((el) => observer.observe(el));
section.forEach((el) => observer.observe(el));
//Scroll animations end here considering the classes and ids .