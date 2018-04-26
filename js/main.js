$(function () {
   $(".video").click(function () {
       var modal = $(this).data("target");
       videoSRC = $(this).attr("data-video");
       videoSRCAuto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
       $(modal + ' iframe').attr('src',videoSRCAuto);
       $(modal + ' button.close').click(function () {
           $(theModal + ' iframe').attr('src', videoSRC);
       });
   });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.slider').slick({
   infinite:true,
    slideToShow : 1,
    slideToScroll: 1
});