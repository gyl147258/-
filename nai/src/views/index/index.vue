<template>
  <div class="wrapper">
    <div class="head">
      <span>牛奶</span>
      <input type="text" placeholder="请输入商品" />
      <span>...</span>
    </div>
    <div class="tou">
      <router-link to="/zh">综合</router-link>
      <router-link to="/new">上新</router-link>
      <span @click="xiao">销量</span>
      <span>价格</span>
      <span @click="pai">排序</span>
    </div>
    <div class="main">
      <router-view :class="{som:flag}" :flag1="flag1"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:true,
      flag1:false,
    }
  },
  methods:{
    pai(){
      this.flag=!this.flag
    },
    xiao(){
      this.flag1=!this.flag1
    },
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.head input {
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  text-indent: 1rem;
}
.tou{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.router-link-active{
  color: red;
}
.som{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>