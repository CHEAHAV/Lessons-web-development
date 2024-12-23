document.addEventListener('DOMContentLoaded', function(){
    var arr = ["Apple", "Book", "Car"];
    var i = 0;
    while(i<arr.length){
        alert(arr[i]);
        i++
    };
//can't use while loop with object
    var object = {
        'Name' : "Chea hav",
        'Gender' : "Male",
        "Address" : "Kampot",
    };
    var j = 0;
    while(j<object.length){
        alert(object['Name']);
        j++
    }

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
    while(k<arrObject.length){
        alert(arrObject[k]['Name']);
        k++
    };

});