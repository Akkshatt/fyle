$(document).ready(function() {
    // Slider functionality
    let currentSlide = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const numSlides = slides.length;

    function showSlide(n) {
        slides.hide();
        dots.removeClass('active');
        slides.eq(n).fadeIn();
        dots.eq(n).addClass('active');
    }

    showSlide(currentSlide);

    $('.dot').click(function() {
        currentSlide = $(this).index();
        showSlide(currentSlide);
    });

    // Project section functionality
    $('.project-info').click(function() {
        const projectImage = $(this).siblings('.project-image').find('img');
        const newSrc = 'project-image-hover.jpg'; // Replace with the actual image path
        projectImage.attr('src', newSrc);
    });

    $('.project-info .read-more').click(function(e) {
        e.preventDefault();
        window.open('https://fylehq.com', '_blank');
    });

    // Growth cards hover effect
    $('.growth-card').hover(
        function() {
            $(this).addClass('highlighted');
        },
        function() {
            $(this).removeClass('highlighted');
        }
    );

    // Contact form popup
    $('.contact-btn').click(function(e) {
        e.preventDefault();
        $('.contact-form-popup').fadeIn();
    });

    $('.close-btn').click(function() {
        $('.contact-form-popup').fadeOut();
    });

    // Form submission
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        const formData = $(this).serialize();
        const endpoint = 'https://your-getform-endpoint.com'; // Replace with your getform.io endpoint

        $.ajax({
            type: 'POST',
            url: endpoint,
            data: formData,
            success: function() {
                alert('Form submitted successfully!');
                $('#contact-form')[0].reset();
                $('.contact-form-popup').fadeOut();
            },
            error: function() {
                alert('Error submitting the form. Please try again.');
            }
        });
    });
});