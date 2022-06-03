$('.navbar__toggle').click(function () {
    $('.navbar__links').toggleClass('navbar__remove')
})

$('.header__popup').hide()

$('.header-btn__try').click(function () {
    $('.header__popup').fadeIn()
})

$('.header__popup--cancel').click(function() {
    $('.header__popup').fadeOut()
})

$('.plan-info__items').hide()

$('.plan-info__toggle').click(function () {
    $('.plan-info__toggle').hide()
    $('.plan-info__items').addClass('fade-in').slideDown(300)
})