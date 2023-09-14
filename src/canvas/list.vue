<template>
    <div class="canvas-list">
        <div class="canvas-list__wrapper">
            <template v-if="useCanvas">
                <div>
                    <canvas id="canvas"></canvas>
                </div>
            </template>
            <template v-else>
                <a-select style="width: 200px">
                    <a-select-option
                        v-for="item in datas"
                        :key="item.value"
                        :value="item.value"
                        >{{ item.label }}</a-select-option
                    >
                </a-select>
            </template>
        </div>
    </div>
</template>

<script>
import Draw from './controller/draw'
export default {
    name: 'canvas-list',
    data() {
        return {
            useCanvas: true,
            datas: []
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const datas = []
            for (let i = 0; i < 2; i++) {
                datas.push({
                    label: '选项' + i,
                    value: i
                })
            }
            if (this.useCanvas) {
                const canvas = document.getElementById('canvas')
                const ctx = canvas.getContext('2d')

                const drawInstance = new Draw(canvas, ctx, datas)
                drawInstance.start()
            } else {
                this.datas = Object.freeze(datas)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.canvas-list {
    height: 28px;
    // overflow: hidden;
    border: 1px solid gray;
    display: inline-block;
    width: 200px;
    position: relative;
    &__wrapper {
        max-height: 180px;
        overflow-y: auto;
        position: absolute;
        top: 28px;
    }
    canvas {
        // width: 100%;
        // height: 100%;
    }
}
</style>
