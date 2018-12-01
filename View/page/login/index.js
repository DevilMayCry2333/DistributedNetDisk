function userLogin(){


}
function register(){
	window.location.href="http://localhost/netDisk_View/DistributedNetDisk_backend/View/page/register/register.html"

}
$(document).ready(function(){
//	$.removeCookie('usercookie',{ path: '/'});
console.log($.cookie('usercookie'));
	$("#login").attr("disabled",true);
	$("#username").blur(function(){
		var username=$("#username").val();
		var reg1= /^1\d{10}$/;
		var reg2=/^(\w-*\.*)+@(\w-?)+(\.\w{2,4})+$/;
		if(username)
			if(!reg1.test(username) && !reg2.test(username)){
				$("#userspan").show().fadeOut(7000);
				$("#login").attr("disabled",true);
			}
			else{
				$("#userspan").hide();
				$("#login").attr("disabled",false);
			}
	});

})
