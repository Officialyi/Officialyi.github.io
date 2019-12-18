$(".mobile-menu").click(function(){
    
    $('#header nav ul').toggleClass('show');
    
});


var navOffset = $('#history').offset().top;

$(window).scroll(function(){
    
    var scrollPos = $(window).scrollTop();
    
        if(scrollPos > navOffset){
        
        $('nav').addClass('dark-background');
        
        } else {
        
        $('nav').removeClass('dark-background');
        }
    
});

console.log(navOffset);