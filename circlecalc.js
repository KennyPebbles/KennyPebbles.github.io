// Activates when button clicked
function clicked() {
    var stringdia = document.getElementById("number1").value

    console.log("string-diameter:", stringdia)
    // To convert string into number
    const numberdia = parseInt(stringdia, 10);

    console.log("numberdia:", numberdia)

    // To check if imputted number is infact a number
    var numsok = true
    if (isNaN(numberdia)) { numsok = false }
    console.log(numsok)

    // To Display Result 
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""
    if (numsok == true) {

        divobj.innerHTML = "Radius:" + calcRadius(numberdia) + "<br>" +
            "Circumference:" + calcCircum(numberdia) + "<br>" +
            "Area:" + calcArea(numberdia) + "<br>"
    }

    else {
        divobj.innerHTML = "You didnt enter a number!!!"
    }
}

//To calculate result

function calcRadius(numberdia) {
    return (numberdia / 2)
}

function calcCircum(numberdia) {
    return (numberdia * Math.PI)
}
// // Work in progress, need help
function calcArea(numberdia) {
    return (Math.pow(numberdia / 2, 2) * Math.PI)
}