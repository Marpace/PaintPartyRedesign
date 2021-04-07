
const item1 = $('.item1');
const item2 = $('.item2');
const item3 = $('.item3');

const items = [item1, item2, item3];

const rotateForward = function(){
  

    items.forEach(item => {
        if(item.hasClass('toFront')){
            item.animate({
                top: "160",
                opacity: 0
            }, 200, function(){
                item.css("top", "");
            });
            item.delay(200).animate({
                opacity: 1
            });
            setTimeout(function(){
                item.addClass('toBack');
                item.removeClass('toFront');
            }, 100);
            
        } else if (item.hasClass('toMiddle')){
            setTimeout(function(){
                item.addClass('toFront');
            item.removeClass('toMiddle');
            }, 100);
            
        } else {
            setTimeout(function(){
                item.addClass('toMiddle');
            item.removeClass('toBack');
            }, 100);
        }
    });   
};

const rotateBackwards = function(){
  
    items.forEach(item => {
        if(item.hasClass('toFront')){
            setTimeout(function(){
                item.addClass('toMiddle');
            item.removeClass('toFront');
            }, 100);
            
        } else if (item.hasClass('toMiddle')){
            setTimeout(function(){
                item.addClass('toBack');
            item.removeClass('toMiddle');
            }, 100);
            
        } else {
            item.animate({
                top: "160",
                opacity: 0
            }, 200, function(){
                item.css("top", "");
            });
            item.delay(200).animate({
                opacity: 1
            });

            setTimeout(function(){
                item.addClass('toFront');
            item.removeClass('toBack');
            }, 100);
        }
    });   
};


const selector1 = $('#selector-1')
const selector2 = $('#selector-2')
const selector3 = $('#selector-3')

const selectors = [selector1, selector2, selector3]

const cardsText1 = $('#cards-text-1');
const cardsText2 = $('#cards-text-2');
const cardsText3 = $('#cards-text-3');

let animating;


selector1.click(function(){
    if(!animating){
        animating = true;
        if(item1.hasClass('toMiddle')){
            rotateForward();
        } 
        if(item1.hasClass('toBack')){
            rotateBackwards();
        };
        cardsText1.addClass('textActive');
        cardsText2.removeClass('textActive');
        cardsText3.removeClass('textActive');
       
        selector1.addClass('selector-active')
        selector2.removeClass('selector-active');
        selector3.removeClass('selector-active');
        
    }
    animating = false;
});
selector2.click(function(){
    if(!animating){
        if(item2.hasClass('toMiddle')){
            rotateForward();
        } 
        if(item2.hasClass('toBack')){
            rotateBackwards();
        };
        cardsText2.addClass('textActive');
        cardsText1.removeClass('textActive');
        cardsText3.removeClass('textActive');
        
        selector2.addClass('selector-active')
        selector1.removeClass('selector-active');
        selector3.removeClass('selector-active');
    }   
    animating = false;
});
selector3.click(function(){
    if(!animating){
        if(item3.hasClass('toMiddle')){
            rotateForward();
        } 
        if(item3.hasClass('toBack')){
            rotateBackwards();
        };
        cardsText3.addClass('textActive');
        cardsText2.removeClass('textActive');
        cardsText1.removeClass('textActive');
    
        selector3.addClass('selector-active')
        selector2.removeClass('selector-active');
        selector1.removeClass('selector-active');
    }
    animating = false;
});



const cardsOptions = {
    rootMargin: "0px",
    threshold: .6
};

const cardsCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            item1.animate({
                opacity: "1"
            }, 400);
            item2.delay(200).animate({
                opacity: "1"
            }, 400);
            item3.delay(400).animate({
                opacity: "1"
            }, 400);
            item1.addClass('toFront') 
            item2.addClass('toMiddle')
            item3.addClass('toBack')

            observer.unobserve(cardsTarget);
        }
        
    });
};

const cardsTarget = document.querySelector('.cards');

const observer = new IntersectionObserver(cardsCallback, cardsOptions);

observer.observe(cardsTarget);


// const toggler = $('#navbar-toggler');
// const navList = $('nav ul');

// const navLinks = document.querySelectorAll('li');
// const div1 = $('#toggler-div-1');
// const div2 = $('#toggler-div-2');
// const div3 = $('#toggler-div-3');
// toggler.click(() => {
//     navList.slideToggle();
// });

const toggler = document.querySelector('#navbar-toggler');
const div1 = document.querySelector('#toggler-div-1');
const div2 = document.querySelector('#toggler-div-2');
const div3 = document.querySelector('#toggler-div-3');
const smallNav = document.querySelector('#small-nav');

const animateToggler = function(element){
    element.style.top = "15px"
    element.style.width = "70%"
    element.style.transition = ".1s"
}
const animateX = function(element){
    element.style.top = ""
    element.style.width = ""
    element.style.transition = ""
}
toggler.addEventListener('click', function(){
    if(getComputedStyle(div2).opacity === "1"){
        animateToggler(div1);
        animateToggler(div3);
        div2.style.opacity = "0"
        setTimeout(function(){
            div1.style.transform = "rotate(45deg)";
            div3.style.transform = "rotate(-45deg)";
        }, 100);

        smallNav.style.height = "170px";

    } else {
        div1.style.transform = "";
        div3.style.transform = "";
        
        setTimeout(() => {
           animateX(div1);
           animateX(div3) 
           div2.style.opacity = "1"
        }, 100);
        smallNav.style.height = "0";
    }
})


const navLinks = document.querySelectorAll('nav li');
navLinks.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        item.lastChild.style.transition = '.2s'
        item.lastChild.style.left = '100%'
    });
    item.addEventListener('mouseout', ()=> {
        item.lastChild.style.transition = '.2s'
        item.lastChild.style.left = '5px'
    });
})



const carousel = document.querySelector('#carousel-body');
const carouselItems = document.querySelectorAll('.test-car-item');

const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-previous');

let counter = 1;
const size = carouselItems[0].clientWidth + 45;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

const indicator = document.querySelector('#indicator-light');

const moveLight = function(){
    indicator.style.transition = '.4s'
    if(counter === 1 || counter === 4){
        indicator.style.transform = 'translateX(0)'
    }
    if(counter === 2){
        indicator.style.transform = 'translateX(100%)'
    }
    if(counter === 0 || counter === 3){
        indicator.style.transform = 'translateX(203%)'
    }
};

nextButton.addEventListener('click', ()=>{
    if(counter >= carouselItems.length -1) return;
    carousel.style.transition = 'transform .7s ease-in-out';
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + "px)";
    moveLight();
});

prevButton.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carousel.style.transition = 'transform .7s ease-in-out';
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    moveLight();
});

carousel.addEventListener('transitionend', ()=>{
    if(counter === 0){
        carousel.style.transition = 'none';
        counter = carouselItems.length -2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if (counter === carouselItems.length -1){
        carousel.style.transition = 'none';
        counter = 1;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


