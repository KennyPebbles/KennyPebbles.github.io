//Activates when clicked
function clicked(){
    var stringnums = document.getElementById("number1").value
    var stringexp = document.getElementById("number2").value
    console.log("stringnums:",stringnums)
    console.log("stringexp:", stringexp)
    
    //Turns string into number 
    const realnums = parseInt(stringnums,10)
    const realexp = parseInt(stringexp,10)
    console.log("realnums", realnums)
    console.log("realexp:", realexp)
    
    //To check if variable is actually a number 
    var numsok = true
    if (isNaN(realnums) || isNaN(realexp)) { numsok = false }
    console.log("numsok", numsok)
    
    
    //To Calculate Result (Real Number)
    let answer1 = (realnums * 10 ** realexp)
    console.log(answer1)
    
    //To Calculate Engineering Notation
console.log(new Intl.NumberFormat('en-US', { notation: 'engineering' }).format(realnums));
    
    //To Display 
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""
    if (numsok == true) {
    
        divobj.innerHTML = "Real Number:" + answer1 + "<br>" +
        "Scientific E Notation:" + realnums + "E" + realexp + "<br>"+
        "Order of Magnitude for scientific and standard form:" + realexp + "<br>" +
        "Engineering Notation:" + (new Intl.NumberFormat('en-US', { notation: 'engineering' }).format(realnums)); + "<br>"
    
    }
    
    else {
        divobj.innerHTML = "You didnt enter a number!!!"
    }
    
    
    
    };