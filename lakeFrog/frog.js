class Frog {
    constructor(){
        this.x = 300
        this.y = 50
        this.width = 60
        this.height = 60
        this.img = "frog.png"
        this.tag = document.createElement("img")
        this.lane = document.getElementById("container")
        this.touchedGround = true
        this.touchedLeef = false
        this.touchedWater = false
        this.screenX = 0
        this.screenY = 0
    }

    jump() {
        this.y += 80
        this.draw()

    }

    draw() {
        this.setProperties()
        if (this.touchedLeef) this.lane.appendChild(this.tag)
        this.lane.appendChild(this.tag)
    }

    setProperties() {
        this.tag.src = this.img
        this.tag.style.width = this.width + "px"
        this.tag.style.height = this.height + "px"
        this.tag.style.position = "absolute"
        this.tag.style.bottom = this.y + "px"
        this.tag.style.left = this.x + "px"
        this.tag.style.zIndex = 1
        this.tag.style.display = "inline-block"
        this.tag.style.border = "2px solid red"
    }
}



