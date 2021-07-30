// var $ = function(id){
//     return document.getElementById(id);
// }
// var imgs = $('setup').getElementsByTagName("img");
// var eachimage, image;
// var imagecache = [];
// for (var i = 0; i<imgs.length; i++){
//     eachimage = imgs[i];
//     image = new Image();
//     image.src = eachimage.getAttribute('src');
//     image.title = eachimage.getAttribute('title');
//     imagecache.push(image);
// }
// var imgcount = 0;
// var show = setInterval( 
//     function(){
//         imgcount = (imgcount + 1) % imagecache.length;
//         image = imagecache[imgcount];
//         $("imagedisplay").src = image.src;
//         $("imgcaption").innerHTML = image.title;
//     }, 3000);

//JQUERY
$(function(){
    var image, imagecache = [];
    $("#setup img:first-child").each(function(){
        image = new Image();
        image.src = $(this).attr('src');
        image.title = $(this).attr('title');
        imagecache.push(image);
    });
    var imgcount = 0;
    var eachimage;
    var slides = function(){
        $("#imagedisplay").fadeOut(1000);
        $("#imgcaption").fadeOut(1000,
            function(){
                imgcount = (imgcount + 1) % imagecache.length;
                eachimage = imagecache[imgcount];
                $("#imagedisplay").attr('src',eachimage.src).fadeIn(1000);
                $("#imgcaption").text(eachimage.title).fadeIn(1000);
            }
        );
    }
    var show = setInterval(slides, 4000);
    $("#imagedisplay").click(
        function(){
            // alert("Seen");
            clearInterval(show);
        }
        // function(){
        //     show = setInterval(slides, 4000);
        // }
    //    function(){
    //        $("#imagedisplay").toggle(
    //            function(){
    //                clearInterval(show);
    //             },
    //             function(){
    //                 show = setInterval(slides, 4000);
    //             }
    //         )
    //     }
    )   
})

// $(document).ready(function(){
//     var setup = $("#setup img");
//     var eachcaption, eachslide;

//     // $("#setup img:first-child").each(function(){
//     //     image = new Image();
//     //     image.src = $(this).attr('src');
//     //     image.title = $(this).attr('title');
//     //     imagecache.push(image);
//     // });
//     // var imgcount = 0;
//     // var eachimage;
//     var slides = function(){
//         $("#imgcaption").fadeOut(1000);
//         $("#imagedisplay").fadeOut(1000,
//             function(){
//                 if (setup.length == 0){
//                     setup = $("#setup img");
//                 } else {
//                     setup = setup.next();
//                 }
//                 eachslide = setup.attr('src');
//                 eachcaption = setup.attr('title');
//                 $("#imagedisplay").attr('src', eachslide).fadeIn(1000);
//                 $("#imgcaption").text(eachcaption).fadeIn(1000);
//             }
//         );
//     }
//     var show = setInterval(slides, 4000);
//     $("#imagedisplay").click(
//         function(){
//             alert(setup.length);
//             clearInterval(show);
//         }
//     )   
// })