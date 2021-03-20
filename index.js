const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const triggerNext = document.querySelector('.triggerNext');
const triggerPrevious = document.querySelector('.triggerPrevious');

const items = [item1, item2, item3]

const rotateForward = function(){
    items.forEach(item => {
        if(item.classList.contains('toFront')){
            item.classList.add('toBack');
            item.classList.remove('toFront')
        } else if (item.classList.contains('toMiddle')){
            item.classList.add('toFront')
            item.classList.remove('toMiddle')
        } else {
            item.classList.add('toMiddle')
            item.classList.remove('toBack')
        }
    });   
};

const rotateBackwards = function(){
    items.forEach(item => {
        if(item.classList.contains('toFront')){
            item.classList.add('toMiddle');
            item.classList.remove('toFront')
        } else if (item.classList.contains('toMiddle')){
            item.classList.add('toBack')
            item.classList.remove('toMiddle')
        } else {
            item.classList.add('toFront')
            item.classList.remove('toBack')
        }
    });     
};

triggerNext.addEventListener('click', function(){
    rotateForward();
});
triggerPrevious.addEventListener('click', function(){
    rotateBackwards();
});


const selector1 = document.getElementById('selector-1');
const selector2 = document.getElementById('selector-2');
const selector3 = document.getElementById('selector-3');

selector1.addEventListener('click', function(){
    if(item1.classList.contains('toMiddle')){
        rotateForward();
    } else if(item1.classList.contains('toBack')){
        rotateBackwards();
    }
});
selector2.addEventListener('click', function(){
    if(item2.classList.contains('toMiddle')){
        rotateForward();
    } else if (item2.classList.contains('toBack')){
        rotateBackwards();
    }
});
selector3.addEventListener('click', function(){
    if(item3.classList.contains('toMiddle')){
        rotateForward();
    } else if (item3.classList.contains('toBack')){
        rotateBackwards();
    }
});