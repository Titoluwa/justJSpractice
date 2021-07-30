var minus, plus, display;
minus = "images/sub.png";
plus = "images/iadd.png";
display = $("#show");
// img = $(this).attr("title");

$("h3").click(function(){
    $(this).each(function(){
        if ($(this).find('.icon').attr('src') == plus){
            $(this).find('.icon').hide();
            $(this).next().slideDown(1000);
            $(this).find('.icon').attr('src', minus).fadeIn(1000);
            display.attr("src", $(this).attr("title")).fadeIn(100);
        } else{
            $(this).find('.icon').hide();
            $(this).next().slideUp(1000);
            $(this).find('.icon').attr('src', plus).fadeIn(1000);
            display.fadeOut(1000);
        }
    });
});
$("a").click(function(event) { 
    event.preventDefault();  
});
$("a").click(function(){
    $(this).each(function(){
        display.attr("src", $(this).attr("title")).fadeIn(1000);
    })
})
$("h1").click(function(){
    $("h1").animate({fontSize:'+=10px', left:"+=300" },1000);        
})