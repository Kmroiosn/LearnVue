<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item"
      v-for="productItem in productItems"
      :key="productItem.id">
        <productListItem :productItem="productItem"></productListItem>
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
import ProductListItem from './ProductListItem'

export default {
  name: 'ProductList',
  // 创建组件时从服务器获取商品信息
  created() {
    // 从 $store 中调度 actions
    this.$store.dispatch("getProductItems");
  },
  // 可以通过直接使用 mapGetter赋值避免数据拷贝
  computed: mapGetters({
    productItems: "productItems",
  }),
  components: {
    ProductListItem
  }
};
</script>

<style scoped>

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
