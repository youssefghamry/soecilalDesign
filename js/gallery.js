    //create popup with the image
    let ourGallery = document.querySelectorAll('.gallery img');
    //loop
    ourGallery.forEach(img => {
        img.addEventListener('click', (e) => {
            //create overlay element
            let overlay = document.createElement('div');
            //add class to overlay
            overlay.className = 'popup-overlay';
            //append overlay to the body
            document.body.appendChild(overlay);
            //create the popup box
            let popupBox = document.createElement('div');
            //add class to the popup box
            popupBox.className = 'popup-box';
            // what the alt to img
            if (img.alt !== null) {
                // create heading 
                let imgHeading = document.createElement('h3');
                //create text for heading
                let imgText = document.createTextNode(img.alt);
                //append the text to the heading
                imgHeading.appendChild(imgText);
                //appand the heading to the popup box
                popupBox.appendChild(imgHeading);
            }
            //create the image
            let popupImage = document.createElement('img');
            //set Image Source
            popupImage.src = img.src;
            //add image to popup box
            popupBox.appendChild(popupImage);
            //append the popup box to body
            document.body.appendChild(popupBox);
            //create the close span
            let closeButton = document.createElement('span');
            //create the  close  button text
            let closeButtonText = document.createTextNode('X');
            // append text to close button
            closeButton.appendChild(closeButtonText);
            //add class to close button
            closeButton.className = 'close-button';
            //add close button to the popup box
            popupBox.appendChild(closeButton);
        });
    });
    //close popup
    document.addEventListener('click', function(e) {
        if (e.target.className == 'close-button') {
            // remove the current popup
            e.target.parentNode.remove();
            // remove overlay
            document.querySelector('.popup-overlay').remove();
        }
    });