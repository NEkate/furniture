jQuery(function($) {
    var carousel= $('#carousel');
    carousel
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;

    carousel.on('jcarousel:scroll', function(){
        var index = carousel.jcarousel('target').prop('index');
        carousel
            .find('.pagination a')
            .removeClass('active')
            .eq(index)
            .addClass('active')
        ;

    });

    carousel.find('li').prop('index', function (i) {
        return i;
    });

    carousel.on('click', '.pagination a', function (e) {
        e.preventDefault();

        var index = $(e.target).index();

        carousel.jcarousel('scroll', index);
    });

    var width = carousel.width();

    $('<style>')
        .html('.carousel-width { width:' + width + 'px; }')
        .appendTo('body')
    ;


});