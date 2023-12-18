

const aboutGorTabs = () => {
    var $ = require('jquery');

    $(".about-accordeon__inner .about-accordeon__link").bind("click", function() {
      $(".about-accordeon__inner .about-accordeon__link").removeClass("hovered");
      $(this).addClass("hovered");
    });
}

export default aboutGorTabs