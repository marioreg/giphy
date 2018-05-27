var animals = [];

function createButtons() {
     $("#animal-view").empty();    
    for (var i = 0; i < animals.length; i++) { 
     var a = $("<button>");    
      a.addClass("btn btn-outline-primary");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);
      $("#animal-view").append(a);
    }
  }

  $("#add-animal").on("click", function(event) {    
    event.preventDefault();    
    var animal = $("#animal-input").val().trim();    
    animals.push(animal);    
    createButtons();
  });
 createButtons();