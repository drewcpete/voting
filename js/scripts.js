//front end

$(document).ready(function() {
  $("form#ageForm").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#inputAge").val());
      if (age < 18) {
      $(".young").show();
    } else {
      $(".old").show();
    }
  });

});


//back end
