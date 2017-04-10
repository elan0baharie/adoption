//B.L.
var Mitsy = {type: "dog", name: "Mitsy", age: "2", status: "Adopted"};

var Yeller = {type: "dog", name: "Yeller", age: "2", status: "Adopted"};

var Fido = {type: "cat", name: "Fido", age: "2", status: "Adopted"};

var Buddy = {type: "dog", name: "Buddy", age: "2", status: "Adopted"};

var Whiskers = {type: "cat", name: "Whiskers", age: "2", status: "Adopted"};

var Bucky = {type: "cat", name: "Bucky", age: "2", status: "Adopted"};

var Copper = {type: "snake", name: "Copper", age: "2", status: "Adopted"};

var Cujo = {type: "bunny", name: "Cujo", age: "2", status: "Adopted",  bio:"Fish gotta swim birds gotta fly... I gotta sing and sing until I FIND MY FOREVER HOME WITH YOU! (Fooled ya, didn't I?) I'm Daisy, and I'm so full of love that my foster mom says I'd be a great therapy dog" };



function Pet(){
  this.name = "";
  this.type="";
  this.age= "";
  this.status=""
  this.bio ="";
}







//U.I.
$(document).ready(function () {

  var newPet= new Pet();

  $(".left").click(function (event) {
    event.preventDefault();
      newPet.type= Cujo.type;
      $("li#one").append(newPet.type);
      newPet.name=Cujo.name;
      $("li#two").append(newPet.name);

      console.log(Cujo);



  });

  $("#hideShowPet").click(function (event) {
    event.preventDefault();

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
