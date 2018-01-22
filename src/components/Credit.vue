<template>
  <div class="hello">
    <x-header>贷款</x-header>
        <div class="daikuan_nav">
        <ul class="clearfix">
            <li v-for="(item,index) in list.data" :key="index">
              <router-link to="/CreditAdd">
                    <img :src="item.menuimg" alt="">
                    <p>{{item.name}}</p>
              </router-link>
            </li>
        </ul>
    </div>
    <div class="xinkouzi">
        <img src="../assets/xinkouzi.png" alt="">
    </div>
    <div class="tuijian clearfix">
        <p class="tuijian_fuwu">推荐服务</p>
        <div class="tuijian_left">
            <p>贷款</p>
            <p class="tuijian_lixi">最低利息0.01%</p>
           <router-link to="/CreditAdd">我要贷款</router-link>
        </div>
        <div class="tuijian_right">
            <p>办卡</p>
            <p class="tuijian_shenpi">30秒审批</p>
          <router-link to="/CardSearch">我要办卡</router-link>
        </div>
    </div>
    <div class="daikuan">
        <div class="daikuan_tuijian clearfix">
            <span>推荐贷款</span>
            <router-link to="/CreditAdd" class="check">
            查看全部<x-icon type="ios-arrow-right" class="Credit_icon" size="17"></x-icon> 
            </router-link>
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
    <bottom-nav class="abv"></bottom-nav>
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
    return {
      list:[]
    };
  },
  created(){
    this.getlist();
  },
  methods:{
    getlist(){
       this.$http.get("https://easy-mock.com/mock/5a5582fe084b71108ca081f6/example/xindaijinfu/Credit").then(res=>{
             this.list = res.data;
             console.log(this.list.data[1].menuimg)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../static/css/Credit.css';
.abv .weui-tabbar{
  position:fixed;
}
.check{
    position: relative;
    margin-right: 0.15rem;  
}
.Credit_icon{
    position:absolute;
    top: 0.009rem;
}
</style>
