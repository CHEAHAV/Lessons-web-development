document.addEventListener('DOMContentLoaded', function(){
    var arr = ["Apple", "Book", "Car"];
    for(var i in arr){
        alert(arr[i]);
    };
    var object = {
        'Name' : "Chea hav",
        'Gender' : "Male",
        "Address" : "Kampot",
    };
    for(var j in object){
        alert(object[j]);
    };
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
    for(var k in arrObject){
        alert(arrObject[k]['Name']);
    }
})