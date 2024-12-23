document.addEventListener('DOMContentLoaded', () => {
                //1
    // var a = 1;
    // document.getElementById('btncheck').addEventListener('click', ()=>{
    //     if(a == 1){
    //         document.getElementById('pass').type = 'text';
    //         a = 0;
    //     }
    //     else{
    //         document.getElementById('pass').type = 'password';
    //         a = 1;
    //     }
    // });
                //2
    // const txt = document.querySelector('#pass');
    // const btncheck = document.querySelector('#btncheck');
    // btncheck.addEventListener('click',function(){
    //     if(btncheck.value == 1){
    //         txt.type = 'text';
    //         btncheck.value = 0;
    //     }
    //     else{
    //         txt.type = "password";
    //         btncheck.value = 1;
    //     }
    // })
                //3
    const txt = document.querySelector('#pass');
    const btncheck = document.querySelector('#btncheck');
    btncheck.addEventListener('click', function () {
        if (btncheck.value == 1) {
            txt.setAttribute('type', 'text');
            btncheck.value = 0;
        }
        else {
            txt.setAttribute('type', 'password');
            btncheck.value = 1;
        }
    });
    const show = document.querySelector('.show');
    txt.addEventListener('keyup', ()=>{
        show.innerHTML = txt.value;
    })
});