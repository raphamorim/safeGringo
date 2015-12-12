function bootAutoComplete() {
  $('#search input').autocomplete({
    minChars: 3,
    serviceUrl: '/api/search',
    transformResult: function(response) {
      return {
        suggestions: $.map(JSON.parse(response).suggestions, function(place) {
          return { value: place.name, data: place.type }
        })
      };
    }
  });
}

bootAutoComplete();