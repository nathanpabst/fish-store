const loadFishes = (sucessFunction, errorFunction) => {
  $.get('../db/fishes.json')
    .done(sucessFunction)
    .fail(errorFunction);
};

module.exports = loadFishes;
