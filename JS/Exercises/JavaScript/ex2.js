document.addEventListener('DOMContentLoaded',function(){

const display = document.querySelector('#display');
var arrayObject = [
    { 'Subject': "HTML",'link': "https://www.w3schools.com/html/default.asp"},
    { 'Subject': "CSS", 'link': "https://www.w3schools.com/css/default.asp" },
    { 'Subject': "JAVASCRIPT", 'link': "https://www.w3schools.com/js/default.asp" },
]
var item = "";
for(var i = 0; i < arrayObject.length; i++){
    item += "<li><a href='" +arrayObject[i]['link']+ "'>"+arrayObject[i]['Subject']+"</a></li>";
}
display.innerHTML = item.valueOf(item);
});