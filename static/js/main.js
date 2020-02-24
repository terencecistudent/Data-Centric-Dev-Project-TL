$(document).ready(function(){
    /*$(".list-group-item").click(function() {
        let type = $(this).attr("id");
        let animals = $(".animal");
        $(animals).hide();
        $("#" + type).show();

        let mammals = $("#Mammals"),
            birds = $("#Birds"),
            fish = $("#Fish"),
            reptiles = $("#Reptiles"),
            amphibians = $("#Amphibians"),
            invertebrates = $("#Invertebrates");
        
    });*/

    
    $("#accordion-mammals").click(function() {
        $("#birds-section").hide();
    });

    $("#accordion-birds").click(function() {
        $("#mammals-section").hide();
        console.log("Hi");
    })
});
