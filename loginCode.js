function checkCreds() {
    //logs to console that the function has started
    console.log("checkCreds() started");
    //sets the variables
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;

    firstName = doucment.getElementById("fName").value;
    console.log("The first name is: " + firstName);

    lastName = doucment.getElementById("lName").value;
    console.log("The last name is: " + lastName);

    badgeNumb = doucment.getElementById("badgeID").value;
    console.log("The badge number is: " + badgeNumb);

    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName);

    fullNameLength = fullName.length;
    console.log("The user's full name length is: " + fullNameLength + " characters.");

    if (fullNameLength > 20) {
        doucment.getElementById("loginStatus").innerHTML = "Invalid name, please try again"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again"
    } else {
        location.replace("./UATSpace.html");
    }






}