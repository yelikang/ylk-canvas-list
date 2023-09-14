export default class Option {
    constructor(label, value, y) {
        this.label = label
        this.value = value
        this.y = y
    }
    drawBorder(ctx) {
        // ctx.lineWidth = 1
        // ctx.strokeStyle = 'black'
        ctx.beginPath()
        ctx.moveTo(0, this.y)
        ctx.lineTo(200, this.y)
        ctx.stroke()
        ctx.closePath()
    }
    drawText(ctx) {
        ctx.fillStyle = 'red'
        ctx.font = '12px STheiti, SimHei'
        // 向上偏移10个元素
        ctx.fillText(this.label, 0, this.y -10)
    }
}
