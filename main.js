const grid = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
]

walls()

let posS = [9, 0]
let posE = [0, 9]

function walls() {
    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            cords = String(r) + "," + String(c)
            if(grid[r][c] == 1) {
                document.getElementById(cords).setAttribute('class', 'square brown')
            }
        }
    }
}

function move(x, y) {
    let lastX = posS[posS.length - 2]
    let lastY = posS[posS.length - 1]
    let lastCords = String(lastX) + "," + String(lastY)
    let newCords = String(x) + "," + String(y)

    if(checkMove(x, y)) {
        if(checkWin(x, y)) {
            document.querySelector("body").innerHTML = '<h1>You won in ' + String((posS.length / 2)) + ' moves!</h1>'
        } else {
            posS.push(x)
            posS.push(y)
            document.getElementById(lastCords).innerHTML = ''
            document.getElementById(newCords).innerHTML = '<span class="material-symbols-outlined">directions_run</span>'
            document.getElementById("moves").innerText = 'Moves: ' + String((posS.length / 2) - 1)
        }
    }
}

function checkMove(x, y) {
    let lastX = posS[posS.length - 2]
    let lastY = posS[posS.length - 1]

    if((x == lastX | x == (lastX + 1) | x == (lastX - 1)) & !(x == lastX & y == lastY)) {
        if((y == lastY | y == (lastY + 1) | y == (lastY - 1)) & grid[x][y] != 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function checkWin(x, y) {
    let endX = posE[posE.length - 2]
    let endY = posE[posE.length - 1]

    if(x == endX & y == endY) {
        return true
    } else {
        return false
    }
}