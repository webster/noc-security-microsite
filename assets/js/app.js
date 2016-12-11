// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------

$('.tip-container').isotope({
  // options
  itemSelector: '.tip',
  layoutMode: 'fitRows',
  filter: '.iphone, .mac'
});

$('#device-selector-phone').change(function() {
    var device_selectors = $('#device-selector-computer').val() + ',' + $(this).val();
    $('.tip-container').isotope({ filter: device_selectors });
});

$('#device-selector-computer').change(function() {
    var device_selectors = $('#device-selector-phone').val() + ',' + $(this).val();
    $('.tip-container').isotope({ filter: device_selectors });
});

$('.tip a').click(function() {
    $('#video-modal').foundation('open', {
        data: {title: 'value1', video: 'value2'}
    });
    // return false;
});

