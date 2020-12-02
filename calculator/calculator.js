let rel = 0
let num = 0
let ternary=""
function hienso(input) {
    let a = document.getElementById("screen").value
    if (input=="+" || input=="*" || input=="/" || input=="-" || input=="sqrt()" || input=="x^2") {
        rel = Number(a)
        ternary = input
        console.log(rel);
        document.getElementById("screen").value = ""
    }
    else if (input == "Clear") {
        rel = 0
        num = 0
        ternary=""
        document.getElementById("screen").value = ""
    }
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
        if (ternary == "sqrt()") {
            rel = Math.sqrt(rel)
            document.getElementById("screen").value = rel
        }

        if (ternary == "x^2") {
            rel = rel*rel
            document.getElementById("screen").value = rel
        }
        console.log(rel);
    } else if (Number(input) != NaN) {
         document.getElementById("screen").value = a + input.toString();
    } 
}


// "6768768768+"