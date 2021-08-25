class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods_card">
        <img class="good_item_img" src="${this.img}" alt="good_img">
        <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="goods_card_button">Добавить</button>
        </div>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'https://picsum.photos/180/180?random=1' },
            { title: 'Socks', price: 50, img: 'https://picsum.photos/180/180?random=2' },
            { title: 'Jacket', price: 350, img: 'https://picsum.photos/180/180?random=3' },
            { title: 'Shoes', price: 250, img: 'https://picsum.photos/180/180?random=4' },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        list.sum();
    }
    sum() {
        let sum = 0;
        this.goods.forEach(good => {return sum += good.price});
        let sumString = `<div class="sum_area"><h3 >Общая сумма:</h3><p>${sum}</p></div>`;
        document.querySelector('.goods-list').insertAdjacentHTML('afterend', sumString);
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();


// class ShopingCart{
    //метод,который будет считать сумму всех товаров 
//     totalSum();
    // метод,который очистит корзину
//     clear();
// }



// class ShopingCartItem extends GoodsItem {
//     //в корзине у каждого товара будет указано название,цена за одну единицу, изображение товара, количество заказанных товаров
//     constructor(title, price, img, amount) {
//         super(title, price, img)
//         this.amount = amount;
//     }
//     delete()//метод,который позволит удалить товар из корзины

//     changeAmount()//изменить количество товаров

//     getDiscount()//применить скидку к стоимости товара
