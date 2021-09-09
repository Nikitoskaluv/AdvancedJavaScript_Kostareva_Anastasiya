Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        <div class="cart" v-show="visibility">
        <p v-if="!cartItems.length">Корзина пуста</p>
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="$root.imgCart" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
            <div class="cart-item">
            <img :src="$root.imgCart" alt="image">
            <p class=" product-title">{{ cartItem.product_name }}</p>
            <p class="product-single-price">Цена за ед. товара: {{ cartItem.price }}</p>
            <p>Количество:{{ cartItem.quantity}}</p>
            <p>Цена:{{ cartItem.quantity*cartItem.price}}</p>
            <button class="delete_btn" @click="$root.remove(cartItem)">Удалить</button>
            </div>`
});





