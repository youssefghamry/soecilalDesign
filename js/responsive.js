//toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let toggleLinks = document.querySelector('.links');

toggleBtn.onclick = function() {
    this.classList.toggle('active');
    toggleLinks.classList.toggle('open');
};

//click anywhere outside menu and toggle button
document.addEventListener('click', (e) => {
    //  console.log(e.target);

    if (e.target !== toggleBtn && e.target !== toggleLinks) {

        //check if menu is open
        if (toggleLinks.classList.contains('open')) {
            toggleBtn.classList.toggle('active');
            toggleLinks.classList.toggle('open');
        }
    }

});