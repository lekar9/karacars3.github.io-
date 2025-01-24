let dropdownTimeout;
let hideTimeout;
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdownTimeout = setTimeout(() => {
        dropdownContent.classList.add('show');
    }, 200);
});
dropdown.addEventListener('mouseleave', () => {
    clearTimeout(dropdownTimeout);
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 200);
});
dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});
dropdownContent.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 200);
});


let itemPrice = 0;
function openOrderMenu(item, price) {
    itemPrice = price;
    document.getElementById('orderItem').innerText = 'Вы выбрали: ' + item;
    document.getElementById('itemPrice').innerText = itemPrice;
    document.getElementById('itemQuantity').value = 1;
    document.getElementById('totalPrice').innerText = itemPrice;
    document.getElementById('orderMenu').style.display = 'flex';
}
function closeOrderMenu() {
    document.getElementById('orderMenu').style.display = 'none';
}
function calculateTotal() {
    const quantity = document.getElementById('itemQuantity').value;
    const total = itemPrice * quantity;
    document.getElementById('totalPrice').innerText = total;
}
function submitOrder() {
    alert('Заказ оформлен на сумму: ' + document.getElementById('totalPrice').innerText + '₽.');
    closeOrderMenu();
}