class Leaf {
    constructor(lane,y){
        this.lane = lane
        this.x = -150
        this.y = y
        this.img = "leaf.png"
        this.width = 100
        this.height = 100
        this.step = 0
        this.opacity = 1
        this.tag
    }

    draw() {
        let leaf = document.createElement("img")
        leaf.src = this.img
        leaf.style.width = this.width + "px"
        leaf.style.height = this.height + "px"
        leaf.style.position = "absolute"
        leaf.style.bottom = this.y + "px"
        leaf.style.left = this.x + "px"
        leaf.style.opacity = this.opacity
        leaf.style.border = "2px solid red"
        this.tag = leaf
        this.lane.appendChild(leaf)
    }

    move() {
        this.lane.removeChild(this.lane.firstChild)
        if (this.x == this.lane.offsetWidth) this.x = -150
        this.x++
        this.draw()
    }

}