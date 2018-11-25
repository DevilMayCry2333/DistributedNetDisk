
var json_uersfile={
  "username":"awei",
  "pageNum":1,
  "pageid":1,
  "directory":[
    {
      "name":"NewFolder",
      "type":"dir",
      "extension":"",
      "size":"-",
      "date":"2018-8-19 20:16:59"

    },
    {
      "name":"Movies",
      "type":"dir",
      "extension":"",
      "size":"-",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"THe Hell Song",
      "type":"mus",
      "extension":".mp3",
      "size":"2.5M",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"逃学威龙",
      "type":"mov",
      "extension":".avi",
      "size":"465.5M",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"readme",
      "type":"doc",
      "extension":".txt",
      "size":"1.5K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"springMVC",
      "type":"com",
      "extension":".rar",
      "size":"54.6K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"springMVC",
      "type":"com",
      "extension":".rar",
      "size":"54.6K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"springMVC",
      "type":"com",
      "extension":".rar",
      "size":"54.6K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"springMVC",
      "type":"com",
      "extension":".rar",
      "size":"54.6K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
    {
      "name":"spring",
      "type":"pic",
      "extension":".png",
      "size":"54.6K",
      "crc":"",
      "date":"2018-8-19 20:16:59"
    },
  ],

};
var userJson;
function showList(userJson){
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
    html+="<tr onclick='enter("+i+")'onmouseover='mouseover("+i+")'  onmouseout='mouseout("+i+")'id='row"+i+"'><td><input class='checkbox' type='checkbox' value='"+i+"'/></td><td>"+img+"<a>"+userJson.directory[i].name+userJson.directory[i].extension+"</a>"+"</td>"+"<td >"+userJson.directory[i].size+"</td><td>"+userJson.directory[i].date+"</td></tr>";

    $(".tbody").html(html);
    }
  console.log(html);
  let pageNum=userJson.pageNum;

  let pageControl = "<a class='a_page' id='previous' href='#'>上一页</a>";
  // for(let j=1;j<=pageNum;j++){
  //   pageControl+="<a class='a_page' href='"+j+"'>"+j+"</a>";
  //
  // }
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
  if(userJson.directory[c].type=="dir"){
    alert("进入目录");
    // 请求向后端请求当前目录
  }
  else{
    //调用当前文件的下载
  }

}
$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:"http://localhost/DistributedNetDisk/public/index.php?s=index/index/showpage",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data:{
    },
    success:function (res) {
        console.log("Success" + res);

    },complete:function (res) {

        console.log("Complete" + res.responseText);

    }
});

  userJson=json_uersfile;
  var f1=json_uersfile;
  showList(f1);
  $("#control_checkbox").on("click", function(){
    if($(this).is(":checked")){
      allCheck();
    }else {
      allNoCheck();
    }

  });





  //











})
