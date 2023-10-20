const ulRow = document.querySelector(".row");
let liElem = "";

for (i = 1; i <= 100; i++) {

    let message;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        message = "FizzBuzz";
    } else if (i % 5 == 0) {
        message = "Buzz"
    } else if (i % 3 == 0) {
        message = "Fizz"
    } else {
        message = i
    }
        
    liElem += `<li class="col">${message}</li>`
}

ulRow.innerHTML = liElem