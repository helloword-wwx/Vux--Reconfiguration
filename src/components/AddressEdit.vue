<template>
   <div class="app">
       <x-header>添加新地址<a slot="right">保存</a></x-header>
     <form action="post" id="formdata">
      <div class="shouhuoren">
          <label for="">收货人</label>
          <input class="username" name="username" type="text">
      </div>
      <div class="xinzengdizhi_xuxian"></div>
      <div class="lianxidianhua">
          <label for="">手机号</label>
          <input type="number" class="userphone" name="phone" pattern="[0-9]*">
      </div>
      <div class="xinzengdizhi_xuxian"></div>
      <div class="xinzeng">
        <label for="name">所在地区</label>
       <input class="" id="demo1" type="text" value="湖北省 武汉市 武昌区" readonly="" data-code="420106" data-codes="420000,420100,420106">
      </div>
      <div class="xinzengdizhi_xuxian"></div>
      <div class="xiangxidizhi">
          <label for="">详细地址</label>
          <input type="text" placeholder="请输入门牌号不少于5字">
      </div>
      <!-- <div class="xinzengdizhi_xuxian"></div> -->
     <div class="morendizhi clearfix">
       <label for="">设为默认</label>
        <label class="iSwitch">
            <input type="checkbox">
            <i></i>
        </label>
     </div>
</form>
</div>
   
</template>
<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader,
    
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
@import '../../static/css/style.css';
@import '../../static/css/jquery-weui.css';
.shouhuoren {
  height: 0.4rem;
  line-height: .6rem;
  margin-left: 0.16rem;
}
.shouhuoren :nth-child(1) {
  font-size: 0.16rem;
  color: #535353;
}
.shouhuoren :nth-child(2) {
  margin-left: 0.4rem;
  font-size: .16rem;
}
.lianxidianhua {
  height: 0.4rem;
  line-height: .4rem;
  margin-left: 0.16rem;
}
.lianxidianhua :nth-child(1) {
  font-size: 0.16rem;
  color: #535353;
}
.lianxidianhua :nth-child(2) {
  margin-left: 0.4rem;
  font-size: .16rem;
}
.xinzengdizhi_xuxian {
  background-color: #f0f0f0;
  height: 0.02rem;
  margin-left: 0.17rem;
  margin-right: 0.15rem;
  margin-bottom: 0.16rem;
  margin-top: 0.16rem;
}
.xinzeng {
  height: 0.4rem;
  line-height: .4rem;
  margin-left: 0.16rem;
}
.xinzeng :nth-child(1) {
  font-size: 0.16rem;
  color: #535353;
}
.xinzeng :nth-child(2) {
  margin-left: 0.4rem;
  font-size: .16rem;
}
.xiangxidizhi {
  height: 0.4rem;
  line-height: .4rem;
  margin-left: 0.16rem;
  margin-bottom: 0.5rem;
}
.xiangxidizhi :nth-child(1) {
  font-size: 0.16rem;
  color: #535353;
}
.xiangxidizhi :nth-child(2) {
  width: 100%;
  height: auto;
  font-size: 0.14rem;
}
.morendizhi {
  height: 0.4rem;
  line-height: .4rem;
  margin-left: 0.16rem;
}
.morendizhi :nth-child(1) {
  font-size: 0.16rem;
  color: #535353;
}
.morendizhi :nth-child(2) {
  float: right;
  margin-right: 0.1rem;
}
.iSwitch {
  position: relative;
  display: inline-block;
  width: .60rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  background: #dcdcdc;
  border: 0.01rem solid #dcdcdc;
  box-shadow: 0 0 0.05rem #dcdcdc;
  overflow: hidden;
  vertical-align: middle;
  transition: background-color 0.1s, border 0.1s;
}
.iSwitch input {
  visibility: hidden;
}
.iSwitch i {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 50%;
  height: 100%;
  border-radius: 100%;
  background: #fff;
}
.iSwitch i::before {
  content: " ";
  display: none;
  width: 200%;
  height: 100%;
  border-radius: 25%;
  background: #61cafd;
}
.iSwitch i::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #fff;
}
.iSwitch input:checked + i {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}
.iSwitch input:checked + i:before {
  display: inline-block;
  transform: translateX(-50%);
}

</style>

