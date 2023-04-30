const blockConfigBtn = document.querySelector('#motivation-icon');
const blockSizeModal = document.querySelector('#block-size-modal');
const applyBtn = document.querySelector('#apply-block-size');
const cancelBtn = document.querySelector('#cancel-block-size');
const heightInput = document.querySelector('#block-size-modal input[type="number"]');
const sizeSelect = document.querySelector('#block-size-modal select');

blockConfigBtn.addEventListener('click', () => {
  blockSizeModal.classList.add('is-active');
});

applyBtn.addEventListener('click', () => {
  const height = heightInput.value;
  const size = sizeSelect.value;
  // Do something with the selected block size
  blockSizeModal.classList.remove('is-active');
});

cancelBtn.addEventListener('click', () => {
  blockSizeModal.classList.remove('is-active');
});
