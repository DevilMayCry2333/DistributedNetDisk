$(document).ready(function(){

	$("#login").click(function(){
		//alert("Hello Jquery!");
		var username=$("#username").val();
		var password=$("#password").val();
		if(username==""){
			$("#br1").replaceWith("<p id='p1'>Username is null!</p>");
		}
		else{
			$("#p1").replaceWith("<br id='br1'>");
		}
		if(password==""){
			$("#br2").replaceWith("<p id='p2'>Password is null!</p>");
		}
		else{
			$("#p2").replaceWith("<br id='br2'>");
		}

        // window.location.href = "http://localhost/DistributedNetDisk/public/index.php?s=index/LoginController/login&username=" + username + "&password=" +password ;

		alert("123");

		/*
		因为框架原因，暂时只能用GET，等开启PATHINFO后才可以用POST
		 */
			$.ajax({
				type:"GET",
				url:"http://localhost/DistributedNetDisk/public/index.php?s=index/LoginController/login",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data:{
					"username":username,
					"password":password
				},
				success:function (res) {
					console.log("Success" + res);
					if(res=="OK"){
                        alert("Login Success!");
                        window.location.href = "http://localhost/DistributedNetDisk/public/static/login/page/netdisk";

					}


					
                },complete:function (res) {

                    console.log("Complete" + res.responseText);

                    if(res.responseText=="OK"){
                        window.location.href = "http://localhost/DistributedNetDisk/public/static/login/page/netdisk";

                    }else {
                        alert("用户名或者密码错误");
                    }


                }
			});
	});
});