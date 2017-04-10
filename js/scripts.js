//B.L.
function Pet(type, name, age, status, bio){
  this.name = name;
  this.type= type;
  this.age= age;
  this.status= status;
  this.bio = bio;
}

var Mitsy = new Pet ("dog", "Mitsy", "2", "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Yeller = new Pet ("dog", "Yeller", "2",  "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Fido = new Pet ("cat", "Fido", "2", "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Buddy = new Pet ("dog",
 "Buddy", "2",
 "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Whiskers = new Pet ("cat",
 "Whiskers", "2",
 "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Bucky = new Pet ("cat",
 "Bucky", "2",
 "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Copper =new Pet  ("snake",
 "Copper", "2",
 "Adopted", "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).");

var Cujo = new Pet ("bunny",
 "Cujo", "2", "Adopted", "Fish gotta swim birds gotta fly... I gotta sing and sing until I FIND MY FOREVER HOME WITH YOU! (Fooled ya, didn't I?) I'm Daisy, and I'm so full of love that my foster mom says I'd be a great therapy dog" );

finder = function(){
  if(pName === "Mitsy"){
    Mitsy.populate();
  }else if(pName === "Yeller"){
    Yeller.populate();
  }else if(pName === "Fido"){
    Fido.populate();
  }else if(pName === "Buddy"){
    Buddy.populate();
  }else if(pName === "Whiskers"){
    Whiskers.populate();
  }else if(pName === "Bucky"){
    Bucky.populate();
  }else if(pName === "Copper"){
    Copper.populate();
  }else if(pName === "Cujo"){
    Cujo.populate();
  }

}

Pet.prototype.populate = function(Pet){
  $('.petStats').append("<li>" + this.name + "</li>");
  $('.petStats').append("<li>" + this.type + "</li>");
  $('.petStats').append("<li>" + this.age + "</li>");
  $('.petStats').append("<li>" + this.status + "</li>");
  $(".petBio").text(this.bio);
}

//U.I.
$(document).ready(function () {

  // var newPet = new Pet();

  $(".petClicks li").click(function (event) {
    event.preventDefault();
    $(".homePic").hide();
    $(".petPic").hide();
    $(".petStats li").remove();
    pName = $(this).text();
    finder(pName);
    $("#" + pName).show();



  });

  $(".center").click(function (event) {
    event.preventDefault();
    $(".adoption").show();
    $(".adoptForm").submit(function(event){
      event.preventDefault();
      var customerName = $("#customerName").val();
      $(".thanks").show();
      $(".thankYou").text(customerName);
  });
  });

  $("#adoptionStatus").click(function (event) {
    event.preventDefault();

  });

});

//
//
// newPet.name= "Tramp";
// newPet.age= "3";
// newPet.type= "Dog";
// newPet.bio= , because apparently the opera is not hiring just now. Want to sing along?"
