<template>
    <div class="pic">
        <img v-for="(item,index) in jpg_arr" :key="index" :src="item"/>
    </div>
</template>
<script>
    export default {
        name: "Child",
        props:["jpg_arr"],
        methods:{

        }
    }
</script>

<style scoped>
  .pic img{
    width: 250px;
    height: 150px;
    border: 1px solid gainsboro;
    padding: 20px;
    border-radius: 5px;
  }
</style>
