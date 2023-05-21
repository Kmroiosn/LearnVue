<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item">
        <div>
          <h2 class="has-text-weight-bold">The Fullstack Hoodie
            <span class="tag 
                is-primary
                is-pulled-right
                has-text-white">
              Add to Cart
            </span>
          </h2>
          <p>Lightweight, breathable hoodie with the Fullstack Crest.
          Guaranteed to keep you looking fresh while warm.</p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> 19.99
          </span>
        </div>
      </div>
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: 4</span>
    </div>
  </div>
</template>

<script>
// Vuex提供 mapGetters，避免连续的 this.$store.getters 引用
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  // 创建组件时从服务器获取商品信息
  created() {
    // 从 $store 中调度 actions
    this.$store.dispatch("getProductItems");
  },
  computed: {
    ...mapGetters([
      // 将 this.$store.getters.productItems 映射为 this.productItems
      "productItems",
    ]),
  },
};
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
