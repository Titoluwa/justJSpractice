// var $ = function(id){
//     return document.getElementById(id);
// }
// var opened = setInterval(
//     function(){
//         $("disclaimer").style.display = "none";
//         // clearTimeout(opened); optional here
//     }, 3000);

//   //JAVASCRIPT

// var questions = $("faq").getElementsByTagName('h2');
// var question;
// var plus ="images/add.png";
// var minus = "images/substract.png";
// var show = function(){
//     for (var i = 0; i < questions.length; i++ ) {
//         question = questions[i];
//         question.onclick = function() {
//             if (this.firstChild.getAttribute("src") == minus){
//                 this.nextElementSibling.setAttribute("class", "close");
//                 this.firstChild.setAttribute("src", plus);
//             }
//             else {
//                 this.nextElementSibling.setAttribute("class", "open");
//                 this.firstChild.setAttribute('src', minus);
//             }
//             // if (this.nextElementSibling.getAttribute("class") == 'close'){
//             //     this.nextElementSibling.setAttribute("class", "open");
//             // }
//             // else {
//             //     this.nextElementSibling.setAttribute("class", 'close')
//             // }
//         }
//     }  
// }

//Jquery
var minus, plus;
minus = "images/substract.png";
plus = "images/add.png";
$("h2").click(function(){
    $(this).each(function(){
//     $(this).next().toggle(); //this  or line 44 and 47 together
        if ($(this).find('img').attr('src') == plus){
            $(this).next().slideDown(500);
            $(this).find('img').attr('src', minus);
        } else{
            $(this).next().slideUp(500);
            $(this).find('img').attr('src', plus);
        }
    });
});