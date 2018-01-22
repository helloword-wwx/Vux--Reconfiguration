<template>
  <div class="hello">
 <div class="geren_login">
        <form class="login">
            <img src="../assets/zhongxin.png" alt="" class="logo">
            <div class="geren_phone">
                <i class="iconfont icon-shouji"></i>
                <input type="text" name="" placeholder="手机号" value="">
            </div>
            <div class="geren_psd">
                <i class="iconfont icon-mima"></i>
                <input type="password" name="" placeholder="密码" value="">
            </div>

            <input id="submit" class="denglu" type="button" name="" value="登录">

            <div class="zhuce">
               <router-link to="/register">立即注册</router-link>
               <router-link to="/forgetpsd">忘记密码</router-link>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       
    }
  },
  mounted(){
 
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../static/css/login.css'
</style>
