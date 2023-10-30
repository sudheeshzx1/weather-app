const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = "aa157a0e867ed40588472539009f8c0f" ;
const searchIcon=document.querySelector(".btn");
const inputValue=document.querySelector(".inputt");




const CheckWeatherData = async (city)=> {
    const res = await fetch(Apiurl+ city + `&appid=${apikey}`)
    var data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = data.main.temp + "  °" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity  ;
    document.querySelector(".wind").innerHTML = data.wind.speed;



}

searchIcon.addEventListener("click", ()=>{
    CheckWeatherData (inputValue.value)
})



    

