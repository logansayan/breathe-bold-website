$(document).ready(() => {

        // GO TO TOP BUTTON
        let topBtn = $(".go-top")
        topBtn.hide()

        topBtn.click(() => {
            topBtn.fadeOut()
        })

        // NAVBAR HIDE ON SCROLL
        const nav = $('.navbar')
        let lastScrollY = window.scrollY
    
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                nav.slideUp(200)

                // Handle Navbar links
                $('.navbar__links').addClass('navbar__remove')

                // Handle Top button
                topBtn.fadeIn()
            } else {
                nav.slideDown(200)
            }
            lastScrollY = window.scrollY
        })
    
    
        // NAVBAR TOGGLE BUTTON
        $('.navbar__toggle').click(function () {
            $('.navbar__links').toggleClass('navbar__remove')
        })
    
    
        // OPEN TRY NOW BUTTON
        $('.header__popup').hide()
    
        $('.header-btn__try').click(function () {
            $('.header__popup').fadeIn()
        })
    
        // CLOSE TRY NOW BUTTON
        $('.header__popup--cancel').click(function() {
            $('.header__popup').fadeOut()
        })
    
        // PLAN INFO BUTTON
        $('.plan-info__items').hide()
    
        $('.plan-info__toggle').click(function () {
            $('.plan-info__toggle').hide()
            $('.plan-info__items').addClass('fade-in').slideDown(300)
        })
})