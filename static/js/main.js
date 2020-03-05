$(document).ready(function(){

    // homepage side nav
    $(".list-group-item").click(function() {
        let thisID = $(this).attr("id");
        $(".animal-card").hide();
        $("." + thisID).show();
    });

    $("#Amphibians").click(function(){
        $("#animalsTitle").text(" - Amphibians");
    });
    $("#Birds").click(function(){
        $("#animalsTitle").text(" - Birds");
    });
    $("#Fish").click(function(){
        $("#animalsTitle").text(" - Fish");
    });
    $("#Invertebtrates").click(function(){
        $("#animalsTitle").text(" - Invertebtrates");
    });
    $("#Mammals").click(function(){
        $("#animalsTitle").text(" - Mammals");
    });
    $("#Reptiles").click(function(){
        $("#animalsTitle").text(" - Reptiles");
    });

});
