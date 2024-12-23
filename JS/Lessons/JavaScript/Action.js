
document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const stb = document.querySelector('.switch-toggle-btn');
    const btn = document.querySelector('.btn');
    var chang = 1;
    btn.addEventListener('click', function () {
        if (chang == 1) {
            btn.style.transform = 'translateX(250px)';
            btn.style.backgroundColor = 'red';
            stb.style.backgroundColor = 'green';
            body.style.backgroundColor = 'violet';
            chang = 0;
        }
        else{
            btn.style.transform = 'translateX(0px)';
            btn.style.backgroundColor = 'wheat';
            stb.style.backgroundColor = 'cyan';
            body.style.backgroundColor = 'brown';
            chang = 1;
        }
    });
});