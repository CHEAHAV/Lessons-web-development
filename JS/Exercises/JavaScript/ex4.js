document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.container');
    var main = "";
    var item = [
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\ban10.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt1",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 150.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\batman.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt2",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 110.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\car.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt3",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 99.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\Ironman.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt4",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 157.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\monder momen.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt5",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 162.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\robb.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt6",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 92.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\spiderman.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt7",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 169.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
        {
            'picture' : "E:\\Study\\Web development\\Folder\\image\\Superman.jpg",
            'discriptions' : [
                {
                    'name' : "Shirt8",
                    'star' : "E:\\Study\\Web development\\Folder\\image\\rob.jpg",
                    'price' : "$ 97.99",
                    'increase' : "E:\\Study\\Web development\\Folder\\image\\aa.jpg"
                }
            ]
        },
    ]
    
    for(var i in item){
        var stor = `<img src="${item[i]['picture']}" alt="">`;
        var dis = item[i]['discriptions'];
        for(var j in dis){
            var name = "";
            var star = "";
            var price = "";
            var increase = "";
            name += dis[j]['name'];
            star += dis[j]['star'];
            price += dis[j]['price'];
            increase += dis[j]['increase'];
        }

        main += `
       <div class="category">
            <div class="pic">${stor}</div>
            <div class="dis">
                <div class="name"><h1>${name}</h1></div>
                <div class="star"><img src="${star}" alt=""></div>
                <div class="price"><h1>${price}</h1></div>
                <div class="increase"><img src="${increase}" alt=""></div>
            </div>
        </div>
    `;
    }
    container.innerHTML = main.valueOf(main);
});