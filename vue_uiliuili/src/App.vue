<template>
  <div id="app">
    <router-view/>
    <MyFoot></MyFoot>
  </div>
</template>

<script>
  import {obj} from "../static/js/util";
  import MyFoot from "./components/Footer/foot";

  export default {
    name: 'App',
    mounted() {
      obj.setRem();
    },
    components:{MyFoot}
  }
</script>

<style>
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*border: 1px solid black;*/
  /*}*/
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100px;
    width: 100%;

  }

  #app {
    /*border: 1px solid black;*/
    position: relative;

  }

  body {
    font-size: 16px;
    width: 100%;

  }
</style>
