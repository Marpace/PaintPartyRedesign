
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
            }, 300, function(){
                item.css("top", "");
            });
            item.delay(300).animate({
                opacity: 1
            });
            setTimeout(function(){
                item.addClass('toBack');
                item.removeClass('toFront');
            }, 400);
            
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
            }, 300, function(){
                item.css("top", "");
            });
            item.delay(300).animate({
                opacity: 1
            });

            setTimeout(function(){
                item.addClass('toFront');
            item.removeClass('toBack');
            }, 400);
        }
    });   
};




$('.triggerNext').click(function(){
    rotateForward();
});  

$('.triggerPrevious').click(function(){
    rotateBackwards();
});


const selector1 = $('#selector-1')
const selector2 = $('#selector-2')
const selector3 = $('#selector-3')

selector1.click(function(){
    if(item1.hasClass('toMiddle')){
        rotateForward();
    } else if(item1.hasClass('toBack')){
        rotateBackwards();
    }
});
selector2.click(function(){
    if(item2.hasClass('toMiddle')){
        rotateForward();
    } else if(item2.hasClass('toBack')){
        rotateBackwards();
    }
});
selector3.click(function(){
    if(item3.hasClass('toMiddle')){
        rotateForward();
    } else if(item3.hasClass('toBack')){
        rotateBackwards();
    }
});

const toggler = $('#navbar-toggler');
const navList = $('nav ul');

toggler.click(() => {
    navList.slideToggle();
    navList.css("display", "block");
});

