// handle Active state
function handleActive(ev) {
    //remove active class from all childrens
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {

        element.classList.remove('active');
    });

    //add active class on self
    ev.target.classList.add('active');
}