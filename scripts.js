function filterCategory() {
    const category = document.getElementById('category').value;
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
