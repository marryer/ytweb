<template>
    <div>
        <!-- 导航条 -->
        <!-- <top></top> -->
        <!-- 发布按钮 -->
        <releaseBtn></releaseBtn>
        <!-- 已经发布商品列表 -->
        <releasedList></releasedList>
        <!-- 商品上传页面 -->
        <releasePage v-show="flag"></releasePage>
    </div>
</template>

<script>
// 引入子组件
// import top from './index/top.vue'
import releaseBtn from '../components/release/releaseBtn'
import releasedList from '../components/release/releasedList'
import releasePage from '../components/release/releasePage'
// import ad from '../components/index/ad'
// import top from './index/top.vue'
// import releaseBtn from '../components/release/releaseBtn'
// import releasedList from '../components/release/releasedList'
// import releasePage from '../components/release/releasePage'

export default {
    name:'Release',
    components:{
        // top,
        releaseBtn,
        releasedList,
        releasePage,
    },
    data(){
        return{
            flag:true,
            adPosition:'ad_position',
        }
    },  
}
</script>

<style>
.ad_position{
    position: absolute;
    top: 100px;
}
</style>