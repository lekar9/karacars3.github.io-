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