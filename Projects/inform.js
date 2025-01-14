document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    var iheader = `
        <div class="title">
                <h1 id="a">ព្រះរាជាណាចក្រកម្ពុជា</h1>
                <h1 id="b">ជាតិ សាសានា ព្រះមហាក្សត្រ</h1>
                <img id="c" src="../Projects/image/1.png" alt="">
                <h1 id="d">ប្រវត្តិរូបសង្ខេប</h1>
            </div>
            <div class="img">
                <img id="photos" src="../Projects/image/sunset.jpg" alt="">
            </div>
    `;
    var icontainer = `
        <h1><strong></strong><strong></strong>នាមត្រកូល.នាមខ្លួន<strong>អ៊ិត ជាហាវ</strong>ភេទ<strong>ប្រុស</strong>ជនជាតិ<strong>ខ្មែរ</strong>សញ្ជាតិ<strong>ខ្មែរ</strong>កើតថ្ងៃទី<strong>១៩</strong>ខែ<strong>គុម្ភៈ</strong>ឆ្នាំ<strong>២០០៤</strong>
            </h1>
            <h1><strong></strong><strong></strong>ទីកន្លែងកំណើត<strong>
                </strong>ភូមិ<strong>អូរច្រនៀង</strong>ឃុំ/សង្កាត់<strong>កំពង់ត្រាចខាងលិច</strong>ស្រុក/ខណ្ឌ<strong>កំពង់ត្រាច</strong>ខេត្ត/ក្រុង<strong>កំពត</strong>
            </h1>
            <h1><strong></strong><strong></strong>កម្រិតវប្បធម៌សិក្សា<strong></strong><strong>មធ្យមសិក្សាទុតិយភូមិ</strong>និង<strong>បរិញ្ញាបត្រព័ត៌មានវិទ្យា</strong>ចំណេះដឹងភាសាបរទេស<strong>អង់គ្លេស</strong>
            </h1>
            <h1><strong></strong><strong></strong>ស្ថានភាពគ្រួសារ<strong>នៅលីវ</strong>ជំនាញផ្សេងៗ<strong>អ្នកអភិវឌ្ឍកម្មវិធី</strong>
            </h1>
            <h1><strong></strong><strong></strong>ឳពុកឈ្មោះ<strong>អ៊ិត គ្រន</strong>អាយុ<strong>៤៥</strong>មុខរបរ<strong>កសិករ</strong>
            </h1>
            <h1><strong></strong><strong></strong>ម្ដាយឈ្មោះ<strong>ភូ សោភ័ណ្ឌ</strong>អាយុ<strong>៤៤</strong>មុខរបរ<strong>កសិករ</strong>
            </h1>
            <h1><strong></strong><strong></strong>អាស័យដ្ឋានបច្ចុប្បន្ន<strong></strong>ផ្ទះលេខ<strong>៤៩១</strong>ក្រុមទី<strong>១៤</strong>ភូមិ<strong>ភ្នាត</strong>សង្កាត់<strong>ស្ទឹងមានជ័យទី២</strong>ខណ្ឌ<strong>មានជ័យ</strong>រាជធានី<strong>ភ្នំពេញ</strong>
            </h1>
            <h1><strong></strong><strong></strong>លេខទូរស័ព្ទ ៖<strong></strong><strong>០៨៨ ៧១០ ៣២០ ៥ / ០៩៩ ៩២០ ១៦៤</strong>អ៊ីម៉ែល<strong>Cheahav7171@gmail.com</strong></h1>
            <h1><strong></strong><strong></strong>ខ្ញុំបាទ/នាងខ្ញុំ សូមធានាទទួលខុសត្រូវចំពោះមុខច្បាប់ថា ព័ត៌ខាងលើ
                និងឯកសារភ្ជាប់ទាំងអស់ពិតជាត្រឹមត្រូវពិតប្រាកដមែន។</h1>
    `;
    var ifooter = `
        <h1>ធ្វើនៅ<strong>រាជធានីភ្នំពេញ</strong>ថ្ងៃទី<strong>២៤</strong>ខែ<strong>ធ្នូ</strong>ឆ្នាំ<strong>២០២៤</strong>
            </h1>
            <h1 id="name">ឈ្មោះសាមីខ្លួន</h1>
            <h1><strong id="names">អ៊ិត ជាហាវ</strong></h1>
    `;
    header.innerHTML = iheader;
    container.innerHTML = icontainer;
    footer.innerHTML = ifooter;

    //English
    const eheader = document.querySelector('.eheader');
    const econtainer = document.querySelector('.econtainer');
    const efooter = document.querySelector('.efooter');
    var ieheader = `
        
            <div class="title">
                <h1 id="a">Kingdom of Cambodia</h1>
                <h1 id="b">Nation Religion King</h1>
                <img id="c" src="../Projects/image/1.png" alt="">
                <h1 id="d">Resume</h1>
            </div>
            <div class="img">
                <img id="photos" src="../Projects/image/sunset.jpg" alt="">
            </div>
        
    `;
    var iecontainer = `
        
            <h1><strong></strong><strong></strong>Name<strong>IT CHEAHAV</strong>Gender<strong>Male</strong>Ethnicity<strong>Khmer</strong>Nationality<strong>Khmer</strong>Date
                of birth<strong>19</strong><strong>Febroary</strong><strong>2004</strong>
            </h1>
            <h1><strong></strong><strong></strong>Place of
                birth<strong></strong><strong>AouChrorneang</strong>Village<strong>KampongTrack khang
                    lech</strong>Commune<strong>KampongTrac</strong>District<strong>Kampot</strong>Province
            </h1>
            <h1><strong></strong><strong></strong>Academic level<strong></strong><strong>Secondary school(BAL
                    12)</strong>and<strong>Bachelor of Information Technology</strong>Foreign language
                knowledge<strong>English</strong>
            </h1>
            <h1><strong></strong><strong></strong>Family situation<strong>Single</strong>Other skills<strong>App developer</strong>
            </h1>
            <h1><strong></strong><strong></strong>Father's name<strong>IT KRORN</strong>Old<strong>45</strong>Career<strong>Farmer</strong>
            </h1>
            <h1><strong></strong><strong></strong>Mother's name<strong>POU SOU PORN</strong>Old<strong>44</strong>Career<strong>Farmer</strong>
            </h1>
            <h1><strong></strong><strong></strong>Current address<strong></strong>Home
                number<strong>491</strong>Group<strong>14</strong><strong>Pneat</strong>Village<strong>SterngMeanChaiti2</strong>Commune<strong>MeaChai</strong>District<strong>Pnhom
                    Penh</strong>
            </h1>
            <h1><strong></strong><strong></strong>Phone number ៖<strong></strong><strong>088 710 320 5 / 099 920 164</strong>E-mail<strong>Cheahav7171@gmail.com</strong></h1>
            <h1><strong></strong><strong></strong>I hereby certify under legal responsibility that the above information
                and all attached documents are true and correct.</h1>
        
    `;
    var iefooter = `
        
            <h1><strong>Pnhom Penh</strong><strong>24</strong><strong>December</strong><strong>2024</strong>
            </h1>
            <h1 id="name">Sincerenly</h1>
            <h1><strong id="names">IT CHEAHAV</strong></h1>
        
    `;
    eheader.innerHTML = ieheader;
    econtainer.innerHTML = iecontainer;
    efooter.innerHTML = iefooter;
})