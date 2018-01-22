<template>
<div class="Home">
  <div class="kouzi_title">口子</div>
  <!-- <form action="">
    <input type="search" autocomplete="off" name="" placeholder="信用卡" class="kouzi_sousuo">
  </form> -->
  <div class="kouzi_logo">
    <img src="../assets/xinkouzi.png" alt="" class="logo">
  </div>
 <div class="content">
    <div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
      	<div class="xuxian"></div>
        <div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
      	<div class="xuxian"></div>
        <div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
 </div>
 	<div class="tutorial">
			<div class="shuxian"></div>
			<p class="novices">新手教程 <span class=" all fr">全部<i class="iconfont tutorial-font">&#xe605;</i></span></p>
			<img src="../assets/xinkouzi.png" alt="">
		</div>
		<div class="content">
			<div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
			<div class="xuxian"></div>
			<div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
			<div class="xuxian"></div>
			<div class="daikuan clearfix">
			  <router-link to="/LoanEdit">
						<div class="content-left fl">
						<p class="apply">申请贷款产品,跟风才有安全感,比如这2个周末才粗来的!</p>
						<p class="time">2017-11-21 <span class="xuexi">124214人已学习</span></p>
					</div>
					<div class="content-right fr">
						<img src="../assets/one.png" alt="">
					</div>
				</router-link>
			</div>
			<div class="xuxian"></div>
		</div>
    <tabbar>
      <tabbar-item link="/Loan">
        <img slot="icon" src="../assets/4.png">
        <span slot="label">口子</span>
      </tabbar-item>
      <tabbar-item link="/Card">
        <img slot="icon" src="../assets/cark.png">
        <span slot="label">办卡</span>
      </tabbar-item>
      <tabbar-item  link="/Credit">
        <img slot="icon" src="../assets/daikuan.png">
        <span slot="label">贷款</span>
      </tabbar-item>
      <tabbar-item badge="" link="personally">
        <img slot="icon" src="../assets/geren.png">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Group, Cell,Panel,Radio  } from "vux";

export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Panel,
    Radio
  },
  methods: {
  
  },
  data () {
    return {
    }
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/style.css';
@import '../../static/css/index.css';
</style>
