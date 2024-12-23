document.addEventListener('DOMContentLoaded', function () {

    const display = document.querySelector('#display');
    var arrayObject = [
        {
            'Subject': "HTML",
            'link': "https://www.w3schools.com/html/default.asp",
            'sub-menu': [
                {
                    'sub-subject': "HTML1",
                    'sub-link': "a",
                },
                {
                    'sub-subject': "HTML2",
                    'sub-link': "b",
                },
                {
                    'sub-subject': "HTML3",
                    'sub-link': "c",
                },
            ]
        },
        {
            'Subject': "CSS",
            'link': "https://www.w3schools.com/css/default.asp",
            'sub-menu': [
                {
                    'sub-subject': "CSS1",
                    'sub-link': "a",
                },
                {
                    'sub-subject': "CSS2",
                    'sub-link': "b",
                },
                {
                    'sub-subject': "CSS3",
                    'sub-link': "c",
                },
            ],
        },
        {
            'Subject': "JAVASCRIPT",
            'link': "https://www.w3schools.com/js/default.asp",
            'sub-menu': [
                {
                    'sub-subject': "JVASCRIPT1",
                    'sub-link': "a",
                },
                {
                    'sub-subject': "JVASCRIPT2",
                    'sub-link': "b",
                },
                {
                    'sub-subject': "JVASCRIPT3",
                    'sub-link': "c",
                },
            ],
        },
    ];
    var item = "";
    for (var i = 0; i < arrayObject.length; i++) {
        var data = arrayObject[i]['Subject'];
        var links = arrayObject[i]['link'];
        var subMenu = arrayObject[i]['sub-menu'];
        var sub = "";
        for (var j = 0; j < subMenu.length; j++) {
            var sub_subject = subMenu[j]['sub-subject'];
            var sub_link = subMenu[j]['sub-link'];
            sub += `
                <li>
                    <a href="${sub_link}">${sub_subject}</a>
                </li>
            `;
        }
        item += `
            <li>
                <a href="${links}">${data}</a>
                <div class="sub-menu">
                    <ul>
                        ${sub}
                    </ul>
                </div>
            </li>
        `;
    }
    display.innerHTML = item.valueOf(item);
});