<template>
    <div>
        <!-- 发布按钮 -->
        <logo></logo>
        <releaseBtn></releaseBtn>
        <router-view></router-view>
    </div>
</template>

<script>
// 引入子组件
import releaseBtn from '../components/release/releaseBtn'
import logo from '@/components/index/logo'
export default {
    name:'Release',
    components:{
        releaseBtn,
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