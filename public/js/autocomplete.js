function bootAutoComplete() {
  $('#search input').autocomplete({
    minChars: 3,
    serviceUrl: '/api/search',
    zIndex: '-1',
    transformResult: function(response) {
      return {
        suggestions: $.map(JSON.parse(response).suggestions, function(suggestion) {
          return { value: suggestion.name, data: suggestion.type, photo: suggestion.photos[0]}
        })
      };
    },
    onSearchComplete: function(query, suggestions) {
      $('.card-list .card').remove();

      var cards = $.map(suggestions, function(suggestion) {
        return suggestionMarkup(suggestion.value, suggestion.data, suggestion.photo);
      });

      $('.card-list').append(cards);
    }
  });
}

function suggestionMarkup(suggestionName, suggestionPoint, suggestionImageUrl) {
  var cardContainer = '<div class="card">' +
                      '<div class="card-category">' +
                      '<span>' + suggestionPoint + '</span>' +
                      '<h2>' + suggestionName + '</h2>' +
                      '</div>' +
                      '<div class="card-image">' +
                      '<img src="' + suggestionImageUrl + '" alt="suggestionName">'
                      '</div></div>';

  return cardContainer;
}

$(function() {
  bootAutoComplete();
});