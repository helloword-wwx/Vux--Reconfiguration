<template>
   <div>
        <x-header title="slot:overwrite-title">
      <div class="overwrite-title-demo" slot="overwrite-title">首页</div>
    </x-header>
    <!-- <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div> -->

    <tabbar>
      <tabbar-item>
        <img slot="icon" >
        <span slot="label">口子</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="">
        <span slot="label">办卡</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="">
        <span slot="label">贷款</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

import { Tabbar, TabbarItem, XHeader,Group, Cell  } from "vux";
export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.overwrite-title-demo {
  margin-top: 5px;
}
</style>
