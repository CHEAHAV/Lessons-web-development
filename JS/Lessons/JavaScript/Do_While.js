document.addEventListener('DOMContentLoaded', function(){
    var arr = ["Apple", "Book", "Car"];
    var i = 0;
    do{
        alert(arr[i]);
        i++
    }while(i<arr.length);

    var object = {
        'Name' : "Chea hav",
        'Gender' : "Male",
        "Address" : "Kampot",
    };
    var j = 0;
    do{
        alert(object['Name']);
        j++
    }while(j<object.length);

    var arrObject = [
        {
            'Name' : "Coca",
            'Gender' : "Female",
            'Address' : "Phnom penh",
        },
        {
            'Name' : "Sting",
            'Gender' : "Male",
            "Address" : "Kep"
        },
        {
            'Name' : "Caraboa",
            'Gender' : "Female",
            'Address' : "Kampot",
        },
    ];
    var k = 0;
    do{
        alert(arrObject[k]['Address']);
        k++
    }while(k<arrObject.length);
})