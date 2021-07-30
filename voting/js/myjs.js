showdate = function(){
    var today = new Date();
        document.write("Today; ");
        document.write(today.toDateString());
}
//JAVASCRIPT VALIDATION

// var $ = function (id){
//     return document.getElementById(id);
// }
// var info = function(){
//     $('passwd-terms').innerHTML = "Must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter.";
// }

// var checkp = function(){
//     var passwd2 = $("confirmpasswd").value;
//     var passwd = $("passwd").value;
//     if (passwd2 != passwd) {
//         $('confirmpasswd-error').innerHTML = "Password NOT is the same"; 
//         $("confirmpasswd-error").style.color = 'red';
//         $('regbutton').disabled = true;
//     } 
//      else if (passwd2 == passwd) {
//         $('confirmpasswd-error').innerHTML = "Password is the same";
//         $("confirmpasswd-error").style.color = 'green';
//         $('regbutton').disabled = false;
//     }
// }

//JQUERY VALIDATION

$("#passwd").focus(function(){ 
    $("#passwd-terms").text("Must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter.");}
)
// $("#passwd").blur(function(){ 
//     $("#passwd-terms").text("Required");}
// )
var checkj = function(){
    var passwd1 = $("#passwd").val();
    var passwd2 = $("#confirmpasswd").val();
    if (passwd1 != passwd2){
        $('#confirmpasswd-error').text("Password NOT is the same");
        $('#confirmpasswd-error').css("color", "red");
    } else{
        $('#confirmpasswd-error').text("Password IS the same");
        $('#confirmpasswd-error').css("color", "green");
    }
}