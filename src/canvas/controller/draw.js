export default class Draw {
    constructor(context) {
        this.ctx = context
    }
    start() {
        const { ctx } = this
        // 底色
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 100, 100)

        this._drawText()
        this._drawBorder()
    }
    _drawBorder() {
        const { ctx } = this
        // 边框
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'

        // 边框-顶部
        ctx.beginPath()
        ctx.moveTo(5, 5)
        ctx.lineTo(80, 5)

        // 边框-右边
        ctx.lineTo(80, 40)

        // 边框-底边
        ctx.lineTo(5, 40)

        // 边框-左
        ctx.lineTo(5, 5)
        ctx.stroke()
        ctx.closePath()
    }
    _drawText() {
        const { ctx } = this

        ctx.fillStyle = 'red'
        ctx.font = '12px STheiti, SimHei'
        ctx.fillText('选项1', 20, 20)
    }
}
