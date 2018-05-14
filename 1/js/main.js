let vis = document.createElement("fish")
document.body.appendChild(vis)

let bubbletje = document.createElement("bubble")
document.body.appendChild(bubbletje)
//
// geef de vis een random positie en een random kleur
<<<<<<< HEAD
let screenSizeB = window.innerWidth
let screenSizeH = window.innerHeight

function randomPositionB(min, max) {
    min = 20
    max = screenSizeB
    return Math.random() * (max - min) + 1
}
function randomPositionH(min, max) {
    min = 20
    max = screenSizeH
    return Math.random() * (max - min) + 1
}
function randomPositionBubble(min, max) {
    min = 20
    max = screenSizeB
    return Math.random() * (max - min) + 1
}
let randomColor = Math.floor(Math.random() * 361)
 
=======
//

let fishes = document.getElementsByTagName("fish")
let fish = fishes[0]
fish.style.left = "200px"
fish.style.top = "100px"
fish.style.webkitFilter = "hue-rotate(200deg)"
fish.style.filter = "hue-rotate(200deg)"

//
// geef de bubble een random positie
//
let bubbles = document.getElementsByTagName("bubble")
let bubble = bubbles[0]
bubble.style.left = "200px"
bubble.style.top = "0px"
>>>>>>> 466bd86403196e89b057f3b7670957042aec5463

//
// roep een functie aan als alles geladen is
//
window.addEventListener("load", function () {
<<<<<<< HEAD
    let fishes = document.getElementsByTagName("fish")
    let fish = fishes[0]
    fish.style.left = randomPositionB() + "px"
    fish.style.top = randomPositionH() + "px"
    fish.style.webkitFilter = "hue-rotate(200deg)"
    fish.style.filter = "hue-rotate(" + randomColor + "deg)"

    // geef de bubble een random positie
    //
    let bubbles = document.getElementsByTagName("bubble")
    let bubble = bubbles[0]
    bubble.style.left = randomPositionBubble() + "px"
    bubble.style.top = "0px"


    console.log("start het aquarium")
    console.log(randomPositionB())
    console.log(randomPositionH())
    console.log(randomColor)
=======
    console.log("start het aquarium")
>>>>>>> 466bd86403196e89b057f3b7670957042aec5463
})
