require('./index.scss');

//获取屏幕宽度viewport
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取HTML的DOM
let htmlDom = document.getElementsByTagName('html')[0];

//设置HTML的fontsize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';