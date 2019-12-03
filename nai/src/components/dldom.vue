<template>
  <div class="wrapper">
     <dl @click="fn">
         <dt><img v-lazy="img" alt=""/></dt>
         <dd>
             <p>{{title}}</p>
             <p class="aa">￥{{price}}</p>
             <p>以销量{{sold}}件</p>
         </dd>
     </dl>
  </div>
</template>
<script>
export default {
props:["id","title","img","sold","quantity","price","sum"],
methods:{
    fn(){
     this.$router.push({name:"/xq",query:{id:this.id}})
    }
}
}
</script>

<style scoped>
.wrapper img{
width: 150px;
height: 150px;
}
.wrapper p{
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.aa{
    color: red;
}

</style>