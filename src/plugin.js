import Clock from './vue-pagination.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-pagination', Pagination);
  }
};
