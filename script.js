document.addEventListener("DOMContentLoaded", function()  {
    gsap.from("header h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".title", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
    gsap.from("section", { duration: 1, opacity: 0, stagger: 0.3 });
    gsap.from("h5,h2", { duration: 1, y: -50, opacity: 0 });
    gsap.from("p", { duration: 1, y: -50, opacity: 0, delay: 0.5 });


});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

