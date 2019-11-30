<template>
    <div>
      <p>这是child组件:{{child_msg|toUpper}}</p>
      <button @click="setMsg()">点击发送数据给父组件</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        props:["child_msg"],
        filters:{
          toUpper(t){
            return t.toUpperCase()
          }
        },
        methods:{
          setMsg(){
            // 子组件弹出给父组件（前面为自定义事件名，后面为传递的值）
            this.$emit("click_event","this is child")
          }
        }
    }
</script>

<style scoped>
 p{
   color: blue;
 }
</style>
