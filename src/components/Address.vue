<template>
  <div class="app">
    <x-header>地址管理</x-header>
       <div class="dizhiguanli_xinzeng">
        <router-link to="AddressEdit">新增地址</router-link>
        <span class="iconfont icon-gengduo-copy"></span>
    </div>
    <div class="dizhiguanli_shouhuoxinxi clearfix">
        <p>收货人信息</p>
        <div class="dizhiguanli_xulian"></div>
        <span>张三</span>
        <span>13538245154</span><br>
        <span class="dizhiguanli_moren">默认</span>
        <div>广东省广州市越秀区先烈中路80号19楼1903房间</div>
    </div>
    <div class="dizhiguanli_shouhuoxinxi2 clearfix">
            <span>张三</span>
            <span>13538245154</span><br>
            <div>广东省广州市越秀区先烈中路80号19楼1903房间</div>
    </div>

      
      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick()" background-color="#336DD6">{{('保存')}}</swipeout-button>
          <swipeout-button @click.native="del()" background-color="#D23934">{{('删除')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
   
        <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow">
        <div slot="content"   style="padding:12px;">
          <div class="dizhiguanli_shanchu clearfix">
            <div class="dizhiguanli_xinxi">
              <span>13538245154</span><br>
              <span>广东省广州市越秀区先烈中路80号19楼1903房间</span>
            </div>
          <!-- <div class="dizhiguanli_del">删除</div> -->
          </div>
        </div>
      </swipeout-item>
    </swipeout>
   </div>
  </swipeout-item class="vux-o1">
      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick()" background-color="#336DD6">{{('保存')}}</swipeout-button>
          <swipeout-button @click.native="del()" background-color="#D23934">{{('删除')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow">
        <div slot="content"   style="padding:12px;">
          <div class="dizhiguanli_shanchu clearfix">
            <div class="dizhiguanli_xinxi">
              <span>13538245154</span><br>
              <span>广东省广州市越秀区先烈中路80号19楼1903房间</span>
            </div>
          <!-- <div class="dizhiguanli_del">删除</div> -->
          </div>
        </div>
      </swipeout-item>
    </swipeout>
   </div>
  </swipeout-item>
  </div>
</template>
<script>
import {
  GroupTitle,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  XButton,
  XHeader
} from "vux";

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton,
    XHeader
  },
  methods: {
    onButtonClick(type) {
      alert("on button click " + type);
    },
    handleEvents(type) {
      console.log("event: ", type);
    },
    del(){
       console.log($(".dizhiguanli_xinxi"))
       $(".vux-swipeout-item").remove()
    }
  },
  data() {
    return {
      disabled: true
    };
  }
};
</script>
<style scoped>
@import "../../static/css/style.css";
.demo-content {
  padding: 10px 10px;
}
.dizhiguanli_xinzeng {
  background-color: #fff;
  max-height: 0.56rem;
  margin-bottom: 0.1rem;
}
.dizhiguanli_xinzeng :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  line-height: 0.56rem;
  margin-left: 0.16rem;
}
.dizhiguanli_xinzeng :nth-child(2) {
  font-size: 0.28rem;
  color: #c1c1c1;
  line-height: 0.56rem;
  float: right;
}
.dizhiguanli_shouhuoxinxi {
  background-color: #fff;
  border-bottom: 0.01rem solid #ccc;
}
.dizhiguanli_shouhuoxinxi :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  margin-left: 0.16rem;
  line-height: 0.46rem;
}
.dizhiguanli_shouhuoxinxi .dizhiguanli_xulian {
  width: 3.43rem;
  background-color: #f2f2f2;
  height: 0.02rem;
  margin: 0.2rem 0.15rem 0.2rem 0.15rem;
}
.dizhiguanli_shouhuoxinxi :nth-child(3) {
  margin-left: 0.16rem;
  font-size: 0.16rem;
  color: #343434;
}
.dizhiguanli_shouhuoxinxi :nth-child(4) {
  margin-left: 0.56rem;
  font-size: 0.16rem;
  color: #343434;
}
.dizhiguanli_shouhuoxinxi .dizhiguanli_moren {
  width: 0.49rem;
  height: 0.26rem;
  background-color: #0b3a94;
  color: #fff;
  line-height: 0.26rem;
  border-radius: 0.2rem;
  display: inline-block;
  text-align: center;
  margin-top: 0.12rem;
  margin-left: 0.19rem;
  margin-right: 0.24rem;
}
.dizhiguanli_shouhuoxinxi :nth-child(7) {
  font-size: 0.16rem;
  color: #343434;
  width: 2.68rem;
  float: right;
  margin-top: 0.1rem;
  padding-bottom: 0.14rem;
  height: 0.44rem;
  line-height: 0.22rem;
}
.dizhiguanli_shouhuoxinxi2 {
  background-color: #fff;
  max-height: 1.01rem;
  border-bottom: 0.01rem solid #c1c1c1;
}
.dizhiguanli_shouhuoxinxi2 :nth-child(1) {
  font-size: 0.16rem;
  color: #343434;
  margin-left: 0.16rem;
  line-height: 0.46rem;
}
.dizhiguanli_shouhuoxinxi2 :nth-child(2) {
  margin-left: 0.56rem;
  font-size: 0.16rem;
  color: #343434;
}
.dizhiguanli_shouhuoxinxi2 :nth-child(4) {
  font-size: 0.16rem;
  margin-left: 1.08rem;
  height: 0.44rem;
  width: 2.68rem;
  line-height: 0.22rem;
  padding-bottom: 0.14rem;
}
.dizhiguanli_shanchu .dizhiguanli_xinxi {
  width: 3.03rem;
  height: 1.02rem;
  float: left;
  background-color: #fff;
}
.dizhiguanli_shanchu .dizhiguanli_xinxi :nth-child(1) {
  font-size: 0.16rem;
  margin-left: 0.2rem;
  color: #343434;
  margin-top: 0.12rem;
  line-height: 0.5rem;
}
.dizhiguanli_shanchu .dizhiguanli_xinxi :nth-child(3) {
  font-size: 0.16rem;
  color: #343434;
  margin-left: 0.2rem;
  height: 0.44rem;
  line-height: 0.22rem;
  display: inline-block;
}
.dizhiguanli_shanchu .dizhiguanli_del {
  float: right;
  width: 0.72rem;
  height: 1.02rem;
  text-align: center;
  line-height: 1.02rem;
  background-color: #ff6f6f;
  color: #fff;
  font-size: 0.16rem;
}
</style>
