$('.navbar__toggle').click(function () {
    $('.navbar__links').toggleClass('navbar__remove')
})

$('.plan-info__items').hide()

$('.plan-info__toggle').click(function () {
    $('.plan-info__toggle').hide()
    $('.plan-info__items').addClass('fade-in').slideDown(300)
})