<template>
  <div class="hello">
    <x-header>个人</x-header>
 <router-link to="/personallyAdd">
  <div class="geren_touxiang clearfix">
      <div class="geren_touxiangkuang">
        <div class="geren_kuangkuang">
          <img src="../assets/zhongxin.png" alt="">
        </div>
      </div>
      <div class="geren_xinxi">
        <span class="geren_name">张三</span>
        <p class="geren_id">ID号:124125</p>
      </div>
  </div>
  </router-link>
  <div class="geren_wanshan">完善个人资料信息免费赠送POS机，已完成进度45%</div>
  <div class="geren_xiaoxi">
    <a href="../html/xiaoxizhongxin_add.html">
    <span class="iconfont icon-xiaoxi"></span>
    <span>消息中心</span>
    <span class="iconfont icon-gengduo-copy"></span>
  </a>
  </div>
  <div class="geren_ziliao">
    <router-link to="/AboutMe">
      <span class="iconfont icon-ziliao1"></span>
      <span>个人资料</span>
      <a href="#" class="pos">送pos机</a>
      <span class="iconfont icon-gengduo-copy"></span>
    </router-link>
  </div>
  <div class="geren_shenkajindu">
    <div class="jindu">
      <a href="">
          <span class="iconfont icon-card4"></span>
          <span>申卡进度</span>
          <span class="iconfont icon-gengduo-copy"></span>
      </a>
    </div>
    <div class="baogao">
      <a href="">
          <span class="iconfont icon-zhengxinbaogao1"></span>
          <span>征信报告</span>
          <span class="iconfont icon-gengduo-copy"></span>
      </a>
    </div>
    <div class="gongjijin">
      <a href="">
        <span class="iconfont icon-gongjijin"></span>
        <span>查公积金</span>
        <span class="iconfont icon-gengduo-copy"></span>
    </a>
    </div>
  </div>
  <div class="geren_bangzuzhongxin">
    <a href="">
        <span class="iconfont icon-bangzhuzhongxin1"></span>
        <span>帮助中心</span>
        <span class="iconfont icon-gengduo-copy"></span>
    </a>
  </div>
  <div class="geren_lianxikefu">
    <span class="iconfont icon-kefu"></span>
    <span>联系客服</span>
  </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import { XHeader } from "vux";
import BottomNav from '../components/Public/Bottom_nav.vue'
export default {
  components: {
    XHeader,
    BottomNav
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import'../../static/css/style.css';
.geren_touxiang {
  width: 100%;
  height: 0.82rem;
  background-color: #fff;
  position: relative;
}
.geren_touxiang .geren_touxiangkuang {
  width: 0.48rem;
  height: 0.48rem;
  float: left;
  margin-top: 0.17rem;
  margin-left: 0.18rem;
}
.geren_touxiang .geren_touxiangkuang .geren_kuangkuang {
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 0.24rem;
  background-color: #D8D8D8;
}
.geren_touxiang .geren_touxiangkuang .geren_kuangkuang img {
  max-width: 100%;
  max-height: 100%;
}
.geren_touxiang .geren_xinxi {
  float: left;
}
.geren_touxiang .geren_xinxi .geren_name {
  font-size: 0.16rem;
  color: #343434;
  margin-top: 0.2rem;
  margin-left: 0.22rem;
  margin-bottom: 0.1rem;
  display: inline-block;
}
.geren_touxiang .geren_xinxi .geren_id {
  font-size: 0.14rem;
  color: #878787;
  margin-left: 0.22rem;
}
.geren_touxiang a {
  width: 100%;
  height: 0.82rem;
  display: block;
}
.geren_touxiang a i {
  float: right;
  position: absolute;
  right: 0.16rem;
  top: 0.36rem;
  font-size: 0.3rem;
  color: #878787;
}
.geren_wanshan {
  width: 100;
  height: 0.32rem;
  background-color: rgba(11, 58, 148, 0.07);
  color: #0C2781;
  text-indent: 2em;
  line-height: 0.32rem;
  margin-bottom: 0.12rem;
}
.geren_xiaoxi {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  border-bottom: 1px solid #F2F2F2;
  background-color: #fff;
  position: relative;
}
.geren_xiaoxi a:nth-child(1) {
  font-size: 0.2rem;
  margin-left: 0.18rem;
}
.geren_xiaoxi :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_xiaoxi :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  top: 0.03rem;
  font-size: 0.3rem;
}
.geren_ziliao {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  background-color: #fff;
  position: relative;
  margin-bottom: 0.1rem;
}
.geren_ziliao a:nth-child(1) {
  font-size: 0.18rem;
  margin-left: 0.18rem;
}
.geren_ziliao :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_ziliao :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  font-size: 0.3rem;
  top: 0.03rem;
}
.geren_ziliao .pos {
  width: 0.58rem;
  height: 0.2rem;
  display: inline-block;
  margin-left: 1.4rem;
  line-height: 0.2rem;
  font-size: 0.1rem;
  background-color: #FF7B7B;
  color: #FFFFFF;
  margin-bottom: 0.17rem;
  text-align: center;
  border-radius: 0.15rem;
}
.geren_shenkajindu .jindu {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  background-color: #fff;
  position: relative;
}
.geren_shenkajindu .jindu a:nth-child(1) {
  font-size: 0.18rem;
  margin-left: 0.18rem;
}
.geren_shenkajindu .jindu :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_shenkajindu .jindu :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  top: 0.03rem;
  font-size: 0.3rem;
}
.geren_shenkajindu .baogao {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  position: relative;
  background-color: #fff;
}
.geren_shenkajindu .baogao a:nth-child(1) {
  font-size: 0.18rem;
  margin-left: 0.18rem;
}
.geren_shenkajindu .baogao :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_shenkajindu .baogao :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  font-size: 0.3rem;
  top: 0.03rem;
}
.geren_shenkajindu .gongjijin {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  background-color: #fff;
  position: relative;
  margin-bottom: 0.1rem;
}
.geren_shenkajindu .gongjijin a:nth-child(1) {
  margin-left: 0.18rem;
  font-size: 0.18rem;
}
.geren_shenkajindu .gongjijin :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_shenkajindu .gongjijin :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  font-size: 0.3rem;
  top: 0.03rem;
}
.geren_bangzuzhongxin {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  background-color: #fff;
  position: relative;
  margin-bottom: 0.3rem;
}
.geren_bangzuzhongxin a:nth-child(1) {
  font-size: 0.18rem;
  margin-left: 0.18rem;
}
.geren_bangzuzhongxin :nth-child(2) {
  font-size: 0.16rem;
  margin-left: 0.16rem;
  color: #343434;
}
.geren_bangzuzhongxin :nth-child(3) {
  position: absolute;
  right: 0.16rem;
  font-size: 0.3rem;
  top: 0.03rem;
}
.geren_lianxikefu {
  text-align: center;
  width: 0.98rem;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-left: 1.39rem;
  background-color: #fff;
  border-radius: 0.3rem;
}
</style>
