<template>
    <div>
        <!-- 发布按钮 -->
        <logo></logo>
        <releaseBtn></releaseBtn>
        <!-- 已经发布商品列表 -->
        <releasedList></releasedList>
        <!-- 商品上传页面 -->
        <releasePage v-show="flag"></releasePage>
    </div>
</template>

<script>
// 引入子组件
import releaseBtn from '../components/release/releaseBtn'
import releasedList from '../components/release/releasedList'
import releasePage from '../components/release/releasePage'
import logo from '@/components/index/logo'
export default {
    name:'Release',
    components:{
        releaseBtn,
        releasedList,
        releasePage,
        logo
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