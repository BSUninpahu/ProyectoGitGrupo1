const slider = document.getElementById('slider');
const image = document.getElementById('image');

slider.addEventListener('input', function() {
    const value = this.value;
    image.style.width = value + 'px';
    image.style.height = value + 'px';
});
