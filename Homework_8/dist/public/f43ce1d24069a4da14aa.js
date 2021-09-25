// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
Vue.component('cart', {
  data() {
    return {
      cartUrl: '/getBasket.json',
      cartItems: [],
      imgCart: 'https://placehold.it/50x100',
      showCart: false
    };
  },

  mounted() {
    this.$parent.getJson(`/api/cart`).then(data => {
      for (let item of data.contents) {
        item.imgPath = `img/${item.id_product}.png`;
        this.$data.cartItems.push(item);
      }
    });
  },

  methods: {
    addProduct(item) {
      let find = this.cartItems.find(el => el.id_product === item.id_product);

      if (find) {
        this.$parent.putJson(`/api/cart/${find.id_product}`, {
          quantity: 1
        }).then(data => {
          if (data.result === 1) {
            find.quantity++;
          }
        });
      } else {
        const prod = Object.assign({
          quantity: 1
        }, item);
        this.$parent.postJson(`/api/cart`, prod).then(data => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },

    remove(item) {
      this.$parent.getJson(`${API}/addToBasket.json`).then(data => {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        }
      });
    }

  },
  template: `<div class="cart_area">
<button class="cart-button" type="button" @click="showCart = !showCart">Корзина</button>
        <div class="cart-block" v-show="showCart">
        <p v-if="!cartItems.length">Корзина пуста</p>
            <cart-item v-for="item of cartItems" 
            :key="item.id_product" 
            :img="item.imgPath"
            :cart-item="item" 
            @remove="remove"
            @add="addProduct">
            </cart-item>
        </div>
        </div>
    `
});
Vue.component('cart-item', {
  props: ['img', 'cartItem'],
  template: `
    <div class="cart-item">
    <div> 
    <img :src="img" alt="image" class="cartImg">
    <p class=" product-title">{{ cartItem.product_name }}</p>
    </div>
   <div>
   <p class="product-single-price">Цена за ед. товара:{{ cartItem.price }}</p>
    <p>Количество:{{ cartItem.quantity}}</p>
    <p>Цена:{{ cartItem.quantity*cartItem.price}}</p>
    <button class="delete_btn" @click="$emit('remove', cartItem)">Удалить</button>
   </div>
    
    
    </div>
    `
});