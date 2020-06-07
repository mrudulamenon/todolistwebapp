$(function(){
    $("#login").click(function(){
// function validate() {
    // alert("validate");
    var promise1 = new Promise(function (resolve, reject) {
        let userid = $("#userid").val();
        let password = $("#password").val();
        console.log(userid,password);
        if (userid === "admin" && password === "12345") {
            resolve();
        }
        else{
            reject();
        }
    });
    // var result=await promise1;
    promise1
    .then(function(){$("#frm1").submit();})
    .catch(function(){$("#error").html("Sorry!! Authentication Invalid!!");});
});
});