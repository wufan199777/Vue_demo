<template>
  <div :class="{headerWrap:true,green:bol}">
    <span :class="{blue:bol}">{{txt}}</span>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot name="search"></slot>
  </div>
</template>

<script>
  export default {
    name: "headers",
    props:["txt","bol"]
  }
</script>

<style scoped>
  .headerWrap{
    width: 100%;
    height: 1.36rem;
    text-align: center;
    font-size: .24rem;
    position: relative;
    line-height: .48rem;
    border-bottom: 1px solid #ccc;
    background-color: #f7f7f7;
    outline: none;
  }
  .green{
    background-color: #48bd5a;
  }
  .blue{
    background-color: #70afff;
  }
  .white{
    background-color: #f7f7f7;
  }
  .headerWrap>span{
    width: 100%;
    height: .48rem;
    font-size: .24rem;
    display: block;
    color: #ffffff;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .headerWrap img{
    position: absolute;
    width: .5rem;
  }
  .headerWrap .rightImg{
    right: .2rem;
    top: .68rem;
  }
  .headerWrap .leftImg{
    left: .2rem;
    top: .68rem;
  }
  .headerWrap .search input{
    width: 85%;
    height: .6rem;
    position: absolute;
    bottom: .14rem;
    left: .2rem;
    outline: none;
    border: none;
    border-radius: .1rem;
    text-indent: .7rem;
    font-size: .24rem;
  }
  .headerWrap .search .searchImg{
    bottom: .19rem;
    left: .3rem;
    /*border: 1px solid black;*/
  }
  .headerWrap .search .scanImg{
    bottom: .19rem;
    right: 1.1rem;
  }
</style>
