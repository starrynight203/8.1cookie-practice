// var $ = require('jquery');
console.log('nom nom nom');

document.cookie="username=Cookie Monster";
document.cookie="likes-cookies=yes";

var loggedInUser = document.cookie;
console.log(loggedInUser);

var cookies = loggedInUser.split(';');
for (var i=0; i < cookies.length; i++){
  console.log(cookies[i]);
}

console.log($.cookie('username'));
$.cookie('username', 'smith');
console.log($.cookie('username'));
