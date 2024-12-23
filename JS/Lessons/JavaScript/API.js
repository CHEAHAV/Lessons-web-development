document.addEventListener('DOMContentLoaded', function () {
    var api = "https://fakestoreapi.com/products";
    var item = "";
    fetch(api).then(
        result => result.json())
        .then(
            Object => {
                function GetData() {
                    for (var i in Object) {
                        item += Object[i]['title'] + "<br>";
                    }
                    document.querySelector('body').innerHTML = item;
                }
                GetData();
            }
        )
})