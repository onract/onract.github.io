document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('clicked'); // Toggle clicked class
    });
});
