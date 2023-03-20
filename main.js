/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
let d6img = document.querySelector("#d6-roll")
d6img.src = "./images/start/d6.png"
let sixesMean = document.querySelector("#d6-rolls-mean")

let firstDD6img = document.querySelector("#double-d6-roll-1")
firstDD6img.src = "./images/start/d6.png"
let secondDD6img = document.querySelector("#double-d6-roll-2")
secondDD6img.src = "./images/start/d6.png"
let dDsixesMean = document.querySelector("#double-d6-rolls-mean")

let twelvesimg = document.querySelector("#d12-roll")
twelvesimg.src = "./images/start/d12.jpeg"
let twelvesMean = document.querySelector("#d12-rolls-mean")

let twentiesimg = document.querySelector("#d20-roll")
twentiesimg.src = "./images/start/d20.jpg"
let twentiesMean = document.querySelector("#d20-rolls-mean")

let resetButton = document.querySelector("#reset-button")



/*******************
 * EVENT LISTENERS *
 *******************/
d6img.addEventListener("click", d6Roll)
firstDD6img.addEventListener("click", dd6Roll)
secondDD6img.addEventListener("click", dd6Roll)
twelvesimg.addEventListener("click", twelvesRoll)
twentiesimg.addEventListener("click", twentiesRoll)
resetButton.addEventListener("click", reset)


/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    d6img.src = "./images/start/d6.png"
    firstDD6img.src = "./images/start/d6.png"
    secondDD6img.src = "./images/start/d6.png"
    twelvesimg.src = "./images/start/d12.jpeg"
    twentiesimg.src = "./images/start/d20.jpg"

    sixes.splice(0)
    doubleSixes.splice(0)
    twelves.splice(0)
    twenties.splice(0)
}

reset()



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6Roll(){
    let random = getRandomNumber(6)
    d6img.src = `./images/d6/${random}.png`
    sixes.push(random)
    sixesMean.innerText = d6Mean()
}

function dd6Roll(){
    let random = getRandomNumber(6)
    let random2 = getRandomNumber(6)
    firstDD6img.src = `./images/d6/${random}.png`
    secondDD6img.src = `./images/d6/${random2}.png`
    doubleSixes.push(random)
    doubleSixes.push(random2)
    dDsixesMean.innerText = doubleSixesMean()
}

function twelvesRoll(){
    let random = getRandomNumber(12)
    twelvesimg.src = `./images/numbers/${random}.png`
    twelves.push(random)
    twelvesMean.innerText = twelvesM()
}

function twentiesRoll(){
    let random = getRandomNumber(20)
    twentiesimg.src = `./images/numbers/${random}.png`
    twenties.push(random)
    twentiesMean.innerText = twentiesM()
}

/****************
 * MATH SECTION *
 ****************/
function d6Mean(){
    let d6M = 0
    for (let i = 0; i < sixes.length; i++){
        d6M += Number(sixes[i])
    }
    d6M = (d6M/sixes.length).toFixed(1)
    return d6M
}

function doubleSixesMean(){
    let doubled6M = 0
    for (let i = 0; i < doubleSixes.length; i++){
        doubled6M += Number(doubleSixes[i])
    }
    doubled6M = (doubled6M/doubleSixes.length).toFixed(1)
    return doubled6M
}

function twelvesM(){
    let twelM = 0
    for (let i = 0; i < twelves.length; i++){
        twelM += Number(twelves[i])
    }
    twelM = (twelM/twelves.length).toFixed(1)
    return twelM
}

function twentiesM(){
    let twenM = 0
    for (let i = 0; i < twenties.length; i++){
        twenM += Number(twenties[i])
    }
    twenM = (twenM/twenties.length).toFixed(1)
    return twenM
}