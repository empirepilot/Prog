class Car {
    htmlElement:HTMLElement
    private _speed:number = 0
    
    public cruisecontrol() {
        this._speed = 100
    }

    public stop() {
        this._speed = 0
    }


    constructor() {
        this.htmlElement = document.createElement("car")
        document.body.appendChild(this.htmlElement)
        console.log("car created")
    }
    public update() {
        console.log("vrooom!")
        console.log("Snelheid is " + this._speed)
    }
    public set speed(newSpeed: number) {
        if (newSpeed > 130) {
            this._speed = 130
        } else {
            this._speed = newSpeed
        }
    }
    public get speed(): number {
        return this._speed 
    }
}
