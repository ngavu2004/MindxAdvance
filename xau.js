let vieccanlam = []
let text = ""
let loopwhile = 0
function themvieclam() {
    let inputvalue = document.getElementById("box").value
    vieccanlam.push(inputvalue)
    // vieccanlam += vieccanlam.push(inputvalue)
    console.log(vieccanlam)
    event.preventDefault()
    // let list = document.getElementById("list")
    while (vieccanlam[loopwhile]) {
        text += "<li>" + vieccanlam[loopwhile];
        loopwhile++;
    }
    document.getElementById("list").innerHTML = text
}
console.log(vieccanlam)
let a = document.getElementById("Todolist")
a = false
function printtodolist() {
    if (a) {
        document.getElementById("Todolist").style.display = "none"
        a = false
    } else {
        document.getElementById("Todolist").style.display = "block"
        a = true
    }
}
a = prompt("chữ cần đổi")
let ans = a.split('').map(function (c) {
    return c === c.toUpperCase()
        ? c.toLowerCase()
        : c.toUpperCase()
}).join('')
function titleCase(){
console.log(ans)}
let pos = prompt("Nhap vi tri mau")
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"]
function result(){
    if(pos == 1){
        cautraloi.innerHTML += "1st choice is " + color[0]
    }else if(pos == "2"){
        cautraloi.innerHTML += "2nd choice is " + color[1]
    }else if(pos == "3"){
        cautraloi.innerHTML += "3rd choice is " + color[2]
    }else{
        cautraloi.innerHTML += pos + "th choice is " + color[pos - 1]
    }
}