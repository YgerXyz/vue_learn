<template>
  <div class="Message" id="Message">
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并且携带query参数，to的字符串写法-->
        <!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>-->
        <!-- 跳转路由并且携带params参数 需要在路由里面进行配置，接收的参数在params中-->
<!--        <router-link :to="`/home/message/detail2/${m.id}/${m.title}`">{{ m.title }}</router-link>-->
        <!-- 不能使用path+params写法，可以使用name+params-->
                <router-link :to="{
                  name:'xiangqing2',
                  params:{id:m.id,title:m.title}
                }">{{ m.title }}</router-link>


        <!-- 跳转路由并且携带query参数，to的对象写法-->
        <!--        <router-link :to="{
                  path:'/home/message/detail',
                  query:{
                    title:m.title,
                    id:m.id
                  }
                  }">{{ m.title }}
                </router-link>-->
        <!--        path路径的简写方式-->
        <!--       <router-link :to="{
                  name:'xiangqing',
                  query:{
                    title:m.title,
                    id:m.id
                  }
                  }">{{ m.title }}
                </router-link>-->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: "001", title: "消息001"},
        {id: "002", title: "消息002"},
        {id: "003", title: "消息003"},
      ]
    }
  }

}


</script>

<style scoped>
.Message {
  height: 100%;
  width: 100%;
}
</style>
