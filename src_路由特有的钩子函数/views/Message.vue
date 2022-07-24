<template>
  <div class="Message" id="Message">
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
                  name:'xiangqing',
                  query:{id:m.id,title:m.title}
                }">{{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
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
  },
  methods: {
    pushShow(m) {
      //相当于 router-link标签添加 :replace="true",参数同标签to属性，
      //函数位于原型链上
      this.$router.push({
        name: 'xiangqing',
        query: {id: m.id, title: m.title}
      })
    },
    replaceShow(m) {
      //相当于 router-link标签添加 :replace="false" 或者不添加
      this.$router.replace({
        name: 'xiangqing',
        query: {id: m.id, title: m.title}
      })
    },
  },

  //页面销毁之前
  beforeDestroy() {

    console.log("message组件即将被销毁")
  },

}


</script>

<style scoped>
.Message {
  height: 100%;
  width: 100%;
}
</style>
