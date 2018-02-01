<template>
  <div class="app">
          <div refs='Wl' class="w_loading">
        <div id="loading">
            <i></i>
            <p>正在努力加载中....</p>
        </div>
    </div>
  </div>
</template>
<script>
// import loading from '../../../static/JS/loading.js';
export default {
  components: {

  },
  mounted(){
      
    },
    created(){
       
    },
    beforeCreate(){
            document.onreadystatechange = function() {
              if (document.readyState === "complete") {
              $(".w_loading").fadeOut();
        }
       }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.w_loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    background-color: #0f2a41;
}

.w_loading #loading {
    width: 100%;
    height: 100%;
    background-color: #0f2a41;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999999;
}

.w_loading #loading>i {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url("../../assets/loading.gif") no-repeat;
    background-size: 100px 100px;
}

.w_loading #loading>p {
    position: absolute;
    top: 58%;
    bottom: 0;
    left: 26%;
    right: 0;
    margin: auto;
    color: #fff;
    font-size: 0.27333333rem;
    font-family: '宋体';
}
</style>
