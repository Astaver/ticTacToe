let testNUm = 0;
let x = "X";
let o = "O";
let xwin = 'X wins';
let owin = 'O wins';
let blank = ''
let selection = '';
let winStatus = false;
let turnCount = 0;
let computerOpponent = true;
let cpuGrid = Math.floor(Math.random() * 9) + 1;
let g1, g2, g3, g4, g5, g6 ,g7, g8, g9 = ''

xPlayer = document.getElementById('selectX')
oPlayer = document.getElementById('selectY')
grid_one = document.getElementById('grid1')
grid_two = document.getElementById('grid2')
grid_three = document.getElementById('grid3')
grid_four = document.getElementById('grid4')
grid_five = document.getElementById('grid5')
grid_six = document.getElementById('grid6')
grid_seven = document.getElementById('grid7')
grid_eight = document.getElementById('grid8')
grid_nine = document.getElementById('grid9')
restart = document.getElementById('reset')
output = document.getElementById('output');


//function to create a computer opponent
function computerMove(){
    
    // if (computerOpponent == true) {
    //     cpuGrid = Math.floor(Math.random() * 9) + 1;
    //     console.log(cpuGrid);
    //     if ((cpuGrid == 1) && (g1 !== x) && (g1 !== o)) {
    //         grid_one.innerHTML = selection;
    //     } else if ((cpuGrid == 2) && (g2 !== x) && (g2 !== o) ) {
    //         grid_two.innerHTML = selection;
    //     } else if ((cpuGrid == 3) && (g3 !== x) && (g3 !== o) ) {
    //         grid_three.innerHTML = selection;
    //     } else if ((cpuGrid == 4) && (g4 !== x) && (g4 !== o) ) {
    //         grid_four.innerHTML = selection;
    //     } else if ((cpuGrid == 5) && (g5 !== x) && (g5 !== o)) {
    //         grid_five.innerHTML = selection;
    //     } else if ((cpuGrid == 6) && (g6 !== x) && (g6 !== o)) {
    //         grid_six.innerHTML = selection;
    //     } else if ((cpuGrid == 7) && (g7 !== x) && (g7 !== o)) {
    //         grid_seven.innerHTML = selection;
    //     } else if ((cpuGrid == 8) && (g8 !== x) && (g8 !== o)) {
    //         grid_eight.innerHTML = selection;
    //     } else if ((cpuGrid == 9) && (g9 !== x) && (g9 !== o)) {
    //         grid_nine.innerHTML = selection;
    //     } else {
            
    //     }
    // }
}       


//auto changes x/o after each move
function swapSelection() {
    if (selection == x) {
        selection = o;
        buttonLight();
        return selection;
    } else if (selection == o) {
        selection = x;
        buttonLight();
        return selection;
    }
}

//logic to define win states
function gameState() {
    // 1 2 3
    if ((g1 == x) && (g2 == x) && (g3 == x)) {
        document.getElementById('output').innerHTML= xwin;
        console.log(xwin);
    } else if ((g1 == o) && (g2 == o) && (g3 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    //1 5 9
    } else if ((g1 == x) && (g5 == x) && (g9 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g1 == o) && (g5 == o) && (g9 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    /// 1 4 7  
    } else if ((g1 == x) && (g4 == x) && (g7 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g1 == o) && (g4 == o) && (g7 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    /// 2 5 8    
    } else if ((g2 == x) && (g5 == x) && (g8 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g2 == o) && (g5 == o) && (g8 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    // 3 5 7     
    } else if ((g3 == x) && (g5 == x) && (g7 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g3 == o) && (g5 == o) && (g7 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    // 3 6 9     
    } else if ((g3 == x) && (g6 == x) && (g9 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g3 == o) && (g6 == o) && (g9 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    // 4 5 6    
    } else if ((g4 == x) && (g5 == x) && (g6 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g4 == o) && (g5 == o) && (g6 == o)) {    
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    // 7 8 9    
    } else if ((g7 == x) && (g8 == x) && (g9 == x)) {
        document.getElementById('output').innerHTML= xwin
        console.log(xwin);
    } else if ((g7 == o) && (g8 == o) && (g9 == o)) {
        document.getElementById('output').innerHTML= owin
        console.log(owin);
    } else if (turnCount == 9) {
        document.getElementById('output').innerHTML = "tie";
    } else {
        document.getElementById('output').innerHTML= "no winner yet";
        console.log('no winner yet');
    }


  
}


//highlight button function
// xPlayer = document.getElementById('selectX')
// oPlayer = document.getElementById('selectY')
function buttonLight() {
    if (selection == x) {
        xPlayer.style.backgroundColor="#fa8072";
        oPlayer.style.backgroundColor="#d3d3d3";
    } else if (selection == o) {
        oPlayer.style.backgroundColor="#fa8072";
        xPlayer.style.backgroundColor="#d3d3d3";
    }
}


//select x 
xPlayer.onclick = function() {
    selection = x;
    buttonLight();
    return selection;
}

//select o
oPlayer.onclick = function() {
    selection = o;
    buttonLight();
    return selection;
}

grid_one.onclick = function() {
    if (grid_one.innerHTML == "X" || grid_one.innerHTML == "O") {
        //do nothing if grid already played
    } else {
        g1 = grid_one.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();
        console.log(selection);
    }      
}

grid_two.onclick = function() {
    if (grid_two.innerHTML == "X" || grid_two.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g2 = grid_two.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }
}

grid_three.onclick = function() {
    if (grid_three.innerHTML == "X" || grid_three.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g3 = grid_three.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();



    }
}

grid_four.onclick = function() {
    if (grid_four.innerHTML == "X" || grid_four.innerHTML ==  "O") {
        //do nothing if grid already played

    } else {
        g4 = grid_four.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }
}

grid_five.onclick = function() {
    if (grid_five.innerHTML == "X" || grid_five.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g5 = grid_five.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }
}

grid_six.onclick = function() {
    if (grid_six.innerHTML == "X" || grid_six.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g6 = grid_six.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }
}

grid_seven.onclick = function() {
    if (grid_seven.innerHTML == "X" || grid_seven.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g7 = grid_seven.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }}

grid_eight.onclick = function() {
    if (grid_eight.innerHTML == "X" || grid_eight.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g8 = grid_eight.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();


    }}

grid_nine.onclick = function() {
    if (grid_nine.innerHTML == "X" || grid_nine.innerHTML == "O") {
        //do nothing if grid already played

    } else {
        g9 = grid_nine.innerHTML = selection;
        turnCount += 1;
        gameState();
        swapSelection();
        computerMove();
    }}

restart.onclick = function() {
    let selection = ''
    grid_one.innerHTML = selection;
    grid_two.innerHTML = selection;
    grid_three.innerHTML = selection;
    grid_four.innerHTML = selection;
    grid_five.innerHTML = selection;
    grid_six.innerHTML = selection;
    grid_seven.innerHTML = selection;
    grid_eight.innerHTML = selection;
    grid_nine.innerHTML = selection;
    output.innerHTML = selection;
    xPlayer.style.backgroundColor="#d3d3d3";
    oPlayer.style.backgroundColor="#d3d3d3";
    return console.log(selection);
}