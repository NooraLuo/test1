
console.log('script linked');

function NEXTpage(event){
    console.log('event');
    if(event.keyCode == 39){
        console.log('right arrow');
        window.location.href = 'index4.html';
    }
}

$(window).keydown(NEXTpage);






function PREVIOUSpage(event){
    console.log('event');
    if(event.keyCode == 37){
        console.log('left arrow');
        window.location.href = 'index2.html';
    }
}

$(window).keydown(PREVIOUSpage);



function swimAway(){
    var bottomPos = Math.random()*800;
    var leftPos =Math.random()*1000;
    $('.cycle' ).css('bottom' ,bottomPos);
    $('.cycle' ).css('left' ,leftPos)
}
$('.cycle').hover(swimAway)

setInterval(swimAway, 1000);

function swimAway2(){
    var bottomPos = Math.random()*800;
    var leftPos =Math.random()*1000;
    $('.cycle2' ).css('bottom' ,bottomPos);
    $('.cycle2' ).css('left' ,leftPos)
}
$('.cycle2').hover(swimAway2)

setInterval(swimAway2, 1000);



