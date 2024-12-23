document.addEventListener('DOMContentLoaded', function(){
    var api = "https://fakestoreapi.com/products";
    var item = "";
    async function Getdata() {
        var data = await fetch(api);
        var result = await data.json();
        for(var i in result){
            item += `
                <img src="${result[i]['image']}" alt="">
            `;
        }
        document.querySelector('body').innerHTML = item;
    }
    Getdata();

})