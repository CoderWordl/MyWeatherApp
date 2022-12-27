const btn = document.getElementById("btn");
const exampleInputEmail1 = document.getElementById("exampleInputEmail1");
const myError = document.getElementById("myError");

function getDayAndDate() {
    const date = new Date();

    const myArrDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "WednesDay",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const todaysDay = myArrDay[date.getDay()];
    console.log(todaysDay);

    newday.innerText = todaysDay + " ";

    const myarrMonth = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ]

    const assignIt = myarrMonth[date.getMonth()];

    // console.log(date.getDate());

    const singleVar = date.getDate() + " " + assignIt;
    newdate.innerText = singleVar;
}

getDayAndDate();

const getTheWeather = async (event) => {
    event.preventDefault();
    // alert("Hello World");

    if (exampleInputEmail1.value <= 1) {
        console.log("Please Select A Value");
        myError.style.display = "block";
        myError.innerText = "Please Select A Value Before Searching It!";

        mytemp.innerHTML = "0 <sup>O</sup>C";
        usercityname.innerText = "__";
        usercountryname.innerText = "__";
        
    } else {
        try {
            myError.style.display = "none";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${exampleInputEmail1.value}&appid=9ff58528435c87fa38fbbf34d662b0a5`;
            // console.log(url);

            const respData = await fetch(url);
            // console.log(respData);

            const mydata = await respData.json();
            // console.log(mydata);

            const arrData = [mydata];

            mytemp.innerHTML = `${Math.floor((arrData[0].main.temp - 273.15))} <sup>O</sup>C`;
            const ourTempStatus = arrData[0].weather[0].main;
            console.log(ourTempStatus);
            if (ourTempStatus == "Clear") {
                temp_status.innerHTML = "<i class=fa-thin fa-clouds-sun></i>";
            }
            if (ourTempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fa-regular fa-clouds-moon' style='color: BDB453;'></i>";
            }
            else if (ourTempStatus == "Wind") {
                temp_status.innerHTML = "<i class='fa-sharp fa-solid fa-wind' style='color: BDB453;'></i>";
            }
            else if (ourTempStatus == "Rainy") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-water' style='color: BDB453;'></i>";
            }
            else if (ourTempStatus == "Sunny") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: BDB453;'></i>";
            }

            usercityname.innerText = arrData[0].name;
            usercountryname.innerText = arrData[0].sys.country;
        }
        catch (error) {
            myError.style.display = "block";
            myError.innerText = "Please Select A Proper City!!!";

            mytemp.innerHTML = "0 <sup>O</sup>C";
            usercityname.innerText = "__";
            usercountryname.innerText = "__";
        }
    }
}

btn.addEventListener("click", getTheWeather);

// completion of whole app