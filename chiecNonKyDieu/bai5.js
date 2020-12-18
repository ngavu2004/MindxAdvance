var answers = ["answers", "bruise", "cdad", "ddads", "gdfa"];
cases = 5;
function chiecNonKyDieu() {
    var str = answers[Math.floor(Math.random() * answers.length)];

    var chances = 5;
    var lives = str;
    var indexs = [];
    var int = 0;

    for (let index = 0; index < lives.length / 2; index++) {
        var ind = Math.floor(Math.random() * lives.length);
        if (indexs.includes(ind) != true) {
            indexs.push(ind);
            lives = lives.replace(lives[ind], "_");
            // console.log(index);
        }
    }
    alert(lives)
    // console.log(lives);

    function check(a) {
        for (let index = 0; index < indexs.length; index++) {
            if (a == str[indexs[index]] && lives[indexs[index]] == "_") {
                int = indexs[index];
                return true;
                break;
            };
        }
        return false;
    }
    function guest() {
        while (chances > 0) {
            if (lives.search("_") != -1) {
                input = prompt("Nhap cau tra loi")
                if (check(input) == true) {
                    lives = lives.replace(lives[int], input);
                    // console.log(lives);
                    alert(lives)
                } else if (check(input) == false && chances > 0) {
                    chances -= 1;
                    alert(lives);
                    // console.log(lives);
                    chances -= 1;
                }

            } else if (lives.search("_") == -1) {
                return;
            }

        }
    }
    guest();
    if (chances == 0 || lives.search("_") == -1) {
        return;
    }
}

while (cases > 0) {
    cases -= 1;
    chiecNonKyDieu();
}
