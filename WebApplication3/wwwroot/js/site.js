// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

    var tamanhoTela = $(window).width();

    if (tamanhoTela > 730) {

        $('#menucompact').hide(0.1);
        $('#menuheader').removeAttr('hidden');

    } else {

        $('#menuheader').hide(0.1);
        $('#menucompact').removeAttr('hidden');
    }

});


$(window).resize(function () {

    var width = $(window).width();

    if (width < 730) {
        $('#menucompact').removeAttr('hidden');
        $('#menuheader').hide("fast", "linear", showmenucompacted());

    } else {
        $('#menuheader').removeAttr('hidden');
        $('#menucompact').attr('hidden', true);
        $('#menuheader').fadeIn();
    }

});

function showmenucompacted() {
    $('#menucompact').fadeIn("slow", "swing");

};
