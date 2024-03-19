

console.log('script linked');


function pageOne(event) {
    console.log(event); 
    if (event.key === 'm') { 
        window.location.href = 'index1.html'; 
    } else if (event.key === 'i'){
        window.location.href = 'index0.html'; 
    } else if (event.key === 'h'){
        window.location.href = 'index2.html'; 
    } else if (event.key === 'w'){
        window.location.href = 'index3.html'; 
    } else if (event.key === 'c'){
        window.location.href = 'index4.html'; 
    } else if (event.key === 'p'){
        window.location.href = 'index5.html'; 
    } else if (event.key === 'a'){
        window.location.href = 'index6.html'; 
    } else if (event.key === 'e'){
        window.location.href = 'index7.html'; 
    } else if (event.key === 'f'){
        window.location.href = 'index8.html'; 
    } else if (event.key === 'n'){
        window.location.href = 'index9.html'; 
    }
}

$(window).keypress(pageOne);

