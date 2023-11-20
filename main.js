function prayerGet(){
    let date_1 = new Date()
    let currentDate = new Date().toJSON().slice(0, 10).split("-");
    console.log(currentDate);
    fetch(`http://api.aladhan.com/v1/calendarByAddress/${currentDate[0]}/${currentDate[1]}?address=Riyadh, Saudi Arabia&method=2`)
        .then((response) => response.json())
        .then((data) => {console.log(data)
            // data.data.currentDate[2]
        });
}
function wather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=bf845020679bca905f832f19f904428a`)
        .then((response) => response.json())
        .then((data) => {console.log(data)

        });
}
prayerGet()
wather()