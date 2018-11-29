function regist(){
  alert( $("#name").val());
  alert( $("#password").val());
  $.ajax({
      url:"http://localhost/DistributedNetDisk/public/index.php/index/register/regist",
      Type:'POST',
      data:{
        username:$("#name").val(),
        password:$("#password").val(),

      },
      success:function(res){
          alert(res);
      }

  });

}
