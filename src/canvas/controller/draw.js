import Store from '../store'
import Option from './option'
export default class Draw {
    constructor(canvas, context, datas) {
        this.canvas = canvas
        this.ctx = context
        this.datas = datas

        this.canvas.width = 200
        // this.canvas.height = Store.defaultHeight * datas.length
        this.canvas.parentElement.style.height = Store.defaultHeight * datas.length +'px'

    }
    start() {
        Store.options = []

        let positionY = 0
        this.datas.forEach((item) => {
            positionY += Store.defaultHeight
            const newOption = new Option(item.label, item.value, positionY)

            // newOption.drawBorder(this.ctx)
            // newOption.drawText(this.ctx)
            Store.options.push(newOption)
        })


        const fiberTask = (list, oneNum = 500) => {
            const signleTask = () => {
                const currentList = list.splice(0, oneNum)

                currentList.forEach((option) => {
                    option.drawBorder(this.ctx)
                    option.drawText(this.ctx)
                })
                if (list.length > 0) {
                    idleCallBack(signleTask)
                }
            }

            idleCallBack(signleTask)
        }

        const idleCallBack = (fn) => {
            if (window.requestIdleCallback) {
                window.requestIdleCallback(fn, {
                    timeout: 200
                })
                return
            }

            setTimeout(() => {
                fn.call()
            }, 0)
        }
        fiberTask(Store.options)

        
    }
}
