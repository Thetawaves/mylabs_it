$(document).ready(function () {
    $(window).resize(function () {
        var bubbleWidth = $('#courses .bubble').width();
        $('#courses .bubble').css({
            height: bubbleWidth
        });
    });
    
    var bioHeight = $('#bio #descr').height();
    function changeBioHeight () {
        $('#bio #thumb').css({
            height: bioHeight
        })
    };
    changeBioHeight();
})