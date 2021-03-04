$(document).ready(function () {
    $("body").on("click", ".languages>.current-language", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $(".languages>.languages-list").toggle();
    });
    $("body").on("mouseover", ".dropdown-toggle", function () {
        let $this = $(this);
        setTimeout(function () {
            $(".dropdown-menu").hide();
            $this.next(".dropdown-menu").show();
        }, 500);
    });
    $("body").on("mouseover", function () {
        $(".dropdown-menu").hide();
    });
    $("body").on("mouseover", ".dropdown-menu", function (ev) {
        ev.stopPropagation();
    });
    $("body").on("click", ".header--search-icon", function () {
        $(".header--search-control").toggle();
    });
    $("body").on("click", ".navbar-toggle", function () {
        $("#headerNav").css("left", "0px");
    });
    $("body").on("click", "#headerNav", function () {
        $("#headerNav").css("left", "-300px");
    });

    $('.current-language').on('click', function () {
        if ($('.languages-list').hasClass('active')) {
            $('.languages-list').removeClass('active')
        } else {
            $('.languages-list').addClass('active')
        }
    })

    $('.tabs').on('click', function () {
        let tabsIcon = $(this).find('img').attr('src')
        let tabsCurrent = $(this).data('tab')
        $('.tabs-icon').find('img').attr('src', tabsIcon)
        $('.language-tabs').removeClass('active')
        $('.language-tabs').each(function () {
            if ($(this).hasClass(tabsCurrent)) {
                $(this).addClass('active')
            }
        })
    })
});
