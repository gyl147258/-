<template>
  <div>
    <dl v-for="(item,index) in list" :key="index">
      <dt>
        <img :src="item.img" alt />
      </dt>
      <dd>
        <p>{{item.title}}</p>
        <p class="aa">￥{{item.price}}</p>
        <p>以销量{{item.sold}}件</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped>
img{
  width: 150px;
  height: 80px;
}
</style>