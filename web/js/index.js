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
		if(username!="" && password!=""){
			$.ajax({
				type:"GET",
				url:"/login",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data:{
					"username":username,
					"password":password
				},
			});
		}
	});
});