$(document).ready(function(){

    // homepage side nav
    $(".list-group-item").click(function() {
        let thisID = $(this).attr("id");
        $(".animal-card").hide();
        $("." + thisID).show();
    });

});
