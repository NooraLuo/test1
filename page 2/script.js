console.log('script linked');

function NEXTpage(event){
    console.log('event');
    if(event.keyCode == 39){
        console.log('right arrow');
        document.location.href = '../page 3/index.html';
    }
}

$(window).keydown(NEXTpage);


function PREVIOUSpage(event){
    console.log('event');
    if(event.keyCode == 37){
        console.log('left arrow');
        document.location.href = '../page 1/index.html';
    }
}

$(window).keydown(PREVIOUSpage);
