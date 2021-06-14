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