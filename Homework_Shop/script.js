const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';




class GoodsList {
    constructor() {
        this.goods = [];
        this.AllGoods = [];
        this.fetchGoods();

    }
    fetchGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.goods = [...data];
                this.render();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        list.sum();
    }
    sum() {
        let sum = 0;
        this.goods.forEach(good => { return sum += good.price });
        let sumString = `<div class="sum_area"><h3 >Общая сумма:</h3><p>${sum}</p></div>`;
        document.querySelector('.goods-list').insertAdjacentHTML('afterend', sumString);
    }
}

class GoodsItem {
    constructor(product, img = 'https://picsum.photos/180/180?random=1') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="goods_card" data-id="${this.id}">
        <img class="good_item_img" src="${this.img}" alt="good_img">
        <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="goods_card_button">Добавить</button>
        </div>
        </div>`;
    }
}

const list = new GoodsList();


class ShopingCart {
    constructor() {
        this.goods = [];
        this.fetchGoodsCart();
        this.clickBasket();
    }
    fetchGoodsCart() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                this.goods = [...data.contents];
                this.render();
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let listHtml = '';
        this.goods.forEach(product => {
            const goodItem = new ShopingCartItem();
            listHtml += goodItem.render(product);
        });
        document.querySelector('.cart').insertAdjacentHTML("afterbegin", listHtml);
    }

    clickBasket() {
        document.querySelector(".cart-button").addEventListener('click', () => {
            document.querySelector('.cart').classList.toggle('invisible');
        });
    }
}


class ShopingCartItem {
    render(product) {
        return `<div class="cart-item" data-id="${product.id_product}">
                <img src="${product.img = "https://picsum.photos/180/180?random=1"} alt = "image"">
                <p class="product-title">${product.product_name}</p>
                <p class="product-single-price">${product.price}</p>
            </div >
            `
    }
}

let shopingCart = new ShopingCart();
