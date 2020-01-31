// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(window).resize(function () {
    var width = $(window).width();

    if (width < 730) {
        $('#header').html('<nav class="links" id="menuheader" style="--items: 5;"><i style="font-size:56px;padding-right: 7px;padding-left: 20px;" class="material-icons">list</i></nav>').change();

    } else {
        $('#header').html('<nav class="links" id="menuheader" style="--items: 5;"><a class="font-weight-bolder " href="/Home">Runeterra BR</a><a href="/Cartas">Cartas</a><a href="/Decks">Decks</a><a href="#">Sla</a> <a href="#">Sobre</a><span class="line"></span></nav>').change();




    }

});