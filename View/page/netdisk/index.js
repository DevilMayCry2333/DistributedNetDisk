var username;
window.json_user;

function showList(userJson){
  console.log(userJson.directory.length);
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
    // html+="<tr onclick='enter("+i+")'onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+userJson.directory[i].name+"'/></td><td>"+img+"<a>"+userJson.directory[i].name+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";

      html+="<tr onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+userJson.directory[i].name+"'/></td><td onclick='enter("+i+")'>"+img+"<a>"+userJson.directory[i].name+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";
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
    console.log(window.json_user.directory[c].name);

  if(window.json_user.directory[c].type=="dir"){
      if(window.curdir==""){
          window.curdir=window.json_user.directory[c].name;
      }
      else{
          window.curdir=window.curdir+'/'+window.json_user.directory[c].name;
      }
      //window.curdir=window.json_user.directory[c].name;
    //alert("进入目录");
    // 请求向后端请求当前目录
    console.log("进入目录，当前目录："+window.curdir);
    $.ajax({
      type:"GET",
      url:"https://hifafu.com/DistributedNetDisk/public/index.php/index/index/enterDir",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data:{
        "username":encodeURI(username),
        'curdir':encodeURI(window.curdir),
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
      console.log("点击文件下载当前文件夹："+window.curdir);
      $.ajax({
          type:"GET",
          url:"https://hifafu.com/DistributedNetDisk/public/index.php/index/FileDownloadCtl/download_file",
          contentType: "application/json; charset=utf-8",
          dataType: "json",

          data:{
              "username":encodeURI(username),
              "cnt":"1",
              'curdir':encodeURI(window.curdir),
              'userfile1':encodeURI(window.json_user.directory[c].name),
          },
          success:function (res) {

              console.log("Success" + res);
              //window.open(res);

          },complete:function (res) {
              console.log(res.responseText);
             // window.open(res.responseText);


          }
      });
  }

}

function getFile(type){
      if(type=="showDefault"){
      window.curdir="";
      }
    console.log("当前目录：/"+window.curdir);
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

        //alert(1);
        console.log("Success" + res);
        //showList(res);

    },complete:function (res) {

          //let json=JSON.parse(res.responseText);
          //console.log(json);
          console.log("Complete" + res);
          console.log(JSON.parse(res.responseText));
          showList(JSON.parse(res.responseText));
    }
});
}

function logout(){

  //$.removeCookie('usercookie',{ path: '/'});
  window.location.href='https://hifafu.com/DistributedNetDisk/public/static/View/page/login/index.html';

}

function fileUpload(){
    console.log("上传文件，当前目录:"+window.curdir);
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
              getFile("showDefault");
        }
    });


}

function download() {
    var checkedArr = [];
    $("input[class='checkbox']:checked").each(function() {
        checkedArr.push($(this).val());
    });
    var download_data = new FormData();
    for(var i=1;i<=checkedArr.length;i++){
        download_data.append('userfile'+i,encodeURI(checkedArr[i-1]));
        console.log(checkedArr[i-1]);
    }
    download_data.append("username",encodeURI(username));
    download_data.append("curdir", encodeURI(window.curdir));
    download_data.append('cnt',encodeURI(checkedArr.length));
    console.log(download_data.get('cnt'));
    $.ajax({
        type: 'POST',
        url: "https://hifafu.com/DistributedNetDisk/public/index.php/download_file",

        processData: false,
        contentType: false,
        data: download_data,


        success: function(res) {
           // window.open(res);
        },complete:function (res) {
            window.open(res.responseText);
        }
    })

}
function newFolder(){
  console.log("新建文件夹目录："+window.curdir);
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
        //alert('newFilder:'+res);
           console.log("新建文件夹请求成功返回："+res);
        getFile('showDefault');
      },
      complete:function(res){
           //console.log(window.curdir);
          console.log("新建文件夹请求完成返回："+res.responseText);
        //alert(res.responseText);
        getFile('showDefault');
      }

     })


     oLogin.remove();
     $("#new").removeAttr('disabled','disabled');
   })


}
$(document).ready(function(){
  console.log("$cookie:"+$.cookie('usercookie'));

  if($.cookie('usercookie')==null){
    alert("请先登录！");
    window.location.href='https://hifafu.com/DistributedNetDisk/public/static/View/page/login/index.html';
  }


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

