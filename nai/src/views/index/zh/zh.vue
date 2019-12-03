<template>
  <div>
     <dldom v-for="(item,index) in list" 
     :key="index"
     :id="item.id"
     :title="item.title"
     :img="item.img"
     :sold="item.sold"
     :quantity="item.quantity"
     :price="item.price"
     :num="item.num"
     ></dldom>
  </div>
</template>

<script>
import axios from "axios"
import dldom from "../../../components/dldom"
export default {
  props:["flag1"],
 data(){
   return {
     list:[]
   }
 },
 components:{
   dldom
 },
 mounted(){
   axios.get("/list").then(res=>{
     this.list=res.data
   })
 },
 watch:{
   flag1(n,o){
     if(n){
       this.list.sort((a,b)=>{
         return a.sold-b.sold
       })
     }else{
        this.list.sort((a,b)=>{
         return b.sold-a.sold
       })
     }
   },
  
 }
}
</script>

<style scoped>

</style>