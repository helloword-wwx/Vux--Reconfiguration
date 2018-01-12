<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/components/abc">点击</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue!!!'
    }
  },
  mounted(){
    //异步请求
    this.$http.post('/index/banner_index',{
      token:1111,
    })
    .then((response) => {
       // console.log(response.data);

    },error=>{
      // console.error(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
