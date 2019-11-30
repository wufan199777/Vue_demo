<template>
  <div class="tabBar">
    <Item txt="首页" mark="home" :sel="selected" @change="getVal">
      <img :src="ic_tab_home_active" slot="activeImg"/>
      <img :src="ic_tab_home_normal" slot="normalImg"/>
    </Item>
    <Item txt="书影音" mark="audios" :sel="selected" @change="getVal">
      <img :src="ic_tab_subject_active" slot="activeImg"/>
      <img :src="ic_tab_subject_normal" slot="normalImg"/>
    </Item>
    <Item txt="广播" mark="broadcast" :sel="selected" @change="getVal">
      <img :src="ic_tab_status_active" slot="activeImg"/>
      <img :src="ic_tab_status_normal" slot="normalImg"/>
    </Item>
    <Item txt="小组" mark="group" :sel="selected" @change="getVal">
      <img :src="ic_tab_group_active" slot="activeImg"/>
      <img :src="ic_tab_group_normal" slot="normalImg"/>
    </Item>
    <Item txt="我的" mark="mine" :sel="selected" @change="getVal">
      <img :src="ic_tab_profile_active" slot="activeImg"/>
      <img :src="ic_tab_profile_normal" slot="normalImg"/>
    </Item>
  </div>
</template>

<script>
  import Item from "./item";
  import ic_tab_home_active from "./img/ic_tab_home_active.png";
  import ic_tab_home_normal from "./img/ic_tab_home_normal.png";
  import ic_tab_status_active from "./img/ic_tab_status_active.png";
  import ic_tab_status_normal from "./img/ic_tab_status_normal.png";
  import ic_tab_subject_active from "./img/ic_tab_subject_active.png";
  import ic_tab_subject_normal from "./img/ic_tab_subject_normal.png";
  import ic_tab_group_active from "./img/ic_tab_group_active.png";
  import ic_tab_group_normal from "./img/ic_tab_group_normal.png";
  import ic_tab_profile_active from "./img/ic_tab_profile_active.png";
  import ic_tab_profile_normal from "./img/ic_tab_profile_normal.png";

  export default {
    name: "foot",
    components: {Item},
    data() {
      return {
        selected: "home",
        ic_tab_home_active,
        ic_tab_home_normal,
        ic_tab_status_active,
        ic_tab_status_normal,
        ic_tab_subject_active,
        ic_tab_subject_normal,
        ic_tab_group_active,
        ic_tab_group_normal,
        ic_tab_profile_active,
        ic_tab_profile_normal
      }
    },
    methods: {
      getVal: function (val) {
        this.selected = val;
      }
    }
  }
</script>

<style scoped>
  .tabBar {
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    background: #ffffff;
  }
</style>
