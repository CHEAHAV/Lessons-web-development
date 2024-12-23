document.addEventListener('DOMContentLoaded', function () {

    const txt = document.querySelector('#txt');
    const btnAdd = document.querySelector('#btnAdd');
    const display = document.querySelector('#display');
    txt.focus();
    var arr = [""];
    var item = "";
    for (var i = 0; i < arr.length; i++) {
        item += "<li><a href=''>" + arr[i] + "</a></li>";
    }
    display.innerHTML = item.valueOf(item);
    btnAdd.addEventListener('click', () => {
        if (txt.value == "") {
            alert('Data is empty...!')
        }
        else {
            item = "";
            arr.push(txt.value);
            txt.focus();
            for (i in arr) {
                item += "<li><a href=''>" + arr[i] + "</a></li>";
            }
            display.innerHTML = item.valueOf(item);
            txt.value = "";
        }
    })
});