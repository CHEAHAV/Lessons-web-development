document.addEventListener('DOMContentLoaded', function(){
var obj = ["Apple", "Book", "Car"];
        alert(obj);
        alert(obj[1]);
        for(var i = 0; i < obj.length; i++){
            alert(obj[i]);
        }
    const display = document.querySelector('#display');
    var item = "";
    for(var a = 0; a < obj.length; a++){
        item += obj[a] + "<br>";
        display.innerHTML = item;
    }
});