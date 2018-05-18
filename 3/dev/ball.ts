class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number

    private xSpeed:number
    private ySpeed: number 
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        this.xSpeed = Math.random() * 10 - 5
        this.ySpeed = Math.random() *10 -5
    }
    
    public update() : void {
        this.x = this.x + this.xSpeed
        this.y = this.y + this.ySpeed
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        if(this.x > window.innerWidth || this.x < 0 ) {
            this.xSpeed = this.xSpeed * -1
        }
        if(this.y > window.innerHeight || this.y < 0) {
            this.ySpeed = this.ySpeed * -1
        }
    }
}