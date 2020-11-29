let rel = 0
let num = 0
let ternary=""
function hienso(input) {
    let a = document.getElementById("screen").value
    if (input=="+" || input=="*" || input=="/" || input=="-") {
        rel = Number(a)
        ternary = input
        console.log(rel);
        document.getElementById("screen").value = ""}
    else if (input == "=") {
        num = Number(a)
        console.log(num);
        if (ternary == "+") {
            rel += num
            document.getElementById("screen").value = rel
        }
        if (ternary == "-") {
            rel -= num
            document.getElementById("screen").value = rel
        }
        if (ternary == "*") {
            rel *= num
            document.getElementById("screen").value = rel
        }
        if (ternary == "/") {
            rel /= num
            document.getElementById("screen").value = rel
        }
        
    } else if (Number(input) != NaN) {
         document.getElementById("screen").value = a + input.toString();
    } else if (input == "Clear") {
        rel = 0
        num = 0
        ternary=""
    }
}


// "6768768768+"