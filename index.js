

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


const toggler = $('#navbar-toggler');
const navList = $('nav ul');

toggler.click(() => {
    navList.slideToggle();
    // navList.css("display", "block");
});
