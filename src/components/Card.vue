<template>
  <div class="app">
     <x-header>办卡</x-header>
     <div class="litui clearfix">
			<p class="litui-card">本期力推卡</p>
			<div class="litui-content clearfix">
				<div class="litui-pufa-1 fl">
					<p>浦发东航联名卡</p>
					<span>消费送里程积分</span>
					<img src="../assets/nongye1.png" alt="">
				</div>
				<div class="litui-pufa-2 fl">
					<p>浦发东航联名卡</p>
					<span>消费送里程积分</span>
					<img src="../assets/nongye1.png" alt="">
				</div>
				<div class="litui-pufa-3 fl">
					<p>浦发东航联名卡</p>
					<span>消费送里程积分</span>
					<img src="../assets/nongye1.png" alt="">
				</div>
			</div>
		</div>
    <div class="allbank">
			<div class="allbank-banks">
        <router-link to="/CardSearch" class="remen">热门银行</router-link>
				<router-link to="/CardSearch" class="youhui">办卡优惠</router-link>
				<router-link class="chakan" to="CardSearch">查看全部银行<x-icon type="ios-arrow-right" class="Card_icon" size="17"></x-icon></router-link>
			</div>
			<div class="xuxian2"></div>
			<div class="Hotbanks">
				<ul>
					<li v-for="(item,index) in list.data" :key="index">
					<router-link to="/CardSearch">
							<img :src="item.menuimg" alt="">
							<p>{{item.name}}</p>
					</router-link>
					</li>
				</ul>
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
				<router-link class="chakan" to="/CardAdd">查看详情</router-link>
			</div>
			<div class="CreditCard-right">
				<p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
				<p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
					<router-link to="/Network">立即申请</router-link>
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
				<router-link class="chakan" to="/CardAdd">查看详情</router-link>
			</div>
			<div class="CreditCard-right">
				<p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
				<p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
				<router-link to="/Network">立即申请</router-link>
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
				<router-link class="chakan" to="/CardAdd">查看详情</router-link>
			</div>
			<div class="CreditCard-right">
				<p><img src="../assets/zhongxin.png" alt=""><span>兴业银行</span></p>
				<p><img class="nongyecard" src="../assets/nongye1.png" alt=""></p>
				<router-link to="/Network">立即申请</router-link>
			</div>
		</div>
    <bottom-nav></bottom-nav>
  </div>
  
</template>

<script>
import { XHeader } from "vux";
import BottomNav from "../components/Public/Bottom_nav.vue";
export default {
  components: {
    XHeader,
    BottomNav
  },
  data() {
    return {
      list:[]
    };
  },
  created(){
    this.getlist();
  },
  methods:{
    getlist(){
      this.$http.get("https://easy-mock.com/mock/5a5582fe084b71108ca081f6/example/Card").then(res=>{
                this.list = res.data;
                console.log(this.list.data[1].menuimg)

      })
    }
  }
};
</script>

