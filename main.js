// Get the modal
const modal = getElementbyid("modal");

// Get the button that opens the modal
const btnClickMe = getElementbyid("btn-click-me");
// When the user clicks on the "click me" button, open the modal
btnClickMe.onclick = showModal("Are you sure to continue?");


// Get the element that closes the modal
const closeEle = getElementbyid("close");
// When the user clicks on (x), close the modal
closeEle.onclick = closeModal();

// Get the "Yes" button
const yesBtn = getElementbyid("btn-yes");
// When the user clicks on "Yes" button, close modal and show the text in main container
yesBtn.onclick = closeModal(`You just clicked "Yes"`);

// Get the "No" button
const noBtn = getElementbyid("btn-cancel");
// When the user clicks on "Cancel" button, close modal and show the text in main container
noBtn.onclick = closeModal(`You just clicked "Cancel"`);


/**
 * To show modal and render given text in the modal
 * @param {string} textInModal - Text to render in the Modal
 * @returns function to be called once given event gets triggered
 */
function showModal(textInModal) {
    return function () {
        // show the modal
        modal.style.display = "block";
        // get modal text element
        const modalTextEle = getElementbyid("modal-text");
        // render given text in the element
        modalTextEle.innerHTML = textInModal;
    }
}


/**
 * To close modal and show the response text in the main page
 * @param {string} responseText - Response text to be rendered after closing modal on the main page. 
 *  You can pass nothing if you don't want to render anything after closing the modal.
 * @returns function to be triggered once given event gets triggered
 */
function closeModal(responseText) {
    return function () {
        // hide the modal
        modal.style.display = "none";
        // get the element to render response text
        const responseTextEle = getElementbyid("response");
        // if we have something to render then render or else empty string
        responseTextEle.innerHTML = responseText || "";
    }
}

/**
 * Get element of given ID
 * @param {string} id - id of element
 * @returns DOM element
 */
function getElementbyid(id) {
    return document.getElementById(id);
}



