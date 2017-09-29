function showTime() {
  var date = new Date();
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var time = hour + ':' + minute + '.' + second;
  var hexColor = '#' + hour + minute + second;

  if(hour.length < 2) {
    minute = '0' + minute;
  }

  if(minute.length < 2) {
    hour = '0' + hour;
  }

  if(second.length < 2) {
    second = '0' + second;
  }

  document.getElementById('time').innerText = time;
  document.getElementById('hex-color').textContent = hexColor;

  document.body.style.backgroundColor = hexColor;
}

setInterval(showTime, 1000);