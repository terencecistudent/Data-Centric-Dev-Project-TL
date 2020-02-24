$(document).ready(function(){

    $(".list-group-item").click(function() {
        let thisID = $(this).attr("id");
        $(".animal-card").hide();
        $("." + thisID).show();
    });

});
