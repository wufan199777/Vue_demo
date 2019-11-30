<template>
  <div class="hello">
    <input type="text" v-model="msg" @keypress.enter="enter()"/>
    <p>{{msg|filter_upper}}</p>
    <p>------------------child-----------------</p>
    <child :child_msg="msg" @click_event="getMsgLowerCase"></child>
  </div>
</template>

<script>
  // 引入外部组件
  import child from './Child';

  export default {
    name: 'HelloWorld',
    // 声明局部组件
    components: {child},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      upper() {
        return this.msg.toUpperCase()
      }
    },
    filters: {
      filter_upper(t) {
        return t.toUpperCase()
      }
    },
    methods: {
      enter() {
        alert(this.msg)
      },
      getMsgLowerCase(res){
        this.msg = res
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