<style>
@import "../../static/css/style.css";
.Card_icon{
 position: absolute;
 top: 0.009;
  
}
.overwrite-title-demo {
  margin-top: 5px;
}
.vux-header {
  margin-bottom: 0.04rem;
}
.litui {
  background-color: #fff;
  margin-bottom: 0.1rem;
}
.litui-content {
  padding-bottom: 0.16rem;
}
.litui img {
  width: 0.73rem;
  height: 0.47rem;
  margin: 0.22rem 0.19rem 0.2rem 0.18rem;
}
.litui-card {
  font-size: 0.14rem;
  color: #343434;
  height: 0.2rem;
  margin: 0.15rem 0 0 0.14rem;
  margin-bottom: 0.14rem;
  /*background-color: #fff;*/
}
.litui-pufa-1 {
  width: 1.1rem;
  height: 1.48rem;
  background-color: #4d4d4d;
  text-align: center;
  margin-left: 0.16rem;
}
.litui-pufa-1 p {
  color: #fff;
  height: 0.2rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
  font-size: 0.14rem;
}
.litui-pufa-1 span {
  color: #fff;
  height: 0.18rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
}
.litui-pufa-2 p {
  color: #fff;
  height: 0.2rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
  font-size: 0.14rem;
}
.litui-pufa-2 span {
  color: #fff;
  height: 0.14rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
}
.litui-pufa-3 p {
  color: #fff;
  height: 0.2rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
  font-size: 0.14rem;
}
.litui-pufa-3 span {
  color: #fff;
  height: 0.18rem;
  margin: 0.18rem 0 0.06rem 0.06rem;
}
.litui-pufa-2 {
  width: 1.1rem;
  height: 1.48rem;
  background-color: #7b94b7;
  text-align: center;
  margin-left: 0.06rem;
}
.litui-pufa-3 {
  width: 1.1rem;
  height: 1.48rem;
  background-color: #c4a259;
  text-align: center;
  margin-left: 0.06rem;
}
.litui-pufa p {
  height: 0.2rem;
}
.allbank {
  background-color: #fff;
  height: 3.14rem;
}
.allbank-banks a {
  height: 0.2rem;
  font-size: 0.14rem;
  display: inline-block;
}
.allbank-banks .youhui {
  width: 0.62rem;
  height: 0.21rem;
  line-height: 0.21rem;
  text-align: center;
  background-color: #fe5159;
  color: #fff;
  border-radius: 0.03rem;
  margin-left: 0.15rem;
}
.allbank-banks .remen {
  margin-left: 0.15rem;
  margin-top: 0.15rem;
}
.allbank-banks .chakan {
  margin-left: 0.9rem;
  position: relative;
}
.xuxian2 {
  width: 100%;
  height: 0.02rem;
  background-color: #f2f2f2;
  margin-top: 0.14rem;
}
.allbank .chakan-gengduo {
  font-size: 0.12rem;
}
.Hotbanks {
  width: 100%;
  text-align: center;
}
.Hotbanks ul li {
  float: left;
  width: 25%;
  padding-top: 0.45rem;
}
.Hotbanks ul li img {
  width: 0.3rem;
  height: 0.3rem;
}
.Hotbanks ul li p {
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
.CreditCard {
  margin-top: 0.05rem;
  height: 2.38rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: nowrap; */
}
.CreditCard p {
  font-size: 0.16rem;
  display: inline-block;
}
.CreditCard li {
  font-size: 0.14rem;
  margin-left: 0.1rem;
  margin-bottom: 0.08rem;
}
.CreditCard-left {
  padding-right: 0.2rem;
}
.CreditCard-left ul {
  margin-bottom: 0.15rem;
}
.CreditCard-left .baijin {
  font-size: 0.16rem;
  color: #343434;
  height: 0.22rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.12rem;
}
.CreditCard-left .chakan {
  font-size: 0.14rem;
  padding: 0.04rem 0.06rem 0.04rem 0.05rem;
  color: #0c2781;
  border: 0.01rem solid #0c2781;
  border-radius: 0.03rem 0.03rem 0.03rem 0.03rem;
  margin: 0.12rem 0 0.22rem 0.19rem;
}
.CreditCard-right {
  width: 1.3rem;
  height: 1.48rem;
  text-align: center;
  border: 0.01rem solid #ccc;
  border-bottom: none;
  margin-right: 0.2rem;
  margin-top: 0.3rem;
}
.CreditCard-right a {
  display: block;
  width: 1.3rem;
  height: 0.34rem;
  background-color: #0b3a94;
  color: #fff;
  line-height: 0.34rem;
}
.CreditCard-right img {
  width: 0.22rem;
  height: 0.14rem;
  text-align: center;
}
.CreditCard-right span {
  font-size: 0.12rem;
  padding-left: 0.1rem;
}
.CreditCard-right p {
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
}
.CreditCard-right .nongyecard {
  width: 0.74rem;
  height: 0.48rem;
  display: block;
  padding-bottom: 0.16rem;
}
.weui-tabbar {
  position: fixed !important;
}
.vux-x-icon-ios-arrow-right{
  color:red;
}
</style>
