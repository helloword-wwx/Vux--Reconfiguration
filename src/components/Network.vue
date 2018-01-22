<template>
  <div class="hello">
    <x-header></x-header>
   <div class="Network-title">网络办卡</div>
    <flow class="Network-my">
      <flow-state class="Network-radius" state="1" :title="('卡片选择')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state class="Network-radius"  state="2" is-done>
        <span slot="title">{{ ('资质预审') }}</span>
      </flow-state>
      <flow-line></flow-line>

      <flow-state class="Network-radius"  state="3" :title="('信息填写')"></flow-state>
      <flow-line></flow-line>
      <flow-state class="Network-radius" state="4" :title="('提交成功')"></flow-state>
    </flow>
    <p class="Network-select">请选择自己想要的卡片</p>
     <group>
      <x-address title="当前居住城市" v-model="value" raw-value :list="addressData"></x-address>
    </group>
  </div>
</template>

<script>
import { XHeader, Flow, FlowState, FlowLine, Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name } from "vux";
// import BottomNav from '../components/Public/Bottom_nav.vue'
export default {
  components: {
    XHeader,
     Flow,
    FlowState,
    FlowLine,
    Group,
    XAddress,
    XButton,
    Cell
  },
  data() {
    return {
      value: [],
      title2: '设置值',
      addressData: ChinaAddressV3Data,
          };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../static/css/style.css';
/* html,body{
  background-color: #fff;
} */
.Network-title{
  width: 100%;
  text-align: center;
  background-color: #6392E2;
  color: #fff;
  font-size: 0.18rem;
  height: 0.52rem;
  line-height: 0.52rem;
}
.weui-wepay-flow__li .weui-wepay-flow__state{
    left: -9px!important;
    top: -9px!important;
    width: 30px!important;
    height: 30px!important;
    font-size: 10px!important;
    line-height: 30px!important;
    border-radius: 15px !important;
} 
.weui-wepay-flow__title-bottom{
  margin-top: 0.1rem;
}
.Network-select{
  text-align: center;
  color: black;
  font-weight: 600;
  font-size: 0.14rem;
  padding-top: 0.07rem;
  padding-bottom: 0.07rem;
  background-color: #fff;
}
</style>
