<template>
   <div class="app">
       <x-header>添加新地址<a slot="right" @click="postform()">保存</a></x-header>
  <form action="">
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>
    <group>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group>
    <x-address :title="title"   v-model="value_0_1" :list="addressData" placeholder="请选择地址">
      <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span style="vertical-align:middle;">所在地区</span>
        </span>
      </template>
    </x-address>
    </group>
    <group>
      <x-input :placeholder="('详细地址')"></x-input>
      <x-textarea :max="200" name="description" :placeholder="('')"></x-textarea>
    </group>
  </form>
  <group>
    <x-switch title="设为默认" ></x-switch>
  </group>
</div>
   
</template>
<script>
import {
  Group,
  XAddress,
  ChinaAddressV4Data,
  XButton,
  Cell,
  Value2nameFilter as value2name,
  XHeader,
  XInput,
  XTextarea,
  XSwitch
} from "vux";

export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell,
    XHeader,
    XInput,
    XTextarea,
    XSwitch
  },
  data() {
    return {
      title: "默认为空",
      value_0_1: [],
      addressData: ChinaAddressV4Data
    };
  },
  methods: {
    postform(){
      console.log(this.form)
    }
  },
  created(){
      this.postform()
  }
};
</script>
<style scoped>

</style>

