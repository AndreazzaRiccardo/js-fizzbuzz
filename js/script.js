const ulRow = document.querySelector(".row");
let liElem = "";

for (i = 1; i <= 100; i++) {

    let message;
    let colorClass;

    if ((i % 3 === 0) && (i % 5 === 0)) {
        message = "FizzBuzz";
        colorClass = "red";
    } else if (i % 5 === 0) {
        message = "Buzz";
        colorClass = "blue";
    } else if (i % 3 === 0) {
        message = "Fizz";
        colorClass = "green";
    } else {
        message = i;
        colorClass = "yellow";
    }
        
    // liElem += `<li class="col ${colorClass}">${message}</li>`;

    const boxElem = document.createElement("div");
    boxElem.classList.add("col");
    boxElem.classList.add(colorClass);

    boxElem.innerHTML = message;
    ulRow.append(boxElem);

    boxElem.addEventListener("click", function(){
        boxElem.classList.toggle("hidden")
    })

}

// ulRow.innerHTML = liElem;










