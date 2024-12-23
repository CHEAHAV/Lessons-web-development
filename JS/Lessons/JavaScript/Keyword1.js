document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn1').addEventListener('click', function(){
        let a = 10;
            a = 20;
           alert(a); // alert a = 20 becouse we asign new value to a
    });
});
//function() = ()=>
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn2').addEventListener('click',()=>{
        const b = 10;
       //we can not asign new value to b becouse it variable const
       alert(b);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    //use onclick function
    document.getElementById('btn3').onclick = function() {
        var name = "Hello javascript";
        alert(name);
    };
});