let n = 1;
initLocation();
setInterval(() => {
  setLeave(getImg(n));
  setCurrent(getImg(n+1));
  setEnter(getImg(n+2));
  setStay(getImg(n+3));
  n += 1;
}, 2000);

// 以下是工具函数
function initLocation() {
  $('img:nth-child(1)').addClass('current');
}

function caculate(n) {
  if (n > 4) {
    n = n % 4;
    if (n === 0) {
      n = 4;
    }
  }
  return n;
}

function getImg(n) {
  return $('.images > img:nth-child(' + caculate(n) + ')')
}

function setCurrent($node) {
  return $node.removeClass('leave enter stay').addClass('current');
}
function setLeave($node) {
  return $node.removeClass('current enter stay').addClass('leave');
}
function setEnter($node) {
  return $node.removeClass('current leave stay').addClass('enter');
}
function setStay($node) {
  return $node.removeClass('current enter leave').addClass('stay');
}

