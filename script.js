var imagesPeach = [ 
    'https://i.imgur.com/mkBnUtl.png', 
    'https://i.imgur.com/0Txbqr2.png', 
    'https://i.imgur.com/ZRt2LzN.png', 
    
];

var imagesNir = [
    'https://i.imgur.com/8fQKVg7.png',
    'https://i.imgur.com/4tX78PA.png',
    'https://i.imgur.com/iK31pzb.png',
    'https://i.imgur.com/V8sbqCG.png',
    'https://i.imgur.com/CmKMVMn.png',
    
];
var imagesKarina = [
    'https://i.imgur.com/9ZuNsZO.png',

];
window.onload = function() {
    var randomImagePeach = imagesPeach[Math.floor(Math.random() * imagesPeach.length)];
    document.querySelector('.button1').style.backgroundImage = 'url(' + randomImagePeach + ')';

    var randomImageNir = imagesNir[Math.floor(Math.random() * imagesNir.length)];
    document.querySelector('.button2').style.backgroundImage = 'url(' + randomImageNir + ')';

    var randomImageKarina = imagesKarina[Math.floor(Math.random() * imagesKarina.length)];
    document.querySelector('.button3').style.backgroundImage = 'url(' + randomImageKarina + ')';

}

$(document).ready(function() {
    setTimeout(function() {
        $('.div').animate({opacity: 0}, 500, function() {
            $(this).css('z-index', 0);
            $(this).animate({top: '-=100vh'}, 1);
            $(this).remove();
        });
    }, 2000);

    $('.hearts').animate({opacity: 0}, 0);
    $('.hearts').animate({top: '-=100vh'}, 0);
    $('.let').animate({opacity: 0}, 0);
    $('.let').animate({top: '-=100vh'}, 0);
    $('.PEACH').animate({opacity: 0}, 0);
    $('.NIROCH').animate({opacity: 0}, 0);
    $('.KARINA').animate({opacity: 0}, 0);
});

function animateLetters(who) {
    setTimeout(function() {
        var count = 0;
        var fontSize = 160;
        var toggle = true;
        var intervalId = setInterval(function() {
            if (count >= 0) {
                clearInterval(intervalId);
                $('.let').animate({opacity: 0}, 1000);
                $(who).animate({opacity: 1}, 1000);
            } else {
                if (toggle) {
                    $('.let').text('❤️'); 
                    $('.let').css('font-size', fontSize);
                } else {
                    $('.let').text('💌'); 
                }
                toggle = !toggle;
                count++;
                fontSize = fontSize - 15;
            }
        }, 500);
    }, 1000);
}


//Пича
$(document).ready(function() {
    $('.let').on('mousedown', function() {
        $(this).css('animation-play-state', 'paused');
        $(this).text('💌'); 
        $(this).css('font-size', '160px');
        animateLetters('.PEACH');
    });

    $('.button1').on('mousedown', function() {
        $('.button1').animate({top: '-=100vh'}, 1000, function(){});
        $('.button2, .button3').animate({top: '+=100vh'}, 1000, function() {
            $('.hearts').animate({top: 0}, 0);
            $('.hearts').animate({opacity: 1}, 200);
            $('.let').animate({top: '50vh'}, 0);   
            $('.let').animate({opacity: 1}, 200);
            $('.NIROCH').remove();
            $('.KARINA').remove();
        });
    });
});



//Нироч

$(document).ready(function() {
    $('.let').on('mousedown', function() {
        $(this).css('animation-play-state', 'paused');
        $(this).text('💌'); 
        $(this).css('font-size', '160px');
        animateLetters('.NIROCH');
    });

    $('.button2').on('mousedown', function() {
        $('.button1').animate({top: '-=100vh'}, 1000);
        $('.button2').animate({opacity: 0}, 500);
        $('.button2').animate({top: '-=100vh'}, 1000);
        $('.button3').animate({top: '+=100vh'}, 1000, function() {
            $('.hearts').animate({top: 0}, 0);
            $('.hearts').animate({opacity: 1}, 200);
            $('.let').animate({top: '50vh'}, 0);   
            $('.let').animate({opacity: 1}, 200);
            $('.PEACH').remove();
            $('.KARINA').remove();
        });
    });
});


//Карина

$(document).ready(function() {
    $('.let').on('mousedown', function() {
        $(this).css('animation-play-state', 'paused');
        $(this).text('💌'); 
        $(this).css('font-size', '160px');
        animateLetters('.KARINA');
    });

    $('.button3').on('mousedown', function() {
        $('.button3').animate({top: '+=100vh'}, 1000, function(){});
        $('.button1, .button2').animate({top: '-=100vh'}, 1000, function() {
            $('.hearts').animate({top: 0}, 0);
            $('.hearts').animate({opacity: 1}, 200);
            $('.let').animate({top: '50vh'}, 0);   
            $('.let').animate({opacity: 1}, 200);
            $('.PEACH').remove();
            $('.NIROCH').remove();
        });
    });
});


