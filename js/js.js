const addButton = document.getElementById('add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('.total-calories');
const list = document.querySelector('#item-list');
let total = 0;




addButton.addEventListener('click', (event)=>{
    let mealName = foodName.value;
    let mealCalories = parseInt(foodCalories.value);
    total = total + mealCalories;
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Food: ${mealName}. Calories: ${mealCalories}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    foodName.value = '';
    foodCalories.value = '';

    console.log('Food:', typeof(mealName));
    console.log('Calories', typeof(mealCalories));
    console.log('Total:', total);


    event.preventDefault();
});