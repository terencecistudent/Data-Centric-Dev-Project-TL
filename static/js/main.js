$(document).ready(function(){

    // homepage side nav categorising animal types
    $(".list-group-item").click(function() {
        console.log("its working")
        let thisID = $(this).attr("id");
        $(".animal-card").hide();
        $("." + thisID).show();
        $(this).addClass("text-red");
    });

    // all animals page sub heading include animal type
    $("#animal-card").click(function(){
        $("#animalsTitle").text(" - All Types");
        $("#Amphibians").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Amphibians").click(function(){
        $("#animalsTitle").text(" - Amphibians");
        $("#animal-card").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Birds").click(function(){
        $("#animalsTitle").text(" - Birds");
        $("#animal-card").removeClass("text-white");
        $("#Amphibians").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Fish").click(function(){
        $("#animalsTitle").text(" - Fish");
        $("#animal-card").removeClass("text-white");
        $("#Amphibians").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Invertebrates").click(function(){
        $("#animalsTitle").text(" - Invertebrates");
        $("#animal-card").removeClass("text-white");
        $("#Amphibians").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Mammals").click(function(){
        $("#animalsTitle").text(" - Mammals");
        $("#animal-card").removeClass("text-white");
        $("#Amphibians").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Reptiles").removeClass("text-white");
        $(this).addClass("text-white");
    });
    $("#Reptiles").click(function(){
        $("#animalsTitle").text(" - Reptiles");
        $("#animal-card").removeClass("text-white");
        $("#Amphibians").removeClass("text-white");
        $("#Birds").removeClass("text-white");
        $("#Fish").removeClass("text-white");
        $("#Invertebrates").removeClass("text-white");
        $("#Mammals").removeClass("text-white");
        $(this).addClass("text-white");
    });

});
