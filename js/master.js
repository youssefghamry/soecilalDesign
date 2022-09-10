    //start background images
    // select landing page element
    let landingPage = document.querySelector(".landing-page");

    //get array of imgs
    let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"];

    //random background option
    let rbgo = true;

    // variable to control the interval
    let vci;

    // check if there's local storage random background item

    /*
    let backgroundLocalItem = localStorage.getItem('background_option');
           //check if random background local storage is not empty
            //تخزين قيمة
            if (backgroundLocalItem !== null) {
                console.log('not empty');
            }
        */
    // function to randomize imgs
    function randomizeImgs() {

        if (rbgo === true) {

            vci = setInterval(() => {

                // get random number
                let randomNumber = Math.floor(Math.random() * imgsArray.length);

                // change background imags URL
                landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
            }, 5000);

        }
    }
    randomizeImgs();
    /*
        setInterval(() => {

            // get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // change background imags URL
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
        }, 1000);

        //end background images
        */

    // 13
    //images
    //let images = document.getElementById('div55');
    // images.innerHTML = document.images.length; // عدد الصور
    // images.innerHTML = document.images[1].src = 'images/Investment data-amico/a4.svg'; // لينك الصورة
    // for (i = 0; i < document.images.length; i++) {
    //     document.write(document.images[i].src + '<br>');
    // }



    // document.querySelector('.button2').onclick = function() {
    //     images.innerHTML = document.images[1].src = 'images/Investment data-amico/a2.svg';
    // }