document.addEventListener('DOMContentLoaded', function(){
    const txt = document.querySelector('#txt');
    const show = document.querySelector('#show');
    const btnAdd = document.querySelector('#btnAdd');
    var arr = ["Apple","Book","Car"];
    var item = "";
    for(var i in arr){
        item += arr[i] + "<br>";
    }
    show.innerHTML = item;
    btnAdd.addEventListener('click', function(){
        item = "";
        arr.push(txt.value);
        for(i in arr){
        item += arr[i] + "<br>"
    }
    show.innerHTML = item;
    txt.value = "";
    });

})