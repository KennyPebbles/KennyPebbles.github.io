var password = "98937"
var code = prompt("Are you whitelisted??")

if (code == password) {
    correct = true
} else if (code != password) {
    correct = false
    location.reload();
}
console.log(correct)


