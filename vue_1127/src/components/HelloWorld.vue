<template>
  <div class="hello">
    <child :jpg_arr="arr"></child>
  </div>
</template>

<script>
  import child from "./Child";
  export default {
    name: 'HelloWorld',
    components:{child},
    data () {
      return {
        arr:["../../static/images/1.png",
          "../../static/images/2.png",
          "../../static/images/3.png",
          "../../static/images/4.png",
          "../../static/images/5.png",
          "../../static/images/6.png",
          "../../static/images/7.png",
          "../../static/images/8.png"]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
