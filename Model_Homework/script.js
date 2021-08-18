const goods = [
    { title: undefined, price: undefined },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = "Товар отсутствует", price = "0") => {
    return `<div class="goods_card">
    <img class="good_item_img" src="http://unsplash.it/180/180?random&amp;gravity=center" alt="good_img">
    <div class="goods-item">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="goods_card_button">Добавить</button>
    </div>
    </div>`;

};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
};

renderGoodsList(goods);

