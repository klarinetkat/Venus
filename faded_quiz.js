$(document).ready(function(){
    $("#q1").click(function(){
      $(this).fadeOut("fast");
      $("#q2").fadeIn("fast");
    });

    $("#q2").click(function(){
      $(this).fadeOut("fast");
      $("#q3").fadeIn("fast");
    });

    $("#q3").click(function(){
      $(this).fadeOut("fast");
      $("#q4").fadeIn("fast");
    });

    $("#q4").click(function(){
      $(this).fadeOut("fast");
      $("#q5").fadeIn("fast");
    });

    $("#q5").click(function(){
      $(this).fadeOut("fast");
      $("#q6").fadeIn("fast");
    });
});
