const addButton = document.getElementById('add');
const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector('#item-list');
let total = 0;




addButton.addEventListener('click', (event)=>{
    let itemmName = itemName.value;
    let itemmPrice = parseInt(itemPrice.value);
    total = total + itemmPrice;
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Item: ${itemmName}. Price: ${itemmPrice}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    itemName.value = '';
    itemPrice.value = '';

    console.log('Item:', typeof(itemmName));
    console.log('Price', typeof(itemmPrice));
    console.log('Total:', total);


    event.preventDefault();
});