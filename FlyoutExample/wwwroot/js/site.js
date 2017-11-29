// Write your JavaScript code.

/* Set the width of the side navigation to 250px */


$(".sidebar-flyout-item, .closebtn").on("click", function () {
    var menuWidth = $("#sidebar-flyout-mySidenav").css("width");
    var imenuWidth = parseInt(menuWidth);
    var url = $(this).attr("data-ph-ajax-path");
    var title = $(this).attr("data-ph-sidebar-title");
    var icon = $(this).attr("data-ph-sidebar-icon");
    var backgroundColor = $(this).css("background-color");


    if (imenuWidth > 0) {
        if (icon == null) {
            document.getElementById("sidebar-flyout-mySidenav").style.width = "0";
            $(".sidebar-flyout-left").css("margin-right", "0px");
        } else
        {

            $("#sidebar-flyout-mySidenav .panel-heading").css("background", backgroundColor);
            //$("#sidebar-flyout-mySidenav .closebtn").css("color", backgroundColor); 

            $("#sidebar-flyout-mySidenav .panel-title").html(" <i class='fa " + icon + "'></i> " + title);
            $(".sidebar-flyout-menu-content").empty();

            $.post(url, function (data) {
                $(".sidebar-flyout-menu-content").html(data);
            });
        }
    } else {
        $("#sidebar-flyout-mySidenav .panel-title").html(" <i class='fa " + icon + "'></i> " + title);
        $("#sidebar-flyout-mySidenav .panel-heading").css("background", backgroundColor);
        $(".sidebar-flyout-menu-content").empty();

        $.post(url, function (data) {
            $("#sidebar-flyout-mySidenav").html(data);
        });

        document.getElementById("sidebar-flyout-mySidenav").style.width = "250px";
        $(".sidebar-flyout-left").css("margin-right", "250px");
    }
});


$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$('.fab').hover(function () {
    $(this).toggleClass('active');
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})