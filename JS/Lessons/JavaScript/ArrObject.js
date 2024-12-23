document.addEventListener('DOMContentLoaded', function () {
    //Object
    var object = {
        'Name': "CHEAHAV",
        'Gender': "Male",
        'Address': "Kampot",
    };
    alert(object['Gender']);
    //ArrayObject
    var arrayObject = [
        { 'Subject': "HTML" },
        { 'Subject': "CSS" },
        { 'Subject': "JAVASCRIPT" },
    ]
    alert(arrayObject[0]['Subject']);
    var item = "";
    for(var i = 0; i<arrayObject.length; i++){
        item += arrayObject[i]['Subject'] + "<br>";
    }
    document.querySelector('body').innerHTML = item;
});