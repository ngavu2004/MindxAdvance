function def1(x, y) {
    if (x*y > 500) {
        return x+y
    } else {
        return x*y
    }
}

function def2(x = prompt("Nhap day so ban muon")) {
    x = x.split(" ")
    console.log(x[0]);
    console.log(x[x.length - 1]);
    if (x[0] == x[x.length - 1]) {
        console.log("Bang nhau");
    }
}