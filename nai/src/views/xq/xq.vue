<template>
  <div>
    <dl>
      <dt>
        <img v-lazy="list.img" alt />
      </dt>
      <dd>
        <p>{{list.title}}</p>
        <p class="aa">￥{{list.price}}</p>
        <p>以销量{{list.sold}}件</p>
      </dd>
      <div class="top">
        <button @click="jian">-</button>
        <span>{{list.quantity}}</span>
        <button @click="jia">+</button>
      </div>
      <div class="button">
        <button @click="che">加入购物车</button>
        <li>结算：{{list.sum}}元</li>
      </div>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    jia() {
      this.list.quantity++;
      this.list.sum = this.list.price * this.list.quantity;
    },
    jian() {
      if (this.list.quantity > 1) {
        this.list.quantity--;
        this.list.sum = this.list.price * this.list.quantity;
      } else {
        this.list.quantity = 0;
        let aa = window.confirm("确定删除吗？");
        if (aa) {
          this.list = "";
        }
      }
    },
    che() {
      this.$store.commit("add", { obj: this.list, id: this.$route.query.id });
      this.$router.push({ name: "/gou" });
    }
  },
  data() {
    return {
      list: {}
    };
  },
  mounted() {
    axios
      .get("/getxq", {
        params: {
          id: this.$route.query.id
        }
      })
      .then(res => {
        this.list = res.data[0];
      });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 300px;
}
.aa {
  color: red;
}
button {
  width: 80px;
  height: 40px;
  background: red;
  border: none;
  color: white;
}
span {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.button {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
}
.button li {
  width: 100px;
  height: 40px;
  line-height: 40px;
}
</style>