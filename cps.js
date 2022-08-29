//Declare Variables
var count = 0
var cnttime = 0
var numssec
var cps
//Activates When Clicked
function clicked() {
    const stringsec = document.getElementById("number1").value
    console.log("stringsec:", stringsec)

    //Turns string into number
    numssec = parseInt(stringsec, 10)
    console.log("numssec:", numssec)

    //Checks for NaN
    var numsok = true
    if (isNaN(numssec)) { numsok = false }
    console.log(numsok)

    //To display and calculate part of the result
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""

    var imagediv = document.getElementById('image')
    imagediv.innerHTML = ""

    if (numsok == true) {
        var result = (numssec * 1000)
        console.log("result:", result)

        var btn = document.createElement("button");
        btn.id = "clickbutton"
        btn.onclick = imgbuttoncps
        imagediv.appendChild(btn)

        var img = document.createElement("img");
        img.src = "De Bruyne.jpg"
        img.width = "510";
        img.height = "333.33";
        btn.appendChild(img)



        console.log("numssec:", numssec)

        //Timer
        setTimeout(timeisout, result)


    }
    else {
        divobj.innerHTML = "You didn't enter a number!!!"

    }
}
//For image button(aka clicker)
function imgbuttoncps() {
    count++
    console.log(count)

    //To display count
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""

    divobj.innerHTML = "count:" + count + "<br>"


    //console.log("timernums:", timernums)



}

//run when timeisout
function timeisout() {

    //Calculates cps
    cps = (count / numssec)
    alert("Time is out, clicks per second:" + cps)

    // clean up everything
    cleanUpThings()



}

// clean up function, reset everything
function cleanUpThings() {
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""

    var imagediv = document.getElementById('image')
    imagediv.innerHTML = ""

    count = 0

}