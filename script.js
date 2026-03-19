const endDate = new Date("March 19, 2026 05:00:59").getTime();
const startDate = new Date().getTime();


const timer = setInterval(function updateTimer() {
   const now = new Date().getTime();
   const timecover = now - startDate;
   const timeleft = endDate - now;

   // calculating the time left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // displaying the time left
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // percentage of time passed
    const percentage = (timecover / (endDate - startDate)) * 100;

    document.getElementById("progress-bar").style.width = percentage + "%";

    if (timeleft < 0) {
        clearInterval(timer);
        document.getElementsByClassName("Countdown")[0].innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}
, 1000);