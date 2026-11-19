const saveButton = document.querySelector('.more-button');
const dialog = document.getElementById('save-dialog');
const dialogCloseButton = document.querySelector('.dialog__button');

saveButton.onclick = () => dialog.showModal();

dialogCloseButton.onclick = () => dialog.close();
