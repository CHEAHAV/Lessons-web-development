document.addEventListener('DOMContentLoaded', function(){
    const big = document.querySelector('#big');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    one.addEventListener('click', ()=>{
        big.setAttribute('src','../../../image/batman.jpg')
    });
    two.addEventListener('click', ()=>{
        big.setAttribute('src','../../../image/Ironman.jpg')
    })
    three.addEventListener('click',()=>{
        big.src = '../../../image/spiderman.jpg';
    })
})