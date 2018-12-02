var username;
window.json_user;
var userdir="";
var userJson;
function showList(userJson){
  window.json_user=userJson;
  var html="";
  for(let i=0;i<userJson.directory.length;i++){
    var img="";
    if(userJson.directory[i].type=="dir"){
      img="<image src=../../image/folder.png class='img'/>";
    }
    else if(userJson.directory[i].type=="pic"){
      img="<image src=../../image/pic.png class='img'/>";
    }
    else if(userJson.directory[i].type=="mus"){
      img="<image src=../../image/mus.png class='img'/>";
    }
    else if(userJson.directory[i].type=="mov"){
      img="<image src=../../image/mov.png class='img'/>";
    }
    else if(userJson.directory[i].type=="doc"){
      img="<image src=../../image/doc.png class='img'/>";
    }
    else if(userJson.directory[i].type=="com"){
      img="<image src=../../image/com.png class='img'/>";
    }
    else{
      img="<image src=../../image/file.png class='img'/>";
    }
    html+="<tr onclick='enter("+i+")'onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+i+"'/></td><td>"+img+"<a>"+userJson.directory[i].name+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";


    }
    $(".tbody").html(html);
  //console.log(html);
  let pageNum=userJson.pageNum;

  let pageControl = "<a class='a_page' id='previous' href='#'>上一页</a>";

    pageControl+="<a class='a_page' id='next' href='##'>下一页</a>";
    pageControl+="<span>当前页数："+userJson.pageid+"/"+pageNum+"</span>";
    $("#pages").html(pageControl);
}


function allCheck(){
  $(".checkbox").each(function(){
    $(this).prop('checked',true);
  });
}
function allNoCheck(){
  $(".checkbox").each(function(){
    $(this).prop('checked',false);
  })
}


function mouseover(c){
  let row = "#row"+c;
  $(row).css("background","#eff4f8");

}

function mouseout(c){
  let row = "#row"+c;
  $(row).css("background","white");

}
function enter(c){
  window.curdir=window.json_user.directory[c].name;
  if(window.json_user.directory[c].type=="dir"){
    alert("进入目录");
    // 请求向后端请求当前目录
    console.log(window.json_user.directory[c].name);
    $.ajax({
      type:"GET",
      url:"https://hifafu.com/DistributedNetDisk/public/index.php/index/index/enterDir",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data:{
        "username":username,
        'curdir':window.curdir,
      },
      success:function (res) {

          console.log("Success" + res);
          showList(res);

      },complete:function (res) {
        //let json=JSON.parse(res.responseText);
        //console.log(json);
       console.log("Complete" + res.responseText);

      }
  });
  }
  else{
    //调用当前文件的下载
  }

}

function getFile(type){
  $.ajax({
    type:"GET",
    url:"https://hifafu.com/DistributedNetDisk/public/index.php/index/index/"+type,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data:{
      "username":username,
      'curdir':window.curdir,
    },
    success:function (res) {

        console.log("Success" + res);
        showList(res);

    },complete:function (res) {
      //let json=JSON.parse(res.responseText);
      //console.log(json);
     console.log("Complete" + res.responseText);

    }
});
}

function logout(){

  //$.removeCookie('usercookie',{ path: '/'});
  window.location.href='https://hifafu.com/DistributedNetDisk/public/static/View/page/login/index.html';

}

