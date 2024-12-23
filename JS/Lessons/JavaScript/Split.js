document.addEventListener('DOMContentLoaded', function(){
    var color = "Red Blue Black Cyan";
    var item = color.split(" ");
    for(var i in item ){
        alert(item[i]);
    }
    var image = "ban10.jpg,batman.jpg,Ironman.jpg,";
    var display = image.split(",");
    var show = "";
    for(var j in display){
        show += `
            <img src="E:\\Study\\Web development\\Folder\\image\\${display[j]}" alt="">
        `;
    }
    document.querySelector('body').innerHTML = show;
})