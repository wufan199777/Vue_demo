<template>
  <div id="warp">
    <!-- 头部组件 -->
    <MyHeader bol="true" txt="首页">
      <img :src="ChatImg" slot="right" class="rightImg"/>
      <div class="search" slot="search">
        <input type="text" placeholder="输入搜索"/>
        <img :src="SearchImg" class="searchImg"/>
        <img :src="ScanImg" class="scanImg"/>
      </div>
    </MyHeader>
    <!-- 轮播组件 -->
    <MyBanner swiperId="go">
      <div class="swiper-slide" slot="swiper-icon">
        <img :src="banner[0]"/>
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img :src="banner[1]"/>
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img :src="banner[2]"/>
      </div>
    </MyBanner>
  </div>
</template>

<script>
  import MyHeader from "@/components/headers";
  import MyBanner from "@/components/banner";
  import ChatImg from "./img/ic_chat_white.png";
  import SearchImg from "./img/ic_group_search_small.png";
  import ScanImg from "./img/ic_scan_gray.png";
  import banner01 from "./img/01.jpg";
  import banner02 from "./img/02.jpg";
  import banner03 from "./img/03.jpg";

  export default {
    name: "home",
    components: {
      MyHeader,
      MyBanner
    },
    data() {
      return {
        ChatImg,
        SearchImg,
        ScanImg,
        banner: [
          banner01,
          banner02,
          banner03]

      }
    }
  }
</script>

<style scoped>

</style>
