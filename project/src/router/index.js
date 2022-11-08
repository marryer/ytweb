import VueRouter from 'vue-router' 

// 引入要展示的组件
import index from '../components/index.vue'
import user from '../components/user.vue'
import  commodity from '../components/commodity.vue'
import release from '../components/release.vue'
import shoppingCar from '../components/shoppingCar.vue'
import basicShow from '../components/user/basicShow'
import updatePassword from '../components/user/updatePassword'
import soldOut from '../components/user/soldOut'
import orderHistroy from '../components/user/orderHistroy'
export default new VueRouter({
  routes:[
    {
      path:'/index',
      component:index
    },
    {
      path:'/user',
      component:user,
      children:[
        {
          path:'/basicShow',
          component:basicShow
        },
        {
          path:'/updatePwd',
          component:updatePassword
        },{
          path:'/soldOut',
          component:soldOut
        },{
          path:'/orderHistroy',
          component:orderHistroy
        }
      ]
    },
    {
      path:'/commodity',
      component:commodity
    },
    {
      path:"/release",
      component:release
    },
    {
      path:'/shoppingCar',
      component:shoppingCar
    }
  ]
})
