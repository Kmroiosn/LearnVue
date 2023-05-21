import axios from 'axios';

import * as types from './mutation-types';

const state = {
    productItems: [],
};

const mutations = {
    [types.UPDATE_PRODUCT_ITEMS](state, payload) {
        state.productItems = payload;
    },
};

const actions = {
    // ES6 destructuring, 直接使用 context.commit
    getProductItems({ commit }) {
        axios.get('/api/products').then(response => {
            commit(types.UPDATE_PRODUCT_ITEMS, response.data)
        });
    },
};

const getters = {
    productItems: state => state.productItems
};

const productModule = {
    state,
    mutations,
    actions,
    getters
};

export default productModule;