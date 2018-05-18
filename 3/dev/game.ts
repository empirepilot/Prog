/// <reference path="ball.ts"/>

class Game {
    
    private balls:Array<Ball> = []
    private maxBalls:number = 10
    
    constructor() {
        for(let i = 0; i < this.maxBalls; i++) {
        this.balls.push(new Ball())
        }
        this.gameLoop()
        
    }
    
    private gameLoop(){
        for(let i = 0; i < this.maxBalls; i++){
            this.balls[i].update()
        }
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())