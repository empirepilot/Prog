let vis = document.createElement("fish")
document.body.appendChild(vis)

let bubbletje = document.createElement("bubble")
document.body.appendChild(bubbletje)


function randomPositionB(min, max) {
    min = 20
    max = window.innerWidth
    return Math.random() * (max - min) + 1
}
function randomPositionH(min, max) {
    min = 20
    max = window.innerHeight
    return Math.random() * (max - min) + 1
}
function randomPositionBubble(min, max) {
    min = 20
    max = screenSizeB
    return Math.random() * (max - min) + 1
}

for(let i = 0; i < 100; i++) {
let randomColor = Math.floor(Math.random() * 361)

}
//


//
// roep een functie aan als alles geladen is
//
window.addEventListener("load", function () {

// geef de vis een random positie en een random kleur    
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
})
