var about = document.getElementById('my-info')
var numpx = '150';

window.addEventListener('scroll', function() {
    if (window.scrollY > numpx) {
        about.classList.add('animation');
    } else {
        about.classList.remove('animation');
    }
});