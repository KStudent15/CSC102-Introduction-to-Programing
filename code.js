
/* Week 1 Assignment
Assignment: Launching your UAT Space Program HTML Document Tags
Kaiden Wallenfelsz
kaiwalle@uat.edu */

//Fucntion for countdown timer ver 1 
//Fucntion is activated on clicking button start
//10
function start() {
    console.log("start() function started");
    var currTime = 10;
    console.log(currTime);
    document.getElementById("CountdownStatus").innerHTML = currTime;
    //Fucntion that counts down and prints the number on screen
    //9
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //Blastoff
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = "Blastoff!!!!";
        console.log(currTime);
    }, 10000)


}