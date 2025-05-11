function burger_menu() {
    $(".page-container").css("display", "none");
    $(".burger-navbar-container").css("display", "flex").css("flex-direction", "row");
}

function switch_theme() {
    if (localStorage.getItem("theme") === "dark") {
        $("body").removeClass("dark-theme");
        localStorage.removeItem("theme");
    } else {
        $("body").addClass("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}

function set_toggle_theme() {
    $(".toggle-theme-button").on("click", function() {
        switch_theme();
    });
    $(".icon-menu").on("click", function() {
        burger_menu();
    });
}

function apply_theme() {
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark-theme");
    }
}

function set_go_back_burger() {
    $("#go-back-burger").on("click", function() {
        $(".page-container").css("display", "flex");
        $(".burger-navbar-container").css("display", "none");
    });
}

$(document).ready(function () {
    apply_theme();
    set_toggle_theme();
    set_go_back_burger();
});