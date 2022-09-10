// switch background option
const randomBackEl = document.querySelectorAll('.random-background span');
//loop ON All spans
randomBackEl.forEach(span => {


    //click ON every span
    span.addEventListener('click', (e) => {

        // console.log(e.target.dataset.color);

        //remove active class from all childrens
        e.target.parentElement.querySelectorAll('.active').forEach(element => {

            element.classList.remove('active');
        });

        //add active class on self
        e.target.classList.add('active');

        if (e.target.dataset.background === 'yes') {

            console.log('yes');

            rbgo = true;

            console.log(rbgo);

            randomizeImgs();

            // localStorage.setItem('background_option', true);

        } else {
            console.log('no');

            rbgo = false;

            console.log(rbgo);

            clearInterval(vci);

            // localStorage.setItem('background_option', false);
        }
    });
});