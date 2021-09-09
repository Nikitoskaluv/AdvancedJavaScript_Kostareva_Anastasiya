Vue.component('search', {

    // data() {
    //     return {
    //         userSearch: ''
    //     };
    // },
    template:
        `  <form action="#" class="search-form">
        <input class="field_input" type="text" v-model="$parent.userSearch">
        <button class="search-button" type="button" @click="$parent.filterGoods($parent.userSearch)">Искать</button>
        </form>`
});