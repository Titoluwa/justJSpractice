// var $ = function(id){
//     return document.getElementById(id);
// }

// // JAVASCRIPT

// var imge = $('imagelist').getElementsByTagName("a");
// var imageNode = $("image");
// var caption = $("caption");
// var img;
// var view = function(){
//     for (var i = 0; i<imge.length; i++){
//         img = imge[i];
//         img.onclick = function(){
//             imageNode.src = this.firstChild.getAttribute('src');
//             caption.innerHTML = this.getAttribute('title');    
//         }
//     }
// }

//JQUERY
$('#imagelist a').click(
    function(){
        var img = $(this).find('img').attr('src');
        var imageNode = $("#image");
        var caption = $("#caption");
        // caption.fadeOut(1000);
        // $("#image").animate({left:"+=100"},500).animate({left:"-=100"},500);
        imageNode.fadeOut(700,
            function(){
                $(this).each(function(){
                    imageNode.attr('src', img).fadeIn(1000);
                    // caption.text($(this).attr('title')).fadeIn(2000);
                })
            }
        );
    }
);
$("#in").click(
    function(){
        $("#image").animate({width:"+=10%"},1000);
    }
);
$("#out").click(
    function(){
        $("#image").animate({width:"-=10%"},1000);
    }
);

// $('#imagelist a').click(
//     function(){
//         var img = $(this).find('img').attr('src');
//         var imageNode = $("#image");
//         imageNode.slideUp(1000,
//             function(){
//                 $(this).each(
//                     function(){
//                         imageNode.attr('src', img).slideDown(1000);
//                     }
//                 )
//             }
//         );
//     }
// );
