document.addEventListener('DOMContentLoaded', function () {
    //English
    const header = document.querySelector('.header');
    const schedule = document.querySelector('#schedule');
    const footer = document.querySelector('.footer');
    var iheader = "";
    var ishedule = "";
    var ifooter = "";

    var arrheader = [{
        'title': "Schedule for my day",
        'image': "../Project/image/me.jpg",
        'name': "Name : Chhum lyna",
    }
    ];
    var arrschedule = [{
        'time': " 7:00AM - 4:00PM",
        'mon': "Work",
        'tus': "Work",
        'wen': "Work",
        'thu': "Work",
        'fri': "Work",
        'sat': "Work",
        'sun': "Break",
    },
    {
        'time': " 5:30PM - 7:00PM",
        'mon': "Applied Statistice",
        'tus': "Information System Analysis",
        'wen': "Computer Network I",
        'thu': ".Net programming",
        'fri': "Applied Statistice",
        'sat': "At home",
        'sun': "At home",
    },
    {
        'time': " 7:15PM - 8:30PM",
        'mon': "Information System Analysis",
        'tus': "Computer Network I",
        'wen': "Front-End Web Dev",
        'thu': ".Net programming",
        'fri': "Front-End Web Dev",
        'sat': "At home",
        'sun': "At home",
    },
    {
        'time': " 9:30PM - 11:30PM",
        'mon': "Practise ",
        'tus': "Information System Analysis",
        'wen': "Computer Network I",
        'thu': ".Net programming",
        'fri': "Applied Statistice",
        'sat': "At home",
        'sun': "At home",
    }
    ];
    var data = `
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuseday</th>
                    <th>Wendesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
`;
    var arrfooter = [
        {
            'date': "Monday 21 December 2024",
            'me': "Chhum Lyna",
        }
    ];

    for (var i in arrheader) {
        iheader += `
                <div id="title">
                <h1>${arrheader[i]['title']}</h1>
                </div>
                <img id="image" src="${arrheader[i]['image']}" alt="">
                <h1 id="name">${arrheader[i]['name']}</h1>
        `;
    };
    header.innerHTML = iheader;

    for (var j in arrschedule) {
        ishedule += `
                <tr>
                    <td>${arrschedule[j]['time']}</td>
                    <td>${arrschedule[j]['mon']}</td>
                    <td>${arrschedule[j]['tus']}</td>
                    <td>${arrschedule[j]['wen']}</td>
                    <td>${arrschedule[j]['thu']}</td>
                    <td>${arrschedule[j]['fri']}</td>
                    <td>${arrschedule[j]['sat']}</td>
                    <td>${arrschedule[j]['sun']}</td>
                </tr>
        `;
    };
    schedule.innerHTML = data + ishedule;

    for (var k in arrfooter) {
        ifooter += `
            <div>
                <h1 id="date">${arrfooter[k]['date']}</h1>
            </div>
            <div>
                <h1 id="me">${arrfooter[k]['me']}</h1>
            </div>

        `;
    };
    footer.innerHTML = ifooter;
    //Khmer
    const kheader = document.querySelector('.kheader');
    const kschedule = document.querySelector('#kschedule');
    const kfooter = document.querySelector('.kfooter');
    var ikheader = "";
    var ikshedule = "";
    var ikfooter = "";

    var arrkheader = [{
        'title': "កាលវិភាគប្រចាំថ្ងៃរបស់ខ្ញុំ",
        'image': "../Project/image/me.jpg",
        'name': "ឈ្មោះ ៖ ឈុំ លីណា",
    }
    ];
    var arrkschedule = [{
        'time': " 7:00ព្រឹក - 4:00ល្ងាច",
        'mon': "ធ្វើការ",
        'tus': "ធ្វើការ",
        'wen': "ធ្វើការ",
        'thu': "ធ្វើការ",
        'fri': "ធ្វើការ",
        'sat': "ធ្វើការ",
        'sun': "សម្រាក",
    },
    {
        'time': " 5:30ល្ងាច - 7:00ល្ងាច",
        'mon': "Applied",
        'tus': "Information System Analysis",
        'wen': "Computer Network I",
        'thu': ".Net programming",
        'fri': "Applied Statistice",
        'sat': "នៅផ្ទះ",
        'sun': "នៅផ្ទះ",
    },
    {
        'time': " 7:15ល្ងាច - 8:30ល្ងាច",
        'mon': "Information System Analysis",
        'tus': "Computer Network I",
        'wen': "Front-End Web Dev",
        'thu': ".Net programming",
        'fri': "Front-End Web Dev",
        'sat': "នៅផ្ទះ",
        'sun': "នៅផ្ទះ",
    },
    {
        'time': " 9:30ល្ងាច - 11:30ល្ងាច",
        'mon': "ធ្វើកិច្ចការផ្ទះ",
        'tus': "ធ្វើកិច្ចការសាលា",
        'wen': "Computer Network I",
        'thu': ".Net programming",
        'fri': "Applied Statistice",
        'sat': "នៅផ្ទះ",
        'sun': "នៅផ្ទះ",
    }
    ];
    var kdata = `
                <tr>
                    <th>ម៉ោង</th>
                    <th>ថ្ងៃច័ន្ទ</th>
                    <th>ថ្ងៃអង្គារ</th>
                    <th>ថ្ងៃពុធ</th>
                    <th>ថ្ងៃព្រហស្បតិ៍</th>
                    <th>ថ្ងៃសុក្រ</th>
                    <th>ថ្ងៃសៅរ៍</th>
                    <th>ថ្ងៃអាទិត្យ</th>
                </tr>
`;
    var arrkfooter = [
        {
            'date': "ថ្ងៃច័ន្ទ ទី២១ ខែធ្នូ ឆ្នាំ២០២៤",
            'me': "ឈុំ លីណា",
        }
    ];

    for (var a in arrkheader) {
        ikheader += `
                <div id="title">
                <h1>${arrkheader[a]['title']}</h1>
                </div>
                <img id="image" src="${arrkheader[a]['image']}" alt="">
                <h1 id="name">${arrkheader[a]['name']}</h1>
        `;
    };
    kheader.innerHTML = ikheader;

    for (var b in arrkschedule) {
        ikshedule += `
                <tr>
                    <td>${arrkschedule[b]['time']}</td>
                    <td>${arrkschedule[b]['mon']}</td>
                    <td>${arrkschedule[b]['tus']}</td>
                    <td>${arrkschedule[b]['wen']}</td>
                    <td>${arrkschedule[b]['thu']}</td>
                    <td>${arrkschedule[b]['fri']}</td>
                    <td>${arrkschedule[b]['sat']}</td>
                    <td>${arrkschedule[b]['sun']}</td>
                </tr>
        `;
    };
    kschedule.innerHTML = kdata + ikshedule;

    for (var c in arrkfooter) {
        ikfooter += `
            <div>
                <h1 id="date">${arrkfooter[c]['date']}</h1>
            </div>
            <div>
                <h1 id="me">${arrkfooter[c]['me']}</h1>
            </div>

        `;
    };
    kfooter.innerHTML = ikfooter;

})