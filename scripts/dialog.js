const saveButton = document.querySelector('.more-button');
const dialog = document.getElementById('save-dialog');
const dialogCloseButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});

dialogCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
});

dialog.addEventListener('submit', (event) => {
  event.preventDefault();
});

dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  dialog.close();
});
