var sum = 0;
var n;
var txt = "Average of numbers : ";
var numbers
var numbersok = false
var numberlist = []




function median(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort(function (a, b) {
        return a - b;
    });

    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}

function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}


function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

function range(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[numbers.length - 1] - [numbers[0]]
}



// Javascript program to calculate the geometric mean
// of the given array elements.

// function to calculate geometric mean
// and return float value.
function geometricMean(arr, x) {
    // declare product variable and
    // initialize it to 1.
    let product = 1;

    // Compute the product of all the
    // elements in the array.
    for (let i = 0; i < x; i++)
        product = product * arr[i];

    // compute geometric mean through
    // formula pow(product, 1/n) and
    // return the value to main function.
    let gm = Math.pow(product, 1 / x);
    return gm;
}





// Function to
// calculate IQR
function IQR(a) {

    a.sort(function (a, b) {
        return a - b;
    });
    aLen = a.length;
    console.log("Sorted-a", a)

    // [0 1 2 3  4  5] 
    //  | | | |  |  |
    // [3 5 7 9 20 21]
    // dataset1 [3 5 7]    = a.slice(0,3) = a.slice(0, aLen/2)
    // dataset2 [9 20 21]  = a.slice(3,6) = a.slice(aLen/2, aLen)

    // [0 1 2 3  4  5   6 ]  =>  aLen = 7 
    //  | | | |  |  |   |
    // [3 5 7 9 20 21  30]
    // dataset1 [3 5 7]    =  a.slice(0,3) = a.slice(0, (aLen-1)/2)
    // dataset2 [20 21 30]  = a.slice(4,7) = a.slice((aLen+1)/2, aLen)


    if (aLen % 2 == 0) {
        // even 
        dataset1 = a.slice(0, aLen / 2)
        dataset2 = a.slice(aLen / 2, aLen)
    } else {
        // odd
        dataset1 = a.slice(0, (aLen - 1) / 2)
        dataset2 = a.slice((aLen + 1) / 2, aLen)
    }

    console.log("dataset1: ", dataset1)
    console.log("dataset2: ", dataset2)

    // Median of first half
    var Q1 = median(dataset1);

    // Median of second half
    var Q3 = median(dataset2);

    console.log("Q1:", Q1)
    console.log("Q3:", Q3)
    // IQR calculation
    return (Q3 - Q1);
}

// Driver Code


function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

function getVariance(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return (array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}


const btn = document.getElementById("btn");

function clicked() {
    var datasetString = document.getElementById("My-data-set").value;

    const arrOfStr = datasetString.split(',');

    const arrOfNum = arrOfStr.map(element => {
        return parseInt(element, 10);
    });

    console.log("arrOfNum:", arrOfNum);

    // Check if the array is correct   
    var arrok = true
    for (let i = 0; i < arrOfNum.length; i++) {
        if (isNaN(arrOfNum[i])) { arrok = false }

    }
    console.log("arrok", arrok)

    //Calculate & display the result
    var divobj = document.getElementById('results');
    divobj.style.display = 'block';

    if (arrok == true) {
        divobj.innerHTML = "Inputted numbers" + datasetString + "<br>" +
            "Median: " + median(arrOfNum) + "<br>" +
            "Sorted:" + arrOfNum + "<br>" +
            "Mean: " + mean(arrOfNum) + "<br>" +
            "Mode: " + mode(arrOfNum) + "<br>" +
            "Range: " + range(arrOfNum) + "<br>" +
            "Geometric Mean:" + geometricMean(arrOfNum, arrOfNum.length) + "<br>" +
            "Interquartile Range :" + IQR(arrOfNum) + "<br>" +
            "Standard Deviation:" + getStandardDeviation(arrOfNum) + "<br>" +
            "Variance:" + getVariance(arrOfNum) + "<br>"



    }
    else {
        divobj.innerHTML = "You didnt enter a number!!!"
    }
}