function digitalClock (){
    let dateFunction = new Date();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();
    let day = dateFunction.getDay();
   let timeFormat = "PM";


   timeFormat = hours >= 12 ? "PM" : "AM";

   hours = hours == 0 ? hours = 12 : hours;
   hours = hours > 12 ? hours - 12 : hours;
   hours = hours < 10 ? "0" + hours : hours;

   minutes = minutes < 10 ? "0" + minutes : minutes;

   seconds = seconds < 10 ? "0" + seconds : seconds;

document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds;
document.querySelector(".format").innerHTML = format;

let todaysDay = document.querySelector(".weekdays :nth-child(${day + 1})");
console.log(todaysDay);

todaysDay.classList.add("active");

}
setInterval(digitalClock, 1000)