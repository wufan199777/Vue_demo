<template>
  <div class="bannerWrap">
    <div class="swiper-container" :class="swiperId">
      <div class="swiper-wrapper">
        <slot name="swiper-icon"></slot>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">
        <!--<slot name="swiper-pagination"></slot>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";

  export default {
    name: "banner",
    props: {
      swiperId: {type: String, default: ""},
      loop: {type: Boolean, default: true},
      direction: {type: String, default: "horizontal"},
      paginationShow: {type: Boolean, default: true},
      paginationType: {type: String, default: "bullet"},
      effect: {type: String, default: "flip"},
    },
    mounted() {
      this.initSwiper();
    },
    data() {
      return {
        sp: {}
      }
    },
    methods: {
      initSwiper: function () {
        let that = this;
        that.sp = new Swiper("." + that.swiperId, {
          loop: that.loop,
          direction: that.direction,
          paginationShow: that.paginationShow,
          paginationType: that.paginationType,
          autoplay: {
            delay: 2000
          },
          effect: that.effect
        });
      }
    }
  }
</script>

<style scoped>
  @import "../assets/libs/swiper/css/swiper.css";

  .bannerWrap {
    width: 100%;
    height: 2.56rem;
    overflow: hidden;
  }

  .bannerWrap .swiper-container .swiper-slide img {
    width: 100%;
  }

  .swiper-pagination-bullet-active {
    background: white;
  }

</style>
