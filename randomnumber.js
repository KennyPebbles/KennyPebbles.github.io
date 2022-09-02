//To calculate result
function clicked() {

    var insertNumber1 = document.getElementById("number1").value
    var userAsk1 = document.getElementById("number2").value
    var generate1 = document.getElementById("number3").value

    console.log("insertNumber1", insertNumber1)
    console.log("generate1", generate1)
    // Turn String into Number
    const insertNumber2 = parseFloat(insertNumber1, 10);
    const generate2 = parseInt(generate1, 10)

    console.log("insertNumber2:", insertNumber2)
    console.log("generate2:", generate2)
    console.log("userAsk1:", userAsk1)
    //Number check
    var numsok = true
    if (isNaN(insertNumber2) || isNaN(generate2)) { numsok = false }
    console.log("numsok", numsok)


    var wordsok = false
    if (userAsk1 == 'dec' || userAsk1 == 'int') { wordsok = true }
    console.log("wordsok", wordsok)




    // To display result??
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""

    if (wordsok == true && numsok == true) {
        // To calculate result
        for (let k = 0; k < generate2; k++) {
            if (userAsk1 == 'dec') {
                result = (Math.random() * insertNumber2)
            } else if (userAsk1 == 'int') {
                result = Math.floor(Math.random() * insertNumber2)

            }
            console.log(result)

            divobj.innerHTML += result + "<br>"

        }
    }
    else { divobj.innerHTML = "You didn't enter a number or the right word!!!" }

       
    
}

