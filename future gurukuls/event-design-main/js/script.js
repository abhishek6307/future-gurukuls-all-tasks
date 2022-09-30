

// Set the date we're counting down to
var countDownDate = new Date("Sep 22, 2022 06:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days ;
  document.getElementById("demo1").innerHTML =  hours ;
  document.getElementById("demo2").innerHTML = minutes;
  document.getElementById("demo3").innerHTML = 
  seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// toggle menu 

function myFunction() {
  var x = document.getElementById("topic-heading");
  var y  = document.getElementById("topic-content");

    x.innerHTML = "Intro With Robotics & IOT";
    y.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, vel rhoncus eros eros sit amet ipsum. Cras cursus pellentesque tortor, vitae efficitur nisi laoreet in. Suspendisse libero erat, aliquet eu maximus ac, dignissim vitae ex. Nam vel euismod risus, tempor venenatis nunc.";

}
function myFunction1() {
  var x = document.getElementById("topic-heading");
  var y = document.getElementById("topic-content");

    x.innerHTML = "Intro With Programming Language";
    y.innerHTML = "ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, vel rhoncus eros eros sit amet ipsum. Cras cursus pellentesque tortor, vitae efficitur nisi laoreet in. Suspendisse libero erat,  Lorem ipsum dolor sitit, vel rhoncus eros eros sit amet ipsum. Cras cursus pellentesque tortor, vitae efficitur nisi laoreet in. Suspendisse libero erat,  Lorem ipsum dolor sitit, vel rhoncus eros eros sit amet ipsum. Cras cursus pellentesque tortor, vitae efficitur nisi laoreet in. Suspendisse libero erat,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse";

}
function myFunction2() {
  var x = document.getElementById("topic-heading");
  var y = document.getElementById("topic-content");

    x.innerHTML = "Intro With Drone Technology";
    y.innerHTML = "ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, Lorem ipsum dolorRisus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse vel rhoncus eros eros sit amRisus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse vel rhoncus eros eros sit am sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse vel rhoncus eros eros sit amet ipsum. Cras cursus pellentesque tor";

}
function myFunction3() {
  var x = document.getElementById("topic-heading");
  var y = document.getElementById("topic-content");

    x.innerHTML = "Hands On Practice";
    y.innerHTML = "Loreamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisseultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, Lorem ipsum dolor sit amet, consectetur adipiscing elm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisseultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam pretium, nibh vitae varius ultricies, tellus diam gravida elit, Lorem ipsum dolor sit amet, consectetur adipiscing el";

}


// active 

var btnContainer = document.getElementById("allbtns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btns");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
