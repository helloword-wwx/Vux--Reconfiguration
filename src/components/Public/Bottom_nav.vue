<template>
  <div class="app">
      <tabbar>
      <tabbar-item link="/Loan">
        <img slot="icon" src="../../assets/4.png">
        <span slot="label">口子</span>
      </tabbar-item>
      <tabbar-item link="/Card">
        <img slot="icon" src="../../assets/cark.png">
        <span slot="label">办卡</span>
      </tabbar-item>
      <tabbar-item selected link="/Credit">
        <img slot="icon" src="../../assets/daikuan.png">
        <span slot="label">贷款</span>
      </tabbar-item>
      <tabbar-item badge="" link="/personally">
        <img slot="icon" src="../../assets/geren.png">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style>


</style>
