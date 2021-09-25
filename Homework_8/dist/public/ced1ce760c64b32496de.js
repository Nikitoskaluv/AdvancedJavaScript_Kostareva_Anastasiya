Vue.component('filter-el', {
  data() {
    return {
      userSearch: ''
    };
  },

  template: `  <form action="#" class="search-form">
    <input class="field_input" type="text" v-model="userSearch">
    <button class="search-button" type="button" @click="$parent.$refs.products.filter(userSearch)">Искать</button>
    </form>`
});