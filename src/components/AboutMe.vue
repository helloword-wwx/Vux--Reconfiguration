<template>
  <div class="app">
    <x-header>个人资料</x-header>
      <div class="gerenziliao_name">
        <p>张三</p>
        <p>ID号:1242154</p>
        <div class="gerenziliao_jindu">
            <span>45%</span>
            <!-- <div class="jindutiao">
                <div></div>
            </div> -->
            <span>资料完成进度</span>
            <a href="">去领取</a>
        </div>
    </div>
    <div class="gerenziliao_content">
        <div class="gerenziliao_xinming">
            <p>真实姓名</p>
            <p>张三</p>
            <p>去修改</p>
            <span class="iconfont icon-gengduo-copy"></span>
        </div>
        <div class="gerenziliao_xuxian"></div>
        <div class="gerenziliao_phone">
            <p>绑定手机</p>
            <p>135****1844</p>
            <p>去修改</p>
            <span class="iconfont icon-gengduo-copy"></span>
        </div>
    </div>
    <div class="gerenziliao_footer">
        <div class="gerenziliao_dizhi">
            <router-link to="Address">
              地址管理 <span class="iconfont icon-gengduo-copy"></span>
            </router-link>
        </div>
        <div class="gerenziliao_xuxian"></div>
        <div class="gerenziliao_xiugaimima">
            <a href="">修改密码 <span class="iconfont icon-gengduo-copy"></span></a>
        </div>
    </div>
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
.gerenziliao_name {
  background-color: #fff;
}
.gerenziliao_name p:nth-child(1) {
  font-size: 0.36rem;
  color: #343434;
  height: 0.5rem;
  line-height: 0.5rem;
  font-weight: 600;
  padding: 0.32rem 0rem 0rem 0.17rem;
}
.gerenziliao_name :nth-child(2) {
  font-size: 0.14rem;
  color: #878787;
  margin-left: 0.17rem;
  margin-bottom: 0.04rem;
}
.gerenziliao_name .gerenziliao_jindu {
  background-color: rgba(11, 58, 148, 0.07);
  margin-left: 0.15rem;
  margin-right: 0.16rem;
  height: 0.74rem;
  max-width: 3.43rem;
}
.gerenziliao_name .gerenziliao_jindu :nth-child(1) {
  line-height: 0.74rem;
  color: #0C2781;
  font-size: 0.24rem;
  margin: 0.24rem 0rem 0rem 0.17rem;
}
.gerenziliao_name .gerenziliao_jindu :nth-child(2) {
  color: #535353;
}
.gerenziliao_name .gerenziliao_jindu :nth-child(3) {
  background-color: #0B3A94;
  color: #fff;
  width: 0.62rem;
  height: 0.24rem;
  display: inline-block;
  text-align: center;
  line-height: 0.24rem;
  border-radius: 0.2rem;
  margin-left: 1rem;
}
.gerenziliao_content {
  background-color: #fff;
}
.gerenziliao_content .gerenziliao_xinming {
  position: relative;
}
.gerenziliao_content .gerenziliao_xinming :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  padding: 0.3rem 0 0 0.16rem;
  margin-bottom: 0.05rem;
  display: inline-block;
  font-weight: 700;
}
.gerenziliao_content .gerenziliao_xinming :nth-child(2) {
  color: #C1C1C1;
  font-size: 0.14rem;
  margin-left: 0.16rem;
  padding-bottom: 0.2rem;
}
.gerenziliao_content .gerenziliao_xinming :nth-child(3) {
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
  font-size: 0.14rem;
  color: #c1c1c1;
}
.gerenziliao_content .gerenziliao_xinming :nth-child(4) {
  position: absolute;
  right: 0.08rem;
  top: 0.4rem;
  font-size: 0.28rem;
  color: #c1c1c1;
}
.gerenziliao_content .gerenziliao_xuxian {
  width: 3.43rem;
  background-color: #F2F2F2;
  height: 0.02rem;
  margin: 0.2rem 0.15rem 0.2rem 0.15rem;
}
.gerenziliao_content .gerenziliao_phone {
  position: relative;
}
.gerenziliao_content .gerenziliao_phone :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  padding: 0.16rem 0 0 0.16rem;
  font-weight: 700;
  margin-bottom: 0.05rem;
  display: inline-block;
}
.gerenziliao_content .gerenziliao_phone :nth-child(2) {
  color: #C1C1C1;
  font-size: 0.14rem;
  margin-left: 0.16rem;
  padding-bottom: 0.2rem;
}
.gerenziliao_content .gerenziliao_phone :nth-child(3) {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  font-size: 0.14rem;
  color: #c1c1c1;
}
.gerenziliao_content .gerenziliao_phone :nth-child(4) {
  position: absolute;
  right: 0.08rem;
  top: 0.3rem;
  font-size: 0.28rem;
  color: #c1c1c1;
}
.gerenziliao_footer {
  width: 100%;
  margin-top: 0.1rem;
  background-color: #fff;
}
.gerenziliao_footer .gerenziliao_dizhi :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  line-height: 0.5rem;
  padding-top: 0.16rem;
  margin-left: 0.16rem;
}
.gerenziliao_footer .gerenziliao_dizhi :nth-child(1) span {
  font-size: 0.28rem;
  float: right;
  color: #c1c1c1;
}
.gerenziliao_footer .gerenziliao_xuxian {
  width: 3.43rem;
  background-color: #F2F2F2;
  height: 0.02rem;
  margin: 0.2rem 0.15rem 0.2rem 0.15rem;
}
.gerenziliao_footer .gerenziliao_xiugaimima {
  font-size: 0.16rem;
  color: #343434;
  line-height: 0.5rem;
  margin-left: 0.16rem;
}
.gerenziliao_footer .gerenziliao_xiugaimima span {
  font-size: 0.28rem;
  float: right;
  color: #c1c1c1;
}

</style>
