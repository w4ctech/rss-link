<template>
    <div id="app">
        <Index />
    </div>
</template>
<script>
import Index from './components/Index.vue'
import { defineComponent,ref ,reactive,computed,onMounted} from 'vue';
export default defineComponent({
    components:{
        Index
    },
})
</script>
<style>
    html,body{
        background: #fff;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
