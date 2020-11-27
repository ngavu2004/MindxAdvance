let body1 = document.getElementById("list");

function createToDoList(todo) {
    let newli = document.createElement("li");
    newli.innerHTML = todo;
    body1.appendChild(newli);
}

todos = ["Lap trinh", "An", "Ngu", "Choi", "Tam"]
todos.forEach(createToDoList)
// createToDoList("Lap trinh");
// createToDoList("An");
// createToDoList("Ngu");
// createToDoList("Choi");
// createToDoList("Tam");

