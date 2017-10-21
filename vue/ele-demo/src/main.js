import Vue from 'vue';
import map from './map.vue';
import mapStore from './store/mapStore.js';
Vue.use(mapStore);

new Vue({
    el: '#mapStore',
    store:mapStore,
    render: h => h(map)
});
