<template>
    <div class="canvas-list">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import Draw from './controller/draw'
export default {
    name: 'canvas-list',
    mounted(){
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext('2d')
        canvas.width = 200
        canvas.height = 100
        const drawInstance = new Draw(ctx)
        drawInstance.start()

    }

}
</script>

<style lang="less" scoped>
.canvas-list{
    height: 28px;
    // overflow: hidden;
    border: 1px solid gray;
    display: inline-block;
    width: 200px;
    canvas{
        // width: 100%;
        // height: 100%;
    }
}
</style>
