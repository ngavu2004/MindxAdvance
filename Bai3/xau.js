function addToDo() {
    let parent = document.getElementById("list");
    let todo = document.getElementById("todo").value;
    let newItem = document.createElement("LI");
    newItem.innerHTML = todo;
    parent.appendChild(newItem);
}

function getColor(color) {
    let arr = ["th","st","nd","rd"];
    for (let i = 1; i <= color.length; i++) {
        if (i > 3) {
            console.log(i+ arr[0] +" choice is "+ color[i-1]);
        } else {
            console.log(i + arr[i] + " choice is " + color[i-1]);
        }
    }
}

function last(arr,n=1) {
    if (n > arr.length-1) {
        return arr
    } else {
        return arr.slice(arr.length - n);
    }
}

function joinArray(arr) {
    return arr.join(",")
}

function sortArray(arr) {
    var maxValue = Math.max.apply(null, arr);
    var minValue = Math.min.apply(null, arr);
    var sortedArray = arr.sort(function(a, b){return a - b});
    var reverseArr = sortedArray.reverse();
    console.log("Max: ",maxValue);
    console.log("Min: ",minValue);
    console.log("Array: ",sortedArray);
    console.log("Reverse Array: ",reverseArr);
}