    //  6 &
    // start settings box
    //toggle spin class on icon
    document.querySelector('.toggle-settings .fa-gear').onclick = function() {
        //toggle class fa-spin for rotation ON self
        this.classList.toggle('fa-spin');
        //toggle class open ON  main settings-box
        document.querySelector('.settings-box').classList.toggle('open');
    }

    // end settings box

    //check if there's local storage color option
    let mainColors = localStorage.getItem('color_option');

    // console.log(mainColors);

    // if (mainColors !== null) {

    //     // console.log('yes');
    //     // console.log(localStorage.getItem('color_option'));

    //     document.documentElement.style.setProperty('--main-color', mainColors);

    //     //remove active class from all colors list itm
    //     document.querySelectorAll('.colors-list li').forEach(element => {

    //         element.classList.remove('active');

    //         //add active class on element with data color === local storage it
    //         if (element.dataset.color === mainColors) {

    //             // add active class
    //             element.classList.add('active');
    //         }
    //     });

    // }

    // switch colors
    const colorsLi = document.querySelectorAll('.colors-list li');
    //    console.log(colorsLi);
    //loop ON All list itms
    colorsLi.forEach(li => {

        //console.log(li);

        //click ON every list itms
        li.addEventListener('click', (e) => {

            //   console.log(e.target.dataset.color);

            //set color ON root
            document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

            //set color on local storage
            localStorage.setItem('color_option', e.target.dataset.color);

            //remove active class from all childrens
            e.target.parentElement.querySelectorAll('.active').forEach(element => {

                element.classList.remove('active');
            });

            //add active class on self
            e.target.classList.add('active');
        });
    });