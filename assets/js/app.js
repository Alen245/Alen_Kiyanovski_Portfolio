document.getElementById('burger-menu').addEventListener('click', function () {
    const navigation = document.querySelector('.navigation');
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
});
