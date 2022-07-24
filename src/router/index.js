import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News.vue";
import Message from "../views/Message.vue";
import Detail from "../views/Detail";
import DetailQuery from "../views/DetailQuery";
import de from "element-ui/src/locale/lang/de";
import el from "element-ui/src/locale/lang/el";


const router = new VueRouter({
  // mode:"hash",//默认的工作模式  有#,
  mode:"history",// 该模式会报404需要后端配合
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      children: [
        {
          name: "xinwen",
          path: "news",
          component: News,
          meta: {isAuth: true},
          //独享路由配置 ，只有前置守卫，没有后置守卫
      /*    beforeEnter(to, from, next){
            console.log("beforeEnter",to, from, next)
            if (to.meta.isAuth){ //是否需要校验权限
              if (localStorage.getItem("school")==="learn"){
                next();
              }else {
                console.log("校验失败")
              }
            }else {
              next()
            }
          },*/
        },
        {
          name: "xinxi",
          path: "message",
          component: Message,
          meta: {isAuth: true},
          children: [
            {
              name: 'xiangqing',//path路径的简写方式，需要在 router-link to 对象写法写入参数，name
              path: 'detail',
              component: Detail
            },
            {
              name: 'xiangqing2',//params参数的对象写法，必须使用name或者拼接字符串，不能使用params+path
              path: 'detail2/:id/:title',
              component: DetailQuery
            },
          ]
        },
      ]
    },
    {name: "guanyu", path: "/about", component: About},
  ]
})

//全局前置路由守卫，初始化的时候调用，在每次路由切换之前调用
router.beforeEach((to, from, next)=>{
  // if (to.path==="/home/message"||to.path==="/home/message"){//符合要求的路径进行校验权限 ，可以通过name,path，meta(可以写入配置项，除meta，其他自定义的配置全部会被丢弃)
  console.log("beforeEach");next();return;
  console.log("beforeEach",to, from, next)
    if (to.meta.isAuth){ //是否需要校验权限
      if (localStorage.getItem("school")==="learn"){
        next();
      }else {
        console.log("校验失败")
      }
  }else {
    next()
  }
})
//全局后置路由守卫，初始化的时候调用，在每次路由切换之后调用
router.afterEach((to, from)=>{
  //一般用于切换后才需要修改的
  console.log("afterEach")
  // console.log("afterEach",to, from)
})

export default router;
