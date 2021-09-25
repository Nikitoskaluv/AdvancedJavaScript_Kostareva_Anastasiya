const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        goods: [],
        filteredGoods: [],
        cartItems: [],
        imgCatalog: 'https://picsum.photos/180/180?random=1',
        imgCart: 'https://picsum.photos/120/120?random=1',
        searchLine: '',
        show: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json());
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    let find = this.cartItems.find(element => element.id_product === product.id_product);
                    if (find) {
                        find.quantity++;
                    } else {
                        const prod = Object.assign({ quantity: 1 }, product);
                        this.cartItems.push(prod);
                    }
                });
        },
        filterGoods() {
            let value = this.searchLine;
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        },
        remove(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }
                });
        },

    },
    mounted() {
        this.getJson(`${API}${this.cartUrl}`)
            .then(data => {
                for (let item of data.contents) {
                    this.cartItems.push(item);
                }
            });
        this.getJson(`${API}${this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.goods.push(item);
                    this.filteredGoods.push(item);
                }
            });
        // this.getJson('getProducts.json')
        //     .then(data => {
        //         for (let el of data) {
        //             this.filteredGoods.push(el);
        //         }
        //     });
    }
});
