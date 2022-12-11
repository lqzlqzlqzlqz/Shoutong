

window.onload = function () {
    $(".banner").css("width", 100 * $('.banner li').length + "vw");
    $(".act").html(`
    <li class="active"></li>${"<li></li>".repeat($('.banner li').length - 1)}
    `);
    actLi();
    secondCardW($(document).width());
    $(window).resize(function(){
        secondCardW($(document).width());
    })
    
}
//first card
function actLi(){
    $('.act li').click(function(){
        $('.banner').animate({
            left : $('.banner').offset().left - $('.banner li').eq($(this).index()).offset().left
        });
        $(this).addClass('active').siblings().removeClass();
    });
}
//second card
function secondCardW(width){
    $(".second-card-container").length
    if(width >= 992) {
        $(".second-card-body").css("width",parseFloat($(".second-card-body .second-card-body-news").css("width")) * $(".second-card-body .second-card-body-news").length + parseFloat($(".second-card-body").css("gap")) * ($(".second-card-body .second-card-body-news").length - 1));
    }else{
        $(".second-card-body").css("width",(parseFloat($(".second-card-body .second-card-body-news").css("width")) * $(".second-card-body .second-card-body-news").length + parseFloat($(".second-card-body").css("gap")) * ($(".second-card-body .second-card-body-news").length - 1)) / 2);
    }
}
function prograss(perc){
    console.log(perc)
    $(".prograss").css("background",`linear-gradient(to right,#ff5f36 0%,#ff5f36 ${perc * 100 + "%"},#fff ${perc * 100 + "%"},#fff 100%)`);
    
}
// console.log($(".second-card-body .second-card-body-news").css("width"))
// console.log(parseFloat($(".second-card-body").css("gap")))

console.log($(".second-card-body-news").last().offset());

$(".second-card-container").on("scroll",function(){
    // console.log($(".second-card-container").offset().left + $(".second-card-container").width());
    // console.log($(".second-card-body-news").last().offset().left + $(".second-card-body-news").last().width());
    let perc = ($(".second-card-container").offset().left + $(".second-card-container").width()) / ($(".second-card-body-news").last().offset().left + $(".second-card-body-news").last().width());
    prograss(perc);
})




















