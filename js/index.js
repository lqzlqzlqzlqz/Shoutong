

window.onload = function () {
    $(".banner").css("width", 100 * $('.banner li').length + "vw");
    $(".act").html(`
    <li class="active"></li>${"<li></li>".repeat($('.banner li').length - 1)}
    `);
    actLi();
    $(".banner2").css("width", 100 * $('.banner2 li').length + "vw");
    $(".act2").html(`
    <li class="active2"></li>${"<li></li>".repeat($('.banner2 li').length - 1)}
    `);
    actLi2();
    swit();
    prograss();
    secondCardW($(document).width());
    $(window).resize(function(){
        $(".second-card-body").css("left",0);
        secondCardW($(document).width());
        prograss();
        swit();
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
function actLi2(){
    $('.act2 li').click(function(){
        $('.banner2').animate({
            left : $('.banner2').offset().left - $('.banner2 li').eq($(this).index()).offset().left
        });
        $(this).addClass('active2').siblings().removeClass();
    });
}
//second card
function secondCardW(width){
    let gap;
    if(width < 992) {
        gap = ($(".third-card-container").width() - $(".second-card-body .second-card-body-news").width() * 2) - 10;
    }else if(width >= 992 && width < 1200) {
        gap = 134 / 3;
    }else {
        gap = ($(".third-card-container").width() - $(".second-card-body .second-card-body-news").width() * 4) / 3;
    }
    $(".second-card-body").css("gap",gap);
    if(width >= 992) {
        $(".second-card-body").css("width",parseFloat($(".second-card-body .second-card-body-news").css("width")) * $(".second-card-body .second-card-body-news").length + gap * ($(".second-card-body .second-card-body-news").length - 1));
    }else{
        $(".second-card-body").css("width",(parseFloat($(".second-card-body .second-card-body-news").css("width")) * $(".second-card-body .second-card-body-news").length + gap * ($(".second-card-body .second-card-body-news").length - 1)) / 2);
    }
    $(".second-card-container").css("height",$(".second-card-body").height() + 57);
}
function prograss(){
    let all = $(".second-card-body-news").length;
    let number = all - offsetL().length + 4;
    let perc = number / all;
    $(".switch .count").html(`<span>${number}</span> / ${all}`);
    $(".prograss").css("background",`linear-gradient(to right,#ff5f36 0%,#ff5f36 ${perc * 100 + "%"},#fff ${perc * 100 + "%"},#fff 100%)`);
    
}
// console.log($(".second-card-body .second-card-body-news").css("width"))
// console.log(parseFloat($(".second-card-body").css("gap")))

console.log($(".second-card-body-news").last().offset());

$(".second-card-container").on("scroll",function(){
    // console.log($(".second-card-container").offset().left + $(".second-card-container").width());
    // console.log($(".second-card-body-news").last().offset().left + $(".second-card-body-news").last().width());
    
    prograss();
})

function swit(){
    let all = $(".second-card-body-news").length;
    $(".switch-button .forward").click(throttle(function(){
        let gap = parseFloat($(".second-card-body").css("gap"));
        let pos = $(".second-card-body").css("left");

        $(".second-card-container").offset().left
        $(".second-card-body").offset().left
        // console.log($(".second-card-container").offset().left + $(".second-card-container").width(),$(".second-card-body").offset().left + $(".second-card-body").width())
        if(offsetL().length === 4) return;
        $(".second-card-body").animate({
            left : parseFloat(pos) - $(".second-card-body-news").width() - gap + "px"
        },300, 'swing',prograss)
    }))
    $(".switch-button .back").click(throttle(function(){
        let gap = parseFloat($(".second-card-body").css("gap"));
        let pos = $(".second-card-body").css("left");
        if(offsetL().length === all) return;

        $(".second-card-body").animate({
            left : parseFloat(pos) + $(".second-card-body-news").width() + gap + "px"
        }, 300, 'swing',prograss)
    }))
}
function offsetL() {
    let arl = $(".second-card-body-news").filter((i,v) => {
        return $(v).offset().left > 0
    });
    return arl;
}

//防抖
function debounce(fn){
    var timerID=null
    return function(){
    var arg=arguments[0]   //获取事件
    if(timerID){
    clearTimeout (timerID)
    }
    timerID=setTimeout( function(){
    fn(arg)              //事件传入函数
    },1000)
    }
    }
//  $(document).on('wheel',debounce(move))      //本次以鼠标滑动事件为例

function throttle(fn){
    var timerId=null
    return function(){
    var arg=arguments[0]  //获取事件
    if(timerId){return}
    timerId=setTimeout( function(){
    fn(arg)             //事件传入函数
    timerId=null
    },300)
    }
    }














