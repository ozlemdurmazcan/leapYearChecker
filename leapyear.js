document.querySelector(".btn").addEventListener("click", function() {
    var year = document.querySelector("#getinput").value;
    var year = parseInt(year);
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                document.querySelector(".response").innerHTML = year + " is a leap year.";
            }
        } else {
            document.querySelector(".response").innerHTML = year + " is a leap year.";
        }
    } else {
        document.querySelector(".response").innerHTML = year + " is not a leap year.";
    }
    resultSummon = a + b;

    document.querySelector("h1").innerHTML = resultSummon;
});

// OPTION #2
// function isLeap(year) {
//     if ((year % 4 === 0 && year / 100 !== 0) || ((year % 4 === 0 && year / 100 === 0) && year % 400 === 0)) {
//         console.log("Leap year.");
//         return "Leap year.";
//     } else {
//         console.log("Not leap year.");
//         return "Not leap year.";
//     }
// }