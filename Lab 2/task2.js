$(function () {
    $("#image").on("mouseenter",function(){
        $("#image").effect("shake")
      })
      $(".rabit").draggable({})
      $( ".hole" ).droppable({
        drop: function() {
            $( ".rabit").fadeOut("slow");
          }
      })
})
