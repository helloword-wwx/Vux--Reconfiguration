<template>
  <div class="app">
     <div id="dh" class="donhua h5donghua clearfix">
    <x-header>个人</x-header>
            <div class="shezhi_touxiang clearfix">
                <div class="shezhitouxiang">头像</div>
                <div class="shezhi_touxiangkuang">
                    <div class="shezhi_kuangkuang">
                        <img src="../assets/zhongxin.png" alt="">
                    </div>
                </div>
                <span class="iconfont icon-gengduo-copy"></span>
            </div>
        
            <div class="shezhi_xuxian"></div>
        
            <div class="gerenshezhi_name">
                <div class="shezhi_touxiang clearfix">
                    <div class="shezhinicheng">昵称</div>
                    <div class="shezhi_name">张三</div>
                    <span class="iconfont icon-gengduo-copy"></span>
                </div>
            </div>
            <div class="shezhi_xuxian"></div>
            <div class="gerenshezhi_ID">
                <div class="shezhi_touxiang clearfix">
                    <div class="shezhiiidhao">ID号</div>
                    <div class="shezhi_id">4512454</div>
                    <span class="iconfont icon-gengduo-copy"></span>
                </div>
            </div>
            <div class="tuichudenglu">
                <router-link to="/login">退出账号</router-link>
            </div>
  </div>
  </div>
</template>

<script>
import {XHeader} from 'vux'
export default {
  components: {
    XHeader
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
@import '../../static/css/style.css';
.gerenshezhi_header :nth-child(2) {
  color: #1A1A1A;
}
.shezhi_touxiang {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
  position: relative;
}
.shezhi_touxiang .shezhitouxiang {
  font-size: 0.16rem;
  float: left;
  line-height: 0.7rem;
  margin-left: 0.16rem;
  color: #343434;
}
.shezhi_touxiang .shezhi_touxiangkuang {
  width: 0.48rem;
  height: 0.48rem;
  float: right;
  margin-top: 0.1rem;
  margin-right: 0.3rem;
}
.shezhi_touxiang .shezhi_touxiangkuang .shezhi_kuangkuang {
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 0.24rem;
  background-color: #D8D8D8;
}
.shezhi_touxiang .shezhi_touxiangkuang .shezhi_kuangkuang img {
  max-width: 100%;
  max-height: 100%;
}
.shezhi_touxiang :nth-child(3) {
  font-size: 0.28rem;
  position: absolute;
  right: 0rem;
  top: 0.26rem;
}
.gerenshezhi_name .shezhi_touxiang {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
  position: relative;
}
.gerenshezhi_name .shezhi_touxiang .shezhinicheng {
  font-size: 0.16rem;
  float: left;
  line-height: 0.7rem;
  color: #343434;
  margin-left: 0.16rem;
}
.gerenshezhi_name .shezhi_touxiang .shezhi_name {
  float: right;
  font-size: 0.16rem;
  margin-right: 0.3rem;
  line-height: 0.7rem;
  color: #878787;
}
.gerenshezhi_name .shezhi_touxiang :nth-child(3) {
  font-size: 0.28rem;
  position: absolute;
  right: 0rem;
  top: 0.26rem;
}
.gerenshezhi_ID .shezhi_touxiang {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
  position: relative;
}
.gerenshezhi_ID .shezhi_touxiang .shezhiiidhao {
  font-size: 0.16rem;
  float: left;
  line-height: 0.7rem;
  margin-left: 0.16rem;
  color: #343434;
}
.gerenshezhi_ID .shezhi_touxiang .shezhi_id {
  float: right;
  font-size: 0.16rem;
  margin-right: 0.3rem;
  line-height: 0.7rem;
  color: #878787;
}
.gerenshezhi_ID .shezhi_touxiang :nth-child(3) {
  font-size: 0.28rem;
  position: absolute;
  right: 0rem;
  top: 0.26rem;
}
.shezhi_xuxian {
  width: 3.58rem;
  background-color: #f0f0f0;
  height: 0.03rem;
  margin-left: 0.17rem;
}
.tuichudenglu {
  background-color: #FF4F4F;
  text-align: center;
  position: fixed;
  margin-left: 0.15rem;
  bottom: 0.4rem;
}
.tuichudenglu :nth-child(1) {
  color: #fff;
  width: 3.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
  display: inline-block;
}

</style>
