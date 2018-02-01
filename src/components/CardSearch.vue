<template>
  <div class="hello">
    <x-header>搜索信用卡</x-header>
    <!-- <div class="sousuoxinyongka_nav">
        <ul class="clearfix">
          <li>银行<span class="caret"></span></li>    
          <li>卡权益<span class="caret"></span></li>
          <li>白金卡<span class="caret"></span></li>
        </ul>
  </div> -->
<group class="abc">
    <selector class="" placeholder="银行" v-model="demo01" :options="list1"></selector>
    <selector class="" placeholder="卡权益" v-model="demo02" :options="list2"></selector>
    <selector class="" placeholder="白金卡" v-model="demo03" :options="list3"></selector>
</group>
   <div class="CreditCard">
        <div class="CreditCard-left">
            <p class="baijin">友谊商务白金信用卡</p>
            <ul>
                <li>• 美团逢“8”日满48减8</li>
                <li>• 滴滴出行周五六微信支付满48减8</li>
                <li>• 刷6笔99享最低6积分兑</li>
                <li>• 友谊商务白金信用卡</li>
            </ul>
            <router-link to="/CardAdd" class="chakan">查看详情</router-link>
        </div>
        <div class="CreditCard-right">
            <p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
            <p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
            <router-link to="Network">立即申请</router-link>
        </div>
    </div>
      <div class="CreditCard">
        <div class="CreditCard-left">
            <p class="baijin">友谊商务白金信用卡</p>
            <ul>
                <li>• 美团逢“8”日满48减8</li>
                <li>• 滴滴出行周五六微信支付满48减8</li>
                <li>• 刷6笔99享最低6积分兑</li>
                <li>• 友谊商务白金信用卡</li>
            </ul>
            <router-link to="/CardAdd" class="chakan">查看详情</router-link>
        </div>
        <div class="CreditCard-right">
            <p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
            <p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
            <router-link to="Network">立即申请</router-link>
        </div>
    </div>
      <div class="CreditCard">
        <div class="CreditCard-left">
            <p class="baijin">友谊商务白金信用卡</p>
            <ul>
                <li>• 美团逢“8”日满48减8</li>
                <li>• 滴滴出行周五六微信支付满48减8</li>
                <li>• 刷6笔99享最低6积分兑</li>
                <li>• 友谊商务白金信用卡</li>
            </ul>
            <router-link to="/CardAdd" class="chakan">查看详情</router-link>
        </div>
        <div class="CreditCard-right">
            <p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
            <p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
            <router-link to="Network">立即申请</router-link>
        </div>
    </div>
      <div class="CreditCard">
        <div class="CreditCard-left">
            <p class="baijin">友谊商务白金信用卡</p>
            <ul>
                <li>• 美团逢“8”日满48减8</li>
                <li>• 滴滴出行周五六微信支付满48减8</li>
                <li>• 刷6笔99享最低6积分兑</li>
                <li>• 友谊商务白金信用卡</li>
            </ul>
            <router-link to="/CardAdd" class="chakan">查看详情</router-link>
        </div>
        <div class="CreditCard-right">
            <p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
            <p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
            <router-link to="Network">立即申请</router-link>
        </div>
    </div>
      <div class="CreditCard">
        <div class="CreditCard-left">
            <p class="baijin">友谊商务白金信用卡</p>
            <ul>
                <li>• 美团逢“8”日满48减8</li>
                <li>• 滴滴出行周五六微信支付满48减8</li>
                <li>• 刷6笔99享最低6积分兑</li>
                <li>• 友谊商务白金信用卡</li>
            </ul>
            <router-link to="/CardAdd" class="chakan">查看详情</router-link>
        </div>
        <div class="CreditCard-right">
            <p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
            <p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
            <router-link to="Network">立即申请</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { Selector, Group, Cell, CellBox, XButton, XHeader } from "vux";

export default {
  components: {
    Group,
    Selector,
    Cell,
    CellBox,
    XButton,
    XHeader
  },
  data() {
    return {
      demo01: "",
      demo02: "",
      demo03: "",
      defaultValue: "gd",
      plainList: ["广东", "广西"],
      list1: [
          { key: "gd", value: "广东" },
          { key: "gx", value: "广西" }
      ],
      list2: [
          { key: "gd", value: "广东" },
          { key: "gx", value: "广西" }
      ],
      list3: [
          { key: "gd", value: "广东" },
          { key: "gx", value: "广西" }
      ],
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
    getValue(ref) {
      this.$vux.alert.show({
        title: "getFullValue",
        content: this.$refs[ref].getFullValue()
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../static/css/CardSearch.css";
.weui-cells{
    display: flex !important;
    justify-content: space-around !important;
}

</style>
