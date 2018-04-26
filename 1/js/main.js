let vis = document.createElement("fish")
document.body.appendChild(vis)

let bubbletje = document.createElement("bubble")
document.body.appendChild(bubbletje)
//
// geef de vis een random positie en een random kleur
let screenSizeB = window.innerWidth
let screenSizeH = window.innerHeight

function randomPositionB(min, max) {
    min = 0
    max = screenSizeB
    return Math.random() * (max - min) + min
}
function randomPositionH(min, max) {
    min = 0
    max = screenSizeH
    return Math.random() * (max - min) + min
}

let fishes = document.getElementsByTagName("fish")
let fish = fishes[0]
fish.style.left = randomPositionB + "px"
fish.style.top = randomPositionH + "px"
fish.style.webkitFilter = "hue-rotate(200deg)"
fish.style.filter = "hue-rotate(200deg)"

//
// geef de bubble een random positie
//
let bubbles = document.getElementsByTagName("bubble")
let bubble = bubbles[0]
bubble.style.left = "200px"
bubble.style.top = "0px"

//
// roep een functie aan als alles geladen is
//
window.addEventListener("load", function () {
    console.log("start het aquarium")
    console.log(randomPositionB())
    console.log(randomPositionH())
})