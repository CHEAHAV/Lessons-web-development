document.addEventListener('DOMContentLoaded',function(){

const display = document.querySelector('#display');
var arr = ["Home", "About", "Product"];
var item = "";
for(var i = 0; i < arr.length; i++){
    item += "<li><a href=''>"+arr[i]+"</a></li>";
}
display.innerHTML = item.valueOf(item);
});