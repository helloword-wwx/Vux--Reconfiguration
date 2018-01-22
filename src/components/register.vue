<template>
  <div class="hello">
<form method="get" id="ajaxForm">
    <div class="geren_login">
        <img src="../assets/zhongxin.png" alt="" class="logo">
        <div class="geren_phone">
            <i class="iconfont icon-shouji"></i>
            <input type="number" class="phone" name="name" placeholder="手机号" value="">
        </div>
        <div class="geren_yanzheng">
            <i class="iconfont icon-mima"></i>
            <input type="text" name="" placeholder="输入验证码" value="">
            <input type="button" value="获取验证码" class="code">
        </div>
        <div class="geren_psd">
            <i class="iconfont icon-mima"></i>
            <input type="password" name="pass" placeholder="设置密码" value="">
        </div>
        <div class="login">
            <input type="button" class="submit" name="" value="注册">
        </div>
           
        <div class="zhuce">
            <router-link to="/login">已有账号</router-link>
            <router-link to="/forgetpsd">忘记密码</router-link>
        </div>
    </div>
</form>
    <div class="tips">
            <p></p>
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
@import '../../static/css/register.css';
</style>
