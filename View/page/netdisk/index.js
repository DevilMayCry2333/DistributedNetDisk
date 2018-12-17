<<<<<<< HEAD
var username;
window.json_user;
var userdir="";
var userJson;
function showList(userJson){
  window.json_user=userJson;
=======

//var json_uersfile={
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
var json_uersfile={};
var userdir="";
var userJson;
function showList(userJson){
>>>>>>> master
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
<<<<<<< HEAD
    html+="<tr onclick='enter("+i+")'onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+i+"'/></td><td>"+img+"<a>"+userJson.directory[i].name+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";


    }
    $(".tbody").html(html);
=======
    html+="<tr onclick='enter("+i+")'onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+i+"'/></td><td>"+img+"<a>"+userJson.directory[i].name+userJson.directory[i].extension+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";

    $(".tbody").html(html);
    }
>>>>>>> master
  //console.log(html);
  let pageNum=userJson.pageNum;

  let pageControl = "<a class='a_page' id='previous' href='#'>上一页</a>";
<<<<<<< HEAD

=======
  // for(let j=1;j<=pageNum;j++){
  //   pageControl+="<a class='a_page' href='"+j+"'>"+j+"</a>";
  //
  // }
>>>>>>> master
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
<<<<<<< HEAD
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
=======
  if(userJson.directory[c].type=="dir"){
    alert("进入目录");
    // 请求向后端请求当前目录
>>>>>>> master
  }
  else{
    //调用当前文件的下载
  }

}

<<<<<<< HEAD
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
  // var files = $('#file').prop('files');
  //   var data = new FormData();
  //   data.append("file",$("#file")[0].files[0])
  //   data.append("username",username);
  //   data.append("curdir", window.curdir);
  //   $.ajax({
  //         type: 'POST',
  //         url: "https://hifafu.com/DistributedNetDisk/public/index.php/upload",
  //         data: data,
  //         cache: false,
  //         processData: false,
  //         contentType: false,
  //         success: function(res) {
  //                 alert(res);
  //                 getFile("showDefault");
  //
  //     },complete:function (res) {
  //             console.log(res.responseText);
  //       }
  //   });
  //
    var fileForm = document.getElementById("file");
    var upload = new Upload();

        upload.addFileAndSend(fileForm);


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

=======
function getPic(){
    alert(1);
    $.ajax({
    type:"GET",
    url:"http://172.29.66.141/DistributedNetDisk/public/index.php?s=index/index/showPic",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data:{
      "username":"awei",
    },
    success:function (res) {
        console.log(res);

        json_uersfile=res;
        showList(res);

    },complete:function (res) {

        console.log("Complete" + res.responseText);

    }
  });
}

$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:"http://localhost/DistributedNetDisk/public/index.php?s=index/index/showDefault",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data:{
      "username":"awei",
    },
    success:function (res) {
        console.log("Success" + res);
        showList(res);

    },complete:function (res) {

        console.log("Complete" + res.responseText);

    }
});

  // userJson=json_uersfile;
  // var f1=json_uersfile;
  // showList(f1);
>>>>>>> master
  $("#control_checkbox").on("click", function(){
    if($(this).is(":checked")){
      allCheck();
    }else {
      allNoCheck();
    }

  });



<<<<<<< HEAD
});

function Upload(){
    var xhr = new XMLHttpRequest();
    var form_data = new FormData();
    const LENGTH = 1024 * 1024;
    var start = 0;
    var end = start + LENGTH;
    var blob;
    var blob_num = 1;
    var is_stop = 0
    //对外方法，传入文件对象
    this.addFileAndSend = function(that){
        var file = that.files[0];
        blob = cutFile(file);
        sendFile(blob,file);
        blob_num += 1;
    }
    //停止文件上传
    this.stop = function(){
        xhr.abort();
        is_stop = 1;
    }
    //切割文件
    function cutFile(file){
        var file_blob = file.slice(start,end);
        start = end;
        end = start + LENGTH;
        return file_blob;
    };
    //发送文件
    function sendFile(blob,file){
        var total_blob_num = Math.ceil(file.size *1.0/ LENGTH);

        // alert(total_blob_num);
        // alert(blob_num);
        form_data.append('file',blob);
        form_data.append('blob_num',blob_num);
        form_data.append('total_blob_num',total_blob_num);
        form_data.append('file_name',file.name);
        form_data.append('filesize',file.size);
        xhr.open('POST','https://hifafu.com/DistributedNetDisk/public/static/View/page/WebUploader/NetFileUpload.php',false);
        xhr.onreadystatechange = function () {
            var progress;
            var progressObj = document.getElementById('finish');
            if(total_blob_num == 1){
                progress = '100%';
            }else{
                progress = Math.min(100,(blob_num/total_blob_num)* 100 ) +'%';
                if(Math.min(100,(blob_num/total_blob_num)* 100) === 100){
                    alert("完成");
                    alert("下载地址: https://hifafu.com/DistributedNetDisk/public/static/View/page/WebUploader/upload/" + file.name);
                }
            }
            // progressObj.style.width = progress;
            var t = setTimeout(function(){
                if(start < file.size && is_stop === 0){
                    blob = cutFile(file);
                    sendFile(blob,file);
                    blob_num += 1;
                }else{
                    setTimeout(t);
                }
            },1000);
        }
        xhr.send(form_data);
    }
}

=======


  //
>>>>>>> master








<<<<<<< HEAD
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
=======



})
>>>>>>> master
