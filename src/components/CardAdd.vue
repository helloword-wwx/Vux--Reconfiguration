<template>
  <div class="hello">
    <x-header>卡详情页</x-header>
  <div class="banka_add_card">
      <img src="../assets/nongye2.png" alt="">
  </div>
  <div class="banka_add_lianming">
    <p>浦发东航联名卡</p>
    <span>银联</span>
    <span>白金卡</span>
  </div>
  <div class="banka_add_quanyi">
    <i class="iconfont icon-renmingbi"></i>
    <span>专属权益</span>
    <p>终身免年费.</p>
    <div class="xuxian"></div>
    <p>同城本行范围内提取超额还款免取现手续费.</p>
  </div>
  <div class="banka_add_feiyong">
    <div class="banka_add_nianfei">
      <p>年费</p>
      <p>• 终身免年费.</p>
    </div>
    <div class="banka_add_quxian">
      <p>可曲线费</p>
      <p>• 最高不超过信用卡额度的50%.</p>
    </div>
    <div class="banka_add_shouxu">
      <p>取现手续费</p>
      <p>• 境内取现;交易金额的1％,最低1元;境外取现:交易金 额的3%,最低3美元.</p>
    </div>
    <div class="banka_add_zhina">
      <p>滞纳金</p>
      <p>• 最低还款额未还部分的5%,最低1元人名币/1美元/1 欧元/1欧元/1英镑/10日元.</p>
    </div>
    <div class="banka_add_chaoxian">
      <p>超限费</p>
      <p>• 无</p>
    </div>
  </div>
  <div class="banka_add_xuxian"></div>
  <div class="zhanwei"></div>
  <div class="banka_add_shenqing">
    <div><a href="javascript:;">立即申请</a></div>
  </div>
  </div>
</template>

<script>
import { XHeader } from "vux";
// import BottomNav from '../components/Public/Bottom_nav.vue'
export default {
  components: {
    XHeader
    // BottomNav
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/style.css";
.banka_add_card {
  text-align: center;
  height: 1.75rem;
  width: 87%;
  padding: 0.13rem 0.25rem 0.21rem 0.24rem;
  background-color: #fff;
  padding-bottom: 0.40rem;
}
.banka_add_card img {
  width: 3.22rem;
  height: 1.94rem;
  margin: 0 auto;
}
.banka_add_lianming {
  background-color: #fff;
  height: 0.85rem;
}
.banka_add_lianming :nth-child(1) {
  font-size: 0.22rem;
  color: #1A1A1A;
  margin-left: 0.25rem;
  margin-bottom: 0.12rem;
}
.banka_add_lianming :nth-child(2) {
  color: #5878E1;
  padding: 0.04rem 0.09rem 0.03rem 0.09rem;
  background-color: #fff;
  border: 0.01rem solid #5878e1;
  margin-left: 0.25rem;
}
.banka_add_lianming :nth-child(3) {
  color: #5878E1;
  padding: 0.04rem 0.03rem 0.03rem 0.03rem;
  background-color: #fff;
  border: 0.01rem solid #5878e1;
}
.banka_add_quanyi {
  padding-bottom: 0.42rem;
  background-color: #fff;
}
.banka_add_quanyi i {
  font-size: 0.22rem;
  color: #6A8FE7;
  margin-left: 0.24rem;
}
.banka_add_quanyi span {
  font-size: 0.18rem;
  color: #1A1A1A;
  margin-left: 0.08rem;
}
.banka_add_quanyi p {
  font-size: 0.14rem;
  margin-left: 0.25rem;
  color: #1A1A1A;
  height: 0.20rem;
}
.banka_add_quanyi .xuxian {
  width: 100%;
  height: 0.03rem;
  margin-bottom: 0.14rem;
  background-color: #f2f2f2;
}
.banka_add_quanyi p {
  font-size: 0.14rem;
  margin-left: 0.25rem;
  color: #1a1a1a;
  height: 0.20rem;
}
.banka_add_feiyong {
  background-color: #fff;
  padding-left: 0.12rem;
  padding-right: 0.27rem;
  padding-bottom: 0.30rem;
}
.banka_add_feiyong .banka_add_nianfei :nth-child(1) {
  margin-left: 0.13rem;
  font-size: 0.14rem;
  color: #1a1a1a;
  margin-bottom: 0.08rem;
}
.banka_add_feiyong .banka_add_nianfei :nth-child(2) {
  font-size: 0.14rem;
  margin-left: 0.12rem;
  color: #535353;
  margin-bottom: 0.26rem;
}
.banka_add_feiyong .banka_add_quxian :nth-child(1) {
  margin-left: 0.13rem;
  font-size: 0.14rem;
  color: #1a1a1a;
  margin-bottom: 0.08rem;
}
.banka_add_feiyong .banka_add_quxian :nth-child(2) {
  font-size: 0.14rem;
  margin-left: 0.12rem;
  color: #535353;
  margin-bottom: 0.26rem;
}
.banka_add_feiyong .banka_add_shouxu :nth-child(1) {
  margin-left: 0.13rem;
  font-size: 0.14rem;
  color: #1a1a1a;
  margin-bottom: 0.08rem;
}
.banka_add_feiyong .banka_add_shouxu :nth-child(2) {
  font-size: 0.14rem;
  margin-left: 0.12rem;
  color: #535353;
  margin-bottom: 0.26rem;
}
.banka_add_feiyong .banka_add_zhina :nth-child(1) {
  margin-left: 0.13rem;
  font-size: 0.14rem;
  color: #1a1a1a;
  margin-bottom: 0.08rem;
}
.banka_add_feiyong .banka_add_zhina :nth-child(2) {
  font-size: 0.14rem;
  margin-left: 0.12rem;
  color: #535353;
  margin-bottom: 0.26rem;
}
.banka_add_feiyong .banka_add_chaoxian :nth-child(1) {
  margin-left: 0.13rem;
  font-size: 0.14rem;
  color: #1a1a1a;
  margin-bottom: 0.08rem;
}
.banka_add_feiyong .banka_add_chaoxian :nth-child(2) {
  font-size: 0.14rem;
  margin-left: 0.12rem;
  color: #535353;
  margin-bottom: 0.26rem;
}
.banka_add_xuxian {
  width: 100%;
  height: 0.03rem;
  background-color: #f2f2f2;
}
.banka_add_shenqing {
  padding-top: 0.12rem;
  width: 100%;
  height: 0.76rem;
  background-color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0px;
  z-index: 20;
}
.banka_add_shenqing :nth-child(1) {
  height: 0.52rem;
  margin-left: 0.14rem;
  margin-right: 0.15rem;
  background-color: #6392E2;
}
.banka_add_shenqing a {
  font-size: 0.16rem;
  line-height: 0.50rem;
  color: #fff;
}
.zhanwei {
  width: 100%;
  height: 0.76rem;
}

</style>
