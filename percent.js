//To Calculate First Question
function clicked1() {

    var stringnum = document.getElementById("number1").value
    var stringdivisor = document.getElementById("number2").value

    console.log("stringnum:", stringnum)
    console.log("stringdivisor", stringdivisor)
    // Turn string into number 
    const realnum = parseInt(stringnum, 10);
    const realdivisor = parseInt(stringdivisor, 10)

    console.log("realnum:", realnum)
    console.log("realdivisor:", realdivisor)

    //To check if inputted numbers are infact a number
    var numsok = true
    if (isNaN(realnum) || isNaN(realdivisor)) { numsok = false }
    console.log("numsok", numsok)

    //To calculate result
    let result1 = ((stringnum / stringdivisor) * 100)
    console.log(result1)

    //To display result
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""
    if (numsok == true) {
        divobj.innerHTML = "Answer:" + result1 + "%" + "<br>"
    }

    else {
        divobj.innerHTML = "You didnt enter a number!!!"
    }

}


//To Calculate Second Question
function clicked2() {
    var stringper = document.getElementById("number3").value
    var stringnum2 = document.getElementById("number4").value

    console.log("stringper:", stringper)
    console.log("stringnum2:", stringnum2)
    //Turn String Into Number
    const realper = parseInt(stringper, 10)
    const realnum2 = parseInt(stringnum2, 10)

    console.log("realper:", realper)
    console.log("realnum2:", realnum2)

    //To check if inputted numbers are actually a number

    var numsok2 = true
    if (isNaN(realper) || isNaN(realnum2)) { numsok2 = false }
    console.log("numsok2", numsok2)

    //To calculate result
    let result2 = ((realper / 100) * realnum2)
    console.log(result2)

    //To Display Result
    var divobj2 = document.getElementById('results2');
    divobj2.style.display = 'block';
    divobj2.innerHTML = ""

    if (numsok2 == true) {
        divobj2.innerHTML = "Answer:" + result2 + "<br>"
    }

    else {
        divobj2.innerHTML = "You didn't enter a number!!!"

    }
}
// To Calculate Third Question
function clicked3() {
    var calcstring = document.getElementById("number5").value
    var basestring = document.getElementById("number6").value

    console.log("calcstring:", calcstring)
    console.log("basestring:", basestring)

    //Turn String Into Number
    const initialnum = parseInt(calcstring, 10);
    const finalnum = parseInt(basestring, 10)

    console.log("initialnum:", initialnum)
    console.log("finalnum:", finalnum)

    //Not a number check
    var numsok3 = true
    if (isNaN(initialnum) || isNaN(finalnum)) { numsok3 = false }
    console.log("numsok3", numsok3)

    //To Calculate Result
    let combinenum = (finalnum - initialnum)
    let times100num = (combinenum / initialnum)
    let result3 = (times100num * 100)
    console.log(result3)


    //To Display Result
    var divobj3 = document.getElementById('results3');
    divobj3.style.display = 'block';
    divobj3.innerHTML = ""

    if (numsok3 == true) {
        divobj3.innerHTML = "Answer:" + result3 +"%" + "<br>"
    }

    else {
        divobj3.innerHTML = "You didn't enter a number!!!"

    }


}


