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

$(".tip-container").isotope({
  // options
  itemSelector: ".tip",
  layoutMode: "masonry",
  filter: ".iphone, .mac, .all"
});

$("#device-selector-phone").change(function() {
    var deviceSelectors = $("#device-selector-computer").val() + ",.all," + $(this).val();
    $(".tip-container").isotope({ filter: deviceSelectors });
});

$("#device-selector-computer").change(function() {
    var deviceSelectors = $("#device-selector-phone").val() + ",.all," + $(this).val();
    $(".tip-container").isotope({ filter: deviceSelectors });
});

$(".tip a").click(function() {
    $("#video-modal").foundation("open", {
        data: {title: "value1", video: "value2"}
    });
    // return false;
});

