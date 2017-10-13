$(document).ready(function () {
    
    var switcher = true;
    var wWidth = $(window).width();
    
    //// Change height of Courses' Cards' Bubbles depending on window width////
    
    var bubbleWidth = $('.flex .card .bubble').width();
    $('.flex .card .bubble').css({
        height: bubbleWidth
    });
    
    $(window).resize(function () {
        var bubbleWidth = $('.flex .card .bubble').width();
        $('.flex .card .bubble').css({
            height: bubbleWidth
        });
        wWidth = $(window).width();
    });
    
    //// Side menu slide in/out ////
    
    $('#side-menu #burger-wrap').on('click',function () {
        if (switcher === true) {
            $('#side-menu').animate({
                right: 0
            }, 500);
            $('#side-menu #burger-wrap #top').addClass('toprotate');
            $('#side-menu #burger-wrap #mid').fadeOut(100);
            $('#side-menu #burger-wrap #bot').addClass('botrotate');
            $('#side-menu #burger-wrap').animate({
                left: '20px'
            }, 500);
            switcher = false
        } else {
            $('#side-menu').animate({
                right: '-300px'
            }, 500);
            $('#side-menu #burger-wrap #top').removeClass('toprotate');
            $('#side-menu #burger-wrap #mid').fadeIn(500);
            $('#side-menu #burger-wrap #bot').removeClass('botrotate');
            $('#side-menu #burger-wrap').animate({
                left: '-80px'
            }, 500);
            switcher = true
        }
        
    });
    
    $('#side-menu ul li a').on('click', function () {
        $('#side-menu').animate({
            right: '-300px'
        }, 500);
        $('#side-menu #burger-wrap #top').removeClass('toprotate');
        $('#side-menu #burger-wrap #mid').fadeIn(500);
        $('#side-menu #burger-wrap #bot').removeClass('botrotate');
        $('#side-menu #burger-wrap').animate({
            left: '-80px'
        }, 500);
        switcher = true
    });
    
    //// Scroll to section ////
    
    $('a.scroll').on('click', function (e) {     
        e.preventDefault();
        var position = $($(this).attr('href')).offset().top;
        if (wWidth <= 800) {
            $('html, body').animate({scrollTop: position}, 500);
	   } else {
            $('html, body').animate({scrollTop: position - 150}, 500);
       }
    });
    
    //// Link Courses Cards to sub-pages ////
    
    $('#courses .flex .card').on('click', function () {
        var location = $(this).attr('id');
        window.location.href = "pages/corsi.html?" + location;
    })
    
    //// Up/Back Arrow rotation on scroll ////
    
    var goBack = true;
    
    $(window).on('scroll', function () {
        if (this.pageYOffset > 50) {
            $('#change-page #back img').css({
                transform: 'rotate(90deg)'
            });
            goBack = false;
        } else {
            goBack = true;
            $('#change-page #back img').css({
                transform: 'rotate(0)'
            });
        };
    });
    
    //// Back Button function ////
    
    $('#change-page #back').on('click', function () {
        if (goBack === true) {
            window.location.href = "/";
        } else {
            $('html,body').animate({scrollTop: 0}, 500);
        }
       
    });
    
    //// Ajax Loader ////
    
    var ajax = ['hocusandlotus', 'englishtogether', 'scribbleart', 'scrittura', 'altri'];
    
    if (location.search) {
        pageLocation = location.search.slice(1);
        $('#content-loader').load(pageLocation + ".html");
        $('#content-loader').slideDown();
    };
    
    var iPage = ajax.indexOf(pageLocation);
                                                  
    function changePage() {
        $('#content-loader').slideUp(500, function () {
            $('#content-loader').empty().load(ajax[iPage] + '.html', function () {
                $('#content-loader').slideDown(500);
            })
        });
    };
    
    $('#change-page #next').on('click', function () {
        if (iPage < ajax.length-1) {
            $('html,body').animate({scrollTop: 0}, 500);
            iPage++;
            changePage();
        } else if (iPage === ajax.length-1) {
            $('html,body').animate({scrollTop: 0}, 500);
            iPage = 0;
            changePage();
        };
    });
    
    $('#change-page #prev').on('click', function () {
        if (iPage > 0) {
            $('html,body').animate({scrollTop: 0}, 500);
            iPage--;
            changePage();
        } else if (iPage === 0) {
            $('html,body').animate({scrollTop: 0}, 500);
            iPage = ajax.length-1;
            changePage();
        };
    });
    
    //// Change page text hover ////
    
    $('#change-page #prev, #change-page #next').mouseenter(function () {
        $(this).find('p').fadeIn(200);
    }).mouseleave(function () {
        $(this).find('p').fadeOut(300);
    });
    
    
    $('#change-page #back').on('mouseenter', function () {
        if (goBack) {
            $('#change-page #back p:nth-child(1)').fadeIn();
            $('#change-page #back p:nth-child(2)').hide();
        } else {
            $('#change-page #back p:nth-child(1)').hide();
            $('#change-page #back p:nth-child(2)').fadeIn();
        }
    }).mouseleave(function () {
        $(this).find('p').fadeOut(300);
    });
    
    
})