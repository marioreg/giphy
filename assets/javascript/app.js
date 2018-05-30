var animals = [];

//this function creates buttons once the user inputs the animal name
function createButtons() {
     $("#animal-view").empty();    
    for (var i = 0; i < animals.length; i++) { 
     var a = $("<button>");    
      a.addClass("btn btn-outline-primary button");
      a.attr("data-name", animals[i]);
      
      a.text(animals[i]);
      $("#animal-view").append(a);
    }
  }

// this function adds the animal the user input to the array ana runs the createButtons function
  $("#add-animal").on("click", function(event) {    
    event.preventDefault();    
    var animal = $("#animal-input").val().trim();    
    animals.push(animal);    
    createButtons();
  });
 
//this function clears the array
 $("#clear-animal").on("click", function(event){
    $("#animal-view").empty(); 
 });



 //this function saves the data-name of the button clicked and stores into a variable so it creates the URL
 $(document).on("click", "button", function() {

 var animalClicked = $(this).attr("data-name");
 $("#giphy-animals").empty();
 console.log(animalClicked);


 var queryURL = "https://api.giphy.com/v1/gifs/search?q="+animalClicked+"&api_key=MGTqJPJegUSFReqczwMEsFY6TUL3rpBI";

 $.ajax({
     url:queryURL,
     method:'GET'
    })
    .then(function(response){

        console.log(response);

        console.log(queryURL);

        var results = response.data;

        console.log(results);

        for (var i = 0; i < results.length; i++) {

         var animalDiv = $("<div>");        
            
         var animalImage = $("<img>");
        
         animalImage.attr("src", results[i].images.fixed_height.url);      
       
         animalDiv.append(animalImage);
            
         $("#giphy-animals").append(animalDiv);
           }

        });

    });

