Sortable.create(document.querySelector('.sortable'), {
  animation: 150,
  chosenClass: 'sortable-chosen',
  dragClass: 'sortable-drag',
  ghostClass: 'sortable-ghost',
  filter: ".add-section",
  onEnd: function (evt) {
    // Move the "add-section" card to the end of the list
    if (evt.item.classList.contains("add-section")) {
      var list = evt.to;
      list.appendChild(evt.item);
    }
  },
  store: {
    set: function (sortable) {
      var order = sortable.toArray();
      localStorage.setItem('sortableCardsOrder', JSON.stringify(order));
    },
    get: function () {
      var order = localStorage.getItem('sortableCardsOrder');
      return order ? JSON.parse(order) : [];
    }
  }
});
