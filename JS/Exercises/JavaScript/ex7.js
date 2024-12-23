document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('#display');
    const txtid = document.querySelector('#txtid');
    const txtname = document.querySelector('#txtname');
    const txtgender = document.querySelector('#txtgender');
    const txtaddress = document.querySelector('#txtaddress');
    const filephotos = document.querySelector('#filephotos');
    const btnadd = document.querySelector('#btnadd');
    var header = document.querySelector('#header');
    header = `
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Photos</th>
             `;
    txtid.focus();
    var arrObject = [
        {
            'id': "1",
            'name': "Coca",
            'gender': "Male",
            'address': "Kampot",
            'photos': "../../../image/ban10.jpg",
        },
    ];
    var item = "";
    for (var i in arrObject) {
        item += `
            <tr>
                <td id="tdid">${arrObject[i]['id']}</td>
                <td id="tdname">${arrObject[i]['name']}</td>
                <td id="tdgender">${arrObject[i]['gender']}</td>
                <td id="tdaddress">${arrObject[i]['address']}</td>
                <td id="tdphotos"><img src="${arrObject[i]['photos']}" alt=""></td>
            </tr>
        `;
    };
    display.innerHTML = header + item;
    var storimage = "";
    filephotos.addEventListener('change', function () {
        const file = this.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            storimage += reader.result;
        });
        reader.readAsDataURL(file);
    })

    btnadd.addEventListener('click', function () {

        if (txtid.value == "") {
            alert('Id is empty...!');
        }
        else if (txtname == "") {
            alert('Name is empty...!');
        }
        else if (txtgender == "") {
            alert('Gender is empty...!');
        }
        else if (txtaddress == "") {
            alert('Address is empty...!');
        }
        else if (storimage == "") {
            alert('Photos is empty...!');
        }
        else {
            txtid.focus();
            item = "";
            arrObject.push({
                'id': txtid.value,
                'name': txtname.value,
                'gender': txtgender.value,
                'address': txtaddress.value,
                'photos': storimage.valueOf(storimage),
            })
            for (i in arrObject) {
                item += `
                    <tr>
                        <td id="tdid">${arrObject[i]['id']}</td>
                        <td id="tdname">${arrObject[i]['name']}</td>
                        <td id="tdgender">${arrObject[i]['gender']}</td>
                        <td id="tdaddress">${arrObject[i]['address']}</td>
                        <td id="tdphotos"><img src="${arrObject[i]['photos']}" alt=""></td>
                    </tr>
                     `;
            }
            display.innerHTML = header + item;
            txtid.value = "";
            txtname.value = "";
            txtgender.value = "";
            txtaddress.value = "";
            filephotos.value = "";
        }
    });
});