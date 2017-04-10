//B.L.
function Pet(type, name, age, status, bio){
  this.name = name;
  this.type= type;
  this.age= age;
  this.status= status;
  this.bio = bio;
}

var Mitsy = new Pet ("dog", "Mitsy", "2", "Adopted");

var Yeller = {type: "dog", name: "Yeller", age: "2", status: "Adopted"};

var Fido = {type: "cat", name: "Fido", age: "2", status: "Adopted"};

var Buddy = {type: "dog", name: "Buddy", age: "2", status: "Adopted"};

var Whiskers = {type: "cat", name: "Whiskers", age: "2", status: "Adopted"};

var Bucky = {type: "cat", name: "Bucky", age: "2", status: "Adopted"};

var Copper = {type: "snake", name: "Copper", age: "2", status: "Adopted"};

var Cujo = {type: "bunny", name: "Cujo", age: "2", status: "Adopted",  bio:"Fish gotta swim birds gotta fly... I gotta sing and sing until I FIND MY FOREVER HOME WITH YOU! (Fooled ya, didn't I?) I'm Daisy, and I'm so full of love that my foster mom says I'd be a great therapy dog" };


Pet.prototype.populate = function(Pet){
  console.log(Pet)

  $('.petStats').append("<li>" + this.name + "</li>");
  $('.petStats').append("<li>" + this.type + "</li>");
  $('.petStats').append("<li>" + this.age + "</li>");
  $('.petStats').append("<li>" + this.status + "</li>");

}


//U.I.
$(document).ready(function () {

  // var newPet = new Pet();

  $(".petClicks li").click(function (event) {
    event.preventDefault();
    var pName = $(this).text();
    console.log(typeof pName);
    console.log(Mitsy.type);
    Mitsy.populate(pName);


  });

  $(".center").click(function (event) {
    event.preventDefault();
    newPet.populate(Cujo.name, Cujo.type, Cujo.age, Cujo.status);

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
