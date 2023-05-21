import { createStore } from 'vuex';

import product from './modules/product';
import cart from './modules/cart';

export default createStore({
    // Vuex中的Module:
    // 将状态保存在不同的模块中，通过 $store.state.moduleName 进行访问
    //
    // 默认情况下，每个模块的 mutations, actions, getters 都是未划分命名空间的
    // 例如直接使用 $store.getters.getterName 即可获取，
    // 但当模块中有相同名字的属性时就出问题了
    // 解决方法：在模块中显示地声明属性 namespaced: true
    modules: {
        product,
        cart
    },
});