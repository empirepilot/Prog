"use strict";
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.xSpeed = Math.random() * 10 - 5;
        this.ySpeed = Math.random() * 10 - 5;
    }
    Ball.prototype.update = function () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.x > window.innerWidth || this.x < 0) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.y > window.innerHeight || this.y < 0) {
            this.ySpeed = this.ySpeed * -1;
        }
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = [];
        this.maxBalls = 10;
        for (var i = 0; i < this.maxBalls; i++) {
            this.balls.push(new Ball());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < this.maxBalls; i++) {
            this.balls[i].update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map