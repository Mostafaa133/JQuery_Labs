var interval = setInterval(function() {
    $('.slides > li:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slides');
        
    
    }, 3000);
    $('#stop').click(function() {
        clearInterval(interval);
    });
