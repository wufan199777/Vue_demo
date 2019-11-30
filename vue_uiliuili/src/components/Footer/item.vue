<template>
  <div class="itemWrap" @click="fn">
    <span v-show="bol"><slot name="activeImg"></slot></span>
    <span v-show="!bol"><slot name="normalImg"></slot></span>
    <p :class="{'active':bol}">{{txt}}</p>
  </div>
</template>

<script>
  export default {
    name: "item",
    props: ["txt", "mark", "sel"],
    computed: {
      bol: function () {
        return this.sel === this.mark;
      }
    },
    methods:{
      fn:function () {
        this.$emit("change",this.mark);
        this.$router.push("/"+this.mark);
      }
    }
  }
</script>

<style scoped>
  .itemWrap {
    width: 20%;
    float: left;
    text-align: center;
    font-size: 0;
  }

  .itemWrap img {
    width: .6rem;
    display: inline-block;
  }

  .itemWrap p {
    font-size: .24rem;
    color: #666;
  }

  .itemWrap .active {
    color: #42bd56;
  }
</style>
