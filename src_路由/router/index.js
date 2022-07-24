import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News.vue";
import Message from "../views/Message.vue";
import Detail from "../views/Detail";
import DetailQuery from "../views/DetailQuery";


export default new VueRouter({
  routes: [
    {
      path: "/home", component: Home,
      children: [
        {path: "news", component: News},
        {
          path: "message", component: Message, children: [
            {
              name: 'xiangqing',//path路径的简写方式，需要在 router-link to 对象写法写入参数，name
              path: 'detail',
              component: Detail
            },
            {
              name: 'xiangqing2',//params参数的对象写法，必须使用name或者拼接字符串，不能使用params+path
              path: 'detail2/:id/:title',
              component: DetailQuery,
            },
            {
              name: 'xiangqing3',//params参数的对象写法，必须使用name或者拼接字符串，不能使用params+path
              path: 'detail3/:id/:title',
              component: DetailQuery,

              // props的第一种写法，对象写法。值为对象（死数据）该对象中所有的key-value都将以props形式传给DetailQuery组件
              // props: {id: '6666', title: "你好啊"},

              //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的所有params参数(不会管query参数)，以props的形式传递给DetailQuery组件
              // props:true,

              //props的第三种写法，函数写法
              // props($route) {
              //   return {id: $route.query.id, title: $route.query.title}
              // },
              // props({query}) {//解赋值
              //   return {id: query.id, title: query.title}
              // },
              // props($route) {//解构赋值
              //   return {...$route.query}
              // },
              props({query:{id,title}}) {//解构赋值连续写法
                return {id,title}
              },


            },
          ]
        },
      ]
    },
    {path: "/about", component: About},
  ]
})
