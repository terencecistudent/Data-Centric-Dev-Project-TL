$(document).ready(function(){

    // homepage side nav categorising animal types
    $(".list-group-item").click(function() {
        let thisID = $(this).attr("id");
        $(".animal-card").hide();
        $("." + thisID).show();
    });

    /*
        all animals page sub heading include animal type
        side bar nav removes white text for any button not selected
    */
    $("#Amphibians").click(function() {
        $("#animalsTitle").text(" - Amphibians");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Birds").addClass("text-white").removeClass("text-danger");
        $("#Fish").addClass("text-white").removeClass("text-danger");
        $("#Invertebrates").addClass("text-white").removeClass("text-danger");
        $("#Mammals").addClass("text-white").removeClass("text-danger");
        $("#Reptiles").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });
    $("#Birds").click(function() {
        $("#animalsTitle").text(" - Birds");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Amphibians").addClass("text-white").removeClass("text-danger");
        $("#Fish").addClass("text-white").removeClass("text-danger");
        $("#Invertebrates").addClass("text-white").removeClass("text-danger");
        $("#Mammals").addClass("text-white").removeClass("text-danger");
        $("#Reptiles").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });
    $("#Fish").click(function() {
        $("#animalsTitle").text(" - Fish");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Amphibians").addClass("text-white").removeClass("text-danger");
        $("#Birds").addClass("text-white").removeClass("text-danger");
        $("#Invertebrates").addClass("text-white").removeClass("text-danger");
        $("#Mammals").addClass("text-white").removeClass("text-danger");
        $("#Reptiles").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });
    $("#Invertebrates").click(function() {
        $("#animalsTitle").text(" - Invertebrates");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Amphibians").addClass("text-white").removeClass("text-danger");
        $("#Birds").addClass("text-white").removeClass("text-danger");
        $("#Fish").addClass("text-white").removeClass("text-danger");
        $("#Mammals").addClass("text-white").removeClass("text-danger");
        $("#Reptiles").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });
    $("#Mammals").click(function() {
        $("#animalsTitle").text(" - Mammals");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Amphibians").addClass("text-white").removeClass("text-danger");
        $("#Birds").addClass("text-white").removeClass("text-danger");
        $("#Fish").addClass("text-white").removeClass("text-danger");
        $("#Invertebrates").addClass("text-white").removeClass("text-danger");
        $("#Reptiles").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });
    $("#Reptiles").click(function() {
        $("#animalsTitle").text(" - Reptiles");
        $("#animal-card").addClass("text-white").removeClass("text-danger");
        $("#Amphibians").addClass("text-white").removeClass("text-danger");
        $("#Birds").addClass("text-white").removeClass("text-danger");
        $("#Fish").addClass("text-white").removeClass("text-danger");
        $("#Invertebrates").addClass("text-white").removeClass("text-danger");
        $("#Mammals").addClass("text-white").removeClass("text-danger");
        $(this).addClass("text-danger");
    });

});
