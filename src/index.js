$(function () {
    //using Promise

    //     $("#login").click(function(){
    // // function validate() {
    //     // alert("validate");
    //     var promise1 = new Promise(function (resolve, reject) {
    //         let userid = $("#userid").val();
    //         let password = $("#password").val();
    //         console.log(userid,password);
    //         if (userid === "admin" && password === "12345") {
    //             resolve();
    //         }
    //         else{
    //             reject();
    //         }
    //     });
    //     // var result=await promise1;
    //     promise1
    //     .then(function(){$("#frm1").submit();})
    //     .catch(function(){$("#error").html("Sorry!! Authentication Invalid!!");});
    // });

    //using callback

    function redirect() {
        $("#frm1").submit();
    }
    $("#login").click(function(){validate($("#userid").val(),$("#password").val(),redirect)});
    function validate(userid,password,func) {
        let id = userid;
        let pwd = password;
        console.log(id, pwd);
        if (userid === "admin" && password === "12345") {
            func();
        }
        else {
            $("#error").html("Sorry!! Authentication Invalid!!");
        }
    }
});