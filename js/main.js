var scrollToHash = function (hash) {
    $(document.body).scrollTop($(hash).offset().top);
}


// Invert Nav Color
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    var projectsElem = document.querySelector(".projects")
    var offsetTop = projectsElem.offsetTop;
    var offsetBottom = projectsElem.offsetTop + projectsElem.offsetHeight

    if (scroll < offsetBottom && scroll > offsetTop) {
        $(".nav").addClass("nav-inverted")
    } else {
        $(".nav").removeClass("nav-inverted")
    }

});