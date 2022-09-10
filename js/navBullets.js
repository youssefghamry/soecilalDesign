//select all bullets.


const allBullets = document.querySelectorAll('.nav-bullets .bullet');

allBullets.forEach(bullet => {
    bullet.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//show 
let bulletsSpan = document.querySelectorAll('.bullets-option span');
let bulletsontainer = document.querySelector('.nav-bullets');


bulletsSpan.forEach(span => {

    span.addEventListener('click', (e) => {
        if (span.dataset.display === 'show') {

            bulletsontainer.style.display = 'block';
            console.log('yes');

        } else {
            bulletsontainer.style.display = 'none';
            console.log('no');

        }
        handleActive(e);
    });
});

function handleActive(ev) {
    //remove active class from all childrens
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {

        element.classList.remove('active');
    });

    //add active class on self
    ev.target.classList.add('active');
}