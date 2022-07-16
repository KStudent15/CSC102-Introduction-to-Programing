function checkCreds() {
    //logs to console that the function has started
    console.log("checkCreds() started");
    //sets the variables
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;

    //gets the name inputed into the fName box and displays it in console
    firstName = document.getElementById("fName").value;
    console.log("The first name is: " + firstName);
    //gets the name inputed into the lName box and displays it in console
    lastName = document.getElementById("lName").value;
    console.log("The last name is: " + lastName);
    //gets the number inputed into the badgeID box and displays it in console
    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is: " + badgeNumb);
    //combines the names from fName and lName and combines them to print full name in console
    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName);
    //displays the users full name character length
    fullNameLength = fullName.length;
    console.log("The user's full name length is: " + fullNameLength + " characters.");

    //if the full name is over 20 characters displays "Invalid name, please try again" and forces them to reinput 
    if (fullNameLength > 20) {
        doucment.getElementById("loginStatus").innerHTML = "Invalid name, please try again"
    }
    // if bad number is over 999 or under 1 displays "Invalid badge number, please try again" and forces them to reinput
    else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again"
    }
    // if neither above is true then logs in the user to ./UATSpace.html 
    else {
        location.replace("./UATSpace.html");
    }






}