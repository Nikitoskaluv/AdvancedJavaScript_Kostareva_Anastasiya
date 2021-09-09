Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                 <product v-for="item of products" 
                 :key="item.id_product" 
                 :img="$parent.imgProduct"
                 :product="item"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
                <div class="goods-item">
                 <img :src="$root.imgProduct" alt="image">
                 <h3>{{ product.product_name }}</h3>
                 <p>{{ product.price }}</p>
                 <button class="goods_card_button" @click="$parent.$emit('add-product', product)">Добавить</button>
             </div>`
});
