//==== JQ MASK ====//

$('[name="phone"]').mask('+7(999) 999-9999')

//==== ACCORDEON ====//

$('.question-block').on('click', function () {
    $(this).toggleClass('active');
    let tabName = $(this).attr('data-tab')
    $('.question-block__content').each(function () {
        if ($(this).hasClass(tabName)) {
            $(this).slideToggle()
        }
    })
})
//==== BURGER ====//

$('.burger').on('click', function () {
    $('.burger-menu').addClass('active')
})
$('.burger-close').on('click', function () {
    $('.burger-menu').removeClass('active')
})

//==== TABS ====//

$('.tab').on('click', function () {
    let currentTab = $(this).attr('data-tab')
    let currentSlide = $(this).attr('data-index')
    $('.tab-item').removeClass('active')
    $(`.${currentTab}`).addClass('active')
    $('.owl-carousel').slick('slickGoTo', currentSlide);

})

//==== SLIDER ====//

$(document).ready(function () {
    $('.owl-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

//==== MODAL ====//

$('.modal-open').on('click', function () {
    $('.modal').addClass('active')
    $('.error').addClass('active')
    // setTimeout(() => {
    //     $('.error').removeClass('active')
    // }, 2000);
})
$('.modal-close').on('click', function () {
    $('.modal').removeClass('active')
    $('.error').addClass('active')
    // setTimeout(() => {
    //     $('.error').removeClass('active')
    // }, 2000);
})

//==== TEST ====//

$(document).scroll(function () {
    body = $(window).scrollTop();
    block = $("#step").offset().top;
    if (body > block - 200) {
        console.log('yes')
        $('.svg').addClass('active')
        setTimeout(() => {
            $('.one').css('opacity', '1')
        }, 200);
        setTimeout(() => {
            $('.circ.two').css('opacity', '1')
        }, 400);
        setTimeout(() => {
            $('.circ.three').css('opacity', '1')
        }, 600);
        setTimeout(() => {
            $('.circ.for').css('opacity', '1')
        }, 800);
        setTimeout(() => {
            $('.circ.five').css('opacity', '1')
        }, 1000);
        setTimeout(() => {
            $('.circ.six').css('opacity', '1')
        }, 100);
        setTimeout(() => {
            $('.circ.seven').css('opacity', '1')
        }, 500);
    }
});