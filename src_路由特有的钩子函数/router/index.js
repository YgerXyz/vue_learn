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
              component: DetailQuery
            },
          ]
        },
      ]
    },
    {path: "/about", component: About},
  ]
})
