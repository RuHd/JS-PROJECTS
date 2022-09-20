class Circle {
    constructor(radius,x=0,y=0,) {
        this.angle = 2*Math.PI
        this.radius = radius
        this.x = x
        this.y = y
        this.direction = 1
        this.acceleration = .1
        this.gravity = 1
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y,this.radius,0,this.angle)
        ctx.stroke()
    }

    move() {

        this.acceleration++
        this.x += (1 * this.direction) * this.acceleration
        this.draw()
    }

    fall() {
        this.y += this.gravity
        Math.floor(this.y)
        this.draw()
    }
}

class Canvas {
    constructor(w,h) {
        this.canvas = document.createElement("canvas")
        this.canvas.width = w
        this.canvas.height = h
        this.canvas.style.border = "2px solid black"
        this.ctx = this.canvas.getContext("2d") 
    }
    
    draw() {
        document.body.insertBefore(this.canvas,body[0])

    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.draw()
    }
}