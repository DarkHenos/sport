const cardContainer = document.querySelector('.card-container.sortable');

new Sortable(cardContainer, {
  ghostClass: 'sortable-ghost',
  chosenClass: 'sortable-chosen',
  dragClass: 'sortable-drag',
  filter: '.add-section',
  preventOnFilter: false,
  draggable: '.card:not(.add-section)',
  sort: true,
  animation: 150,
  store: {
    set: (sortable) => {
      const order = sortable.toArray();
      localStorage.setItem('card-order', order.join(','));
    },
    get: () => {
      const order = localStorage.getItem('card-order');
      return order ? order.split(',') : [];
    },
  },
  onEnd: (evt) => {
    const addSection = cardContainer.querySelector('.add-section');
    if (evt.to !== addSection) {
      cardContainer.appendChild(addSection);
    }
  },
  pull: false
});
