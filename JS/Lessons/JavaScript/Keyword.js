//var keyword
var id = 100;
var names = "Snoopy pro";
var score = 99.78;
var gender = 'M';

function id1(){
    document.getElementById('int').innerHTML = id;
}
function id2(){
    document.getElementById('int').innerHTML = '';
}
function name1(){
    document.getElementById('string').innerHTML = names;
}
function name2(){
    document.getElementById('string').innerHTML = '';
}
function score1(){
    document.getElementById('float').innerHTML = score;
}
function score2(){
    document.getElementById('float').innerHTML = '';
}
function gender1(){
    document.getElementById('char').innerHTML = gender;
}
function gender2(){
    document.getElementById('char').innerHTML = '';
}
function test1(){
    var a = 10;
    document.getElementById('demo').innerHTML = a;
}
function test2(){
    a = 10.55;
    document.getElementById('demo').innerHTML = a;
}
function clicks(){
    var b = 200;
    document.getElementById('number').value = b;
}
function calulate(){
    var m;
    var km;
    m = document.getElementById('txtmater').value;
    km = document.getElementById('txtkilo').value = m * 1000;
    document.getElementById('mater').innerHTML = m.valueOf(m);
    document.getElementById('kilomater').innerHTML = km.valueOf(km);
}