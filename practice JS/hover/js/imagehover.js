$(document).ready(function(){
    $('#imagelist img').each(function(){
        var oldURL = $(this).attr('src');
        var newURL = $(this).attr('alt');
        $(this).mouseover(function(){
            $(this).attr('src', newURL);
        })
        $(this).mouseout(function(){
            $(this).attr('src', oldURL);
       })
    })
    //     $(this).hover(
    //         function(){
    //             $(this).attr('src', newURL);
    //         },
    //         function(){
    //             $(this).attr('src', oldURL);
    //         }
    //     )
    // })
});