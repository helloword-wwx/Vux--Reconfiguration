<template>
  <div class="app">
       <x-header>贷款</x-header>
       <div class="daikuan_add_nav">
    <div class="select_module_con left clearfix">
      <div class="select_result">
        <span>综合排序</span>
        <span class="triangle"></span>
      </div>
      <ul class="select">
        <li>额度最高</li>
        <li>利率最低</li>
        <li>通过率高</li>
      </ul>
      <div class="select_result">
        <span>不限金额</span>
        <span class="triangle"></span>
      </div>
      <ul class="select_jine">
        <li>1万以内</li>
        <li>1-5万</li>
        <li>5-10万</li>
        <li>10万以上</li>
      </ul>
      <div class="select_result">
        <span>不限期限</span>
        <span class="triangle"></span>
      </div>
      <ul class="select_qixian">
        <li>6月内</li>
        <li>6-12月</li>
        <li>12-24月</li>
        <li>24月以上</li>
      </ul>
      <div class="select_result">
        <span>不限类型</span>
        <span class="triangle"></span>
      </div>
      <ul class="select_diya">
        <li>抵押贷</li>
        <li>身份证贷</li>
        <li>不查征信</li>
        <li>手机号贷</li>
        <li>信用卡贷</li>
        <li>芝麻分贷</li>
        <li>公积金贷</li>
      </ul>
    </div>
  </div>
  <div class="daikuan">
    <div class="qudao clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
    <div class="qudao clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
    <div class="qudao clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
    <div class="qudao clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
    <div class="qudao clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
    <div class="qudao qudao_last clearfix">
      <div class="qudao_left">
        <img src="../assets/xianjinbashi.png" alt="">
      </div>
      <div class="qudao_right">
        <p>现金巴士</p>
        <p>贷款额度<span class="jine">30000元</span></p>
        <p>利率：<span id="baifenbi">0.85%</span>/月 期限：<span class="time">0-12</span>/月</p>
        <span class="zhima">芝麻授信</span><span class="xinyongka">信用卡认证</span><span class="shenqing">2451人已申请</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { XHeader } from "vux";

export default {
  components: {
    XHeader 
  }
}
</script>

<style scoped>
@import '../../static/css/style.css';
.daikuan_add_nav {
  background-color: #fff;
  width: 100%;
  height: .64rem;
  text-align: center;
}
.daikuan_add_nav .select_module_con {
  width: 100%;
  line-height: 0.64rem;
  height: 0.64rem;
}
.daikuan_add_nav .select_module_con .select_result {
  float: left;
  width: 25%;
}
.daikuan_add_nav .select_module_con .select_result .triangle {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.02rem;
  vertical-align: middle;
  border-top: 0.04rem dashed;
  border-top: 0.04rem solid \9;
  border-right: 0.04rem solid transparent;
  border-left: 0.04rem solid transparent;
}
.daikuan_add_nav .select_module_con .select {
  display: none;
  position: absolute;
  top: 0.7rem;
  left: 0.15rem;
}
.daikuan_add_nav .select_module_con .select li {
  height: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.daikuan_add_nav .select_module_con .select_jine {
  display: none;
  position: absolute;
  top: 0.7rem;
  left: 1.1rem;
}
.daikuan_add_nav .select_module_con .select_jine li {
  height: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.daikuan_add_nav .select_module_con .select_diya {
  display: none;
  position: absolute;
  top: 0.7rem;
  right: 0.3rem;
}
.daikuan_add_nav .select_module_con .select_diya li {
  height: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.daikuan_add_nav .select_module_con .select_qixian {
  display: none;
  position: absolute;
  top: 0.7rem;
  left: 2.1rem;
}
.daikuan_add_nav .select_module_con .select_qixian li {
  height: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.daikuan {
  margin-top: 0.04rem;
}
.qudao {
  border-bottom: 0.01rem solid #f2f2f2;
  background-color: #fff;
  padding-top: .25rem;
}
.qudao .qudao_last {
  margin-bottom: none;
}
.qudao .qudao_left {
  text-align: center;
  width: .90rem;
  height: .90rem;
  float: left;
  background-color: #F2F2F2;
  margin: 0.02rem 0px .33rem 0.10rem;
}
.qudao .qudao_left img {
  width: .60rem;
  height: .60rem;
  margin: .15rem .15rem .15rem .15rem;
}
.qudao .qudao_right {
  margin-left: 0.07rem;
  display: inline-block;
}
.qudao .qudao_right :nth-child(1) {
  font-size: .16rem;
  color: #343434;
  /* margin-bottom: 0.04rem; */
}
.qudao .qudao_right :nth-child(2) {
  font-size: 0.12rem;
  color: #878787;
}
.qudao .qudao_right :nth-child(2) span {
  font-size: .16rem;
  color: #4D6FFA;
  margin-left: 0.1rem;
}
.qudao .qudao_right :nth-child(3) {
  color: #878787;
  /* margin-bottom: 0.06rem; */
}
.qudao .qudao_right .zhima {
  color: #5B65A7;
  padding: 0.02rem 0.06rem 0.03rem 0.07rem;
  background-color: #F2F2F2;
}
.qudao .qudao_right .xinyongka {
  color: #8556A7;
  padding: 0.02rem 0.07rem 0.03rem 0.07rem;
  background-color: #F2F2F2;
  margin-left: 0.04rem;
}
.qudao .qudao_right .shenqing {
  margin-left: 0.2rem;
}
.qudao .qudao_right #baifenbi {
  color: #343434;
}
.qudao .qudao_right .time {
  color: #343434;
}

</style>
