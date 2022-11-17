<template>
  <div class="app">
    <top></top>
    <!-- 指定组件呈现的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top from './components/index/top'
export default {
  name: 'App',
  components:{top},
}
</script>
<style>
.app{
  font-family: '宋体';
}
</style>


