function findPower() {
    var a = document.getElementById("number").value;
    var b = document.getElementById("number2").value;
    var multiply
    var answer
    var rootresult

    // To calculate the given inputs
    multiply = Math.pow(a, b);
    rootresult = a ** (1 / b);





    var numsok = true
    if (isNaN(a) || isNaN(b)) { numsok = false }
    console.log("numsok", numsok)

    //   Display Result

    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    var divobj2 = document.getElementById('results2')
    divobj2.style.display = 'block';

    if (numsok == true) {
        divobj.innerHTML = "Power result " + multiply + "<br>";
        divobj2.innerHTML = "Root result " + rootresult + "<br>"

    }

    else {
        divobj.innerHTML = "You didn't enter a number!!!"
    }


}

