//Activates when button is clicked
function clicked() {
    var datasetString = document.getElementById("number1").value

    // To convert array of strings into a array of numbers
    const astring = datasetString.split(',');
    const anumber = astring.map(element => {
        return parseFloat(element, 10);
    });

    console.log(anumber)
    // To check if var is indeed a number
    var numbersok = true
    for (let i = 0; i < anumber.length; i++) {
        if (isNaN(anumber[i])) { numbersok = false }

    }


    // To Calculate Result(LCM)
    const calculateLCM = (...arr) => {
        const gcd2 = (a, b) => {
            // Greatest common divisor of 2 integers
            if (!b) return b === 0 ? a : NaN;
            return gcd2(b, a % b);
        };
        const lcm2 = (a, b) => {
            // Least common multiple of 2 integers
            return a * b / gcd2(a, b);
        }
        // Least common multiple of a list of integers
        let n = 1;
        for (let i = 0; i < arr.length; ++i) {
            n = lcm2(arr[i], n);
        }
        return n;

    }

    // Function to return gcd of a and b
    function gcd(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    // To Calculate  Result(GCF/GCD)
    function findGCD(arr, n) {
        let result = arr[0];
        for (let i = 1; i < n; i++) {
            result = gcd(arr[i], result);

            if (result == 1) {
                return 1;
            }
        }
        return result;
    }

    // To Display Result
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';
    divobj.innerHTML = ""
    if (numbersok == true) {

        divobj.innerHTML = "LCM:" + calculateLCM(...anumber) + "<br>" +
            "GCF/GCD:" + findGCD(anumber, anumber.length) + "<br>"
    }

    else {
        divobj.innerHTML = "You didnt enter a number!!!"
    }



};


