function bootAutoComplete() {
  $('#search input').autocomplete({
    serviceUrl: '/api/search',
    zIndex: '-1',
    deferRequestBy: 500,
    transformResult: function(response) {
      return {
        suggestions: $.map(JSON.parse(response).suggestions, function(suggestion) {
          return { value: suggestion.name.portuguese, data: suggestion.name.portuguese, rawSuggestion: suggestion }
        })
      };
    },
    onSearchComplete: function(query, suggestions) {
      $('.card-list .card').remove();
      if(suggestions.length === 0) {
        window.scrollTo(0,0);
        document.body.classList.add("no-search");
      } else {
        window.scrollTo(0,0);
        document.body.classList.remove("no-search");
      }

      var cards = $.map(suggestions, function(suggestion) {
        return suggestionMarkup(suggestion.rawSuggestion);
      });

      $('.card-list').append(cards);
    }
  });
}

function suggestionMarkup(suggestion) {
  var cardContainer = '<div class="card">' +
                      '<div class="card-image">' +
                      '<img src="' + suggestion.photos[0] + '" alt="' + suggestion.name.portuguese + '">' +
                      '</div>' +
                      '<div class="card-info">' +
                      '<div class="card-category">' +
                      '<h2>' + suggestion.name.portuguese + '</h2>' +
                      '<span>' + suggestion.name.english + '</span>' +
                      '<div class="description">' + _facts(suggestion.facts) + '</div>' +
                      '</div>' +
                      '<div class="card-analytics">' +
                        _cardAnalytics(suggestion.stealingOcurrences, suggestion.stealingOcurrences.dangerHours) +
                      '</div>' +
                      '</div>' +
                      '</div>';

  return cardContainer;
}

function _facts(suggestionFacts) {
  var items = '';

  $.map(suggestionFacts, function(suggestionFact) {
    items += '<li>' + suggestionFact + '</li>';
  });

  return '<ul>' + items + '</ul>';
}

function _cardAnalytics(stealingOcurrences, dangerHours) {
  var analytics = '<h3>Muggings near this local</h3>' +
                  '<p>' + stealingOcurrences.total + ' muggings, in the last 2 years *</p>' + _ul(dangerHours);

  return analytics;
}

function _ul(dangerHours) {
  var items = '';
    $.map(dangerHours, function(dangerHour) {
      items += '<li>' +
               '<div class="c100 p' + dangerHour.percent + ' small">' +
               '<span>' + dangerHour.percent + '%</span>' +
               '<div class="slice">' +
               '<div class="bar"></div>' +
               '<div class="fill"></div>' +
               '</div>' +
               '</div>' +
               '<p>' + dangerHour.prettyName + '</p>' +
               '</li>';
  });

  return '<ul class="seasons">' + items + '</ul>';
}

$(function() {
  bootAutoComplete();
});
