function test(){
   document.getElementById('one').innerHTML = 'Hello JavaScript';
   document.getElementById('one').style.color = 'green';
}
function hideBox(){
    document.getElementById('display').style.display = 'none';
}
function showBox(){
    document.getElementById('display').style.display = 'flex';
}
function chang(){
    document.getElementById('pic').setAttribute('src', 'E:\\Study\\Web development\\Folder\\image\\Ironman.jpg');
}
function changBack(){
    document.getElementById('pic').setAttribute('src', 'E:\\Study\\Web development\\Folder\\image\\batman.jpg')
}