function fileUpload(){
  var files = $('#file').prop('files');
    var data = new FormData();
    data.append("file",$("#file")[0].files[0])
    data.append("username",username);
    data.append("curdir", window.curdir);
    $.ajax({
          type: 'POST',
          url: "https://hifafu.com/DistributedNetDisk/public/index.php/upload",
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function(res) {
                  alert(res);
                  getFile("showDefault");

      },complete:function (res) {
              console.log(res.responseText);
        }
    });


}
function newFolder(){
  console.log(window.curdir);
  // var oDiv=$('<div>');
   // $('body').append(oDiv);
   $("#new").attr('disabled','disabled');
   var oLogin=$('<div id="newdiv"><span style="font-size:1.8rem;">新建文件夹:<input type="text" id="folderName"/></span><button id="submit" class="btn btn-primary" style="background-color:#3b8cff;border-color:#3b8cff">新建文件夹</button><button class="btn" id="close">关闭</button>');//此功能就相当于body中注释的代码

   $('body').append(oLogin);

       oLogin.css('position','absolute');
       oLogin.css('left','50rem');
       oLogin.css('top','10rem');

       $("#folderName").css('position','absolute');
       $("#folderName").css('left','-40rem');
       $("#folderName").css('top','0rem');
       $("#folderName").css('z-index','1000');
       $("#submit").css('position','absolute');
       $("#submit").css('left','10rem');
       $("#submit").css('top','5rem');
       $("#submit").css('z-index','1000');
       $("#close").css('position','absolute');
       $("#close").css('left','23rem');
       $("#close").css('top','5rem');
       $("#close").css('z-index','1000');
        oLogin.css('z-index','999');
        oLogin.css('background','white');
        oLogin.css('width','30%');
        oLogin.css('height','10rem');
        oLogin.css('border-radius','1rem');
        oLogin.css('opacity','0.75');

   $("#close").click(function(){

    oLogin.remove();
     $("#new").removeAttr('disabled','disabled');
   })
   $("#submit").click(function(){

     $.ajax({
       type:"GET",
       url:"https://hifafu.com/DistributedNetDisk/public/index.php/index/NewFolder/newFolder",
       contentType: "application/json; charset=utf-8",
       dataType: "json",
       data:{
         "username":username,
         "curdir":  window.curdir,
         "newFolder":$("#folderName").val()
       },
       success:function(res) {
        alert('newFilder:'+res);
        getFile('showDefault');
      },
      complete:function(res){
           console.log(window.curdir);
        alert(res.responseText);
        getFile('showDefault');
      }

     })


     oLogin.remove();
     $("#new").removeAttr('disabled','disabled');
   })


}
$(document).ready(function(){
  console.log("$cookie:"+$.cookie('usercookie'));

  // if($.cookie('usercookie')==null){
  //   alert("请先登录！");
  //   window.location.href='https://hifafu.com/DistributedNetDisk/public/static/View/page/login/index.html';
  // }


  window.username=$.cookie('usercookie');
  window.curdir="";
  $("#username").html(username);
  //console.log(window.username);
  getFile('showDefault');

  $("#control_checkbox").on("click", function(){
    if($(this).is(":checked")){
      allCheck();
    }else {
      allNoCheck();
    }

  });



});











// var json_uersfile={
//   "username":"awei",
//   "pageNum":1,
//   "pageid":1,
//   "directory":[
//     {
//       "name":"NewFolder",
//       "type":"dir",
//       "extension":"",
//       "size":"-",
//       "date":"2018-8-19 20:16:59"
//
//     },
//     {
//       "name":"Movies",
//       "type":"dir",
//       "extension":"",
//       "size":"-",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"THe Hell Song",
//       "type":"mus",
//       "extension":".mp3",
//       "size":"2.5M",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"逃学威龙",
//       "type":"mov",
//       "extension":".avi",
//       "size":"465.5M",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"readme",
//       "type":"doc",
//       "extension":".txt",
//       "size":"1.5K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"springMVC",
//       "type":"com",
//       "extension":".rar",
//       "size":"54.6K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"springMVC",
//       "type":"com",
//       "extension":".rar",
//       "size":"54.6K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"springMVC",
//       "type":"com",
//       "extension":".rar",
//       "size":"54.6K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"springMVC",
//       "type":"com",
//       "extension":".rar",
//       "size":"54.6K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//     {
//       "name":"spring",
//       "type":"pic",
//       "extension":".png",
//       "size":"54.6K",
//       "crc":"",
//       "date":"2018-8-19 20:16:59"
//     },
//   ],
//
// };
