<template>
    <div class="app">
        <canvas-list></canvas-list>
    </div>
</template>

<script>
import CanvasList from './canvas/list'
export default {
    name: 'app',
    components:{
        CanvasList
    }
}
</script>
<style lang="less" scoped>
.app {
    height: 100%;
    width: 100%;
    text-align: center;
}
</style>
