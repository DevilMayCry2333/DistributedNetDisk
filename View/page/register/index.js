var userflag=0;
var passflag=0;
var checkflag=0;



$(document).ready(function(){


  $("#register").attr("disabled",true);

  $("#username").blur(function(){
    var username=$("#username").val();
    var reg1= /^1\d{10}$/;
    var reg2=/^(\w-*\.*)+@(\w-?)+(\.\w{2,4})+$/;
    if(username)
      if(!reg1.test(username) && !reg2.test(username)){
        $("#userspan").show();
        userflag=0;
        $("#register").attr("disabled",true);
      }
      else{
        $("#userspan").hide();
        userflag=1;
        if(passflag==1 && checkflag==1){
          $("#register").attr("disabled",false);
        }
      }
  });

  $("#password").blur(function(){
    var password=$("#password").val();
    var reg=/^\w{6,255}$/
    if(password)
      if(!reg.test(password)){
        $("#passspan").show();
        passflag=0;
        $("#register").attr("disabled",true);
      }
      else{
        $("#passspan").hide();
        passflag=1;
        if(userflag==1 && checkflag==1){
          $("#register").attr("disabled",false);
        }
      }
  });

  $("#check").blur(function(){
    var password=$("#password").val();
    var check=$("#check").val();
    if(check)
      if(password!=check){
        $("#checkspan").show();
        checkflag=0;
        $("#register").attr("disabled",true);
      }
      else{
        $("#checkspan").hide();
        checkflag=1;
        if(passflag==1 && userflag==1){
          $("#register").attr("disabled",false);
        }
      }
  });

  // $("#register").mouseenter(function(){
  //
  //   if (userflag==1 && passflag==1 && checkflag==1) {
  //     $('#register').removeAttr("disabled");
  //   }
  //   else{
  //     $('#register').removeAttr("disabled");
  //   }
  // });
})
