var xhr = new XMLHttpRequest();
// 上传进度
if (xhr.upload) {
  xhr.upload.addEventListener(
    'progress',
    function (event) {
      log.innerHTML =
        '正在上传，进度：' +
        Math.round((100 * event.loaded) / event.total) / 100 +
        '%';
    },
    false
  );
}
// 上传结束
xhr.onload = function () {
  var responseText = xhr.responseText;
  log.innerHTML = '上传成功，地址是：' + responseText;
};
xhr.onerror = function () {
  log.innerHTML = '<span style="color:red;">网络异常，上传失败</span>';
};
xhr.open('POST', './upload.php', true);
xhr.setRequestHeader('FILENAME', encodeURIComponent(file.name));
xhr.send(file);

/*
function sendAjax() {
  //构造表单数据
  var formData = new FormData();
  formData.append('username', 'johndoe');
  formData.append('id', 123456);
  //创建xhr对象
  var xhr = new XMLHttpRequest();
  //设置xhr请求的超时时间
  xhr.timeout = 3000;
  //设置响应返回的数据格式
  xhr.responseType = "text";
  //创建一个 post 请求，采用异步
  xhr.open('POST', '/server', true);
  //注册相关事件回调处理函数
  xhr.onload = function(e) {
    if(this.status == 200||this.status == 304){
        alert(this.responseText);
    }
  };
  xhr.ontimeout = function(e) { ... };
  xhr.onerror = function(e) { ... };
  xhr.upload.onprogress = function(e) { ... };

  //发送数据
  xhr.send(formData);
}



*/
