// *********************************************************************
document.getElementById("play").style.display = "none";
document.getElementById("com").style.display = "none";
document.querySelector(".winner").style.display = "none";
document.querySelector(".lose").style.display = "none";
document.querySelector(".tents").style.display = "none";
document.querySelector(".s").style.display = "none";
nersolih();
document.querySelector(".img").addEventListener("click", function () {
  document.querySelector(".s").style.display = "none";
  document.querySelector(".play").style.display = "block";
  nersolih();
});
// *********************************************************************
//
// *********************************************************************
function nersolih() {
  document.addEventListener("keypress", function (event) {
    //
    if (event.keyCode === 13 || event.which === 13) {
      //
      var ez = document.querySelector(".play").value;
      document.querySelector(".s").textContent = ez;
      document.querySelector(".s").style.display = "block";
      document.querySelector(".play").style.display = "none";
    }
  });
}
//
//
//
//
// Хайч ****************************************************************
document.getElementById("img1").addEventListener("click", function () {
  ustgah();
  document.getElementById("play").src = "img-1.png";
  document.getElementById("play").style.display = "inline-block";
  document.getElementById("com").style.display = "inline-block";
  var too = Math.floor(Math.random() * 3) + 1;
  click(too);
  if (too == 1) {
    document.querySelector(".tents").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(31, 31, 155)";
    // tentseh();
  } else if (too == 2) {
    var lk = document.querySelector(".play").value;
    document.querySelector(".winner").textContent = lk + " ХОЖЛОО !";
    document.querySelector(".winner").style.display = "block";
    document.getElementById("undsen").style.border = "5px solid rgb(4, 167, 4)";
    // hojih();
  } else if (too == 3) {
    document.querySelector(".lose").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(199, 67, 67)";
    // hojigdoh();
  }
});
//
//
//
//
// Даавуу **************************************************************
document.getElementById("img2").addEventListener("click", function () {
  //
  ustgah();
  document.getElementById("play").src = "img-2.png";
  document.getElementById("play").style.display = "inline-block";
  document.getElementById("com").style.display = "inline-block";
  var too = Math.floor(Math.random() * 3) + 1;
  click(too);
  if (too == 1) {
    document.querySelector(".lose").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(199, 67, 67)";
    // hojigdoh();
  } else if (too == 2) {
    document.querySelector(".tents").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(31, 31, 155)";
    // tentseh();
  } else if (too == 3) {
    var lk = document.querySelector(".play").value;
    document.querySelector(".winner").textContent = lk + " ХОЖЛОО !";
    document.querySelector(".winner").style.display = "block";
    document.getElementById("undsen").style.border = "5px solid rgb(4, 167, 4)";
    // hojih();
  }
});
//
//
//
//
// Чулуу ***************************************************************
document.getElementById("img3").addEventListener("click", function () {
  //
  ustgah();
  document.getElementById("play").src = "img-3.png";
  document.getElementById("play").style.display = "inline-block";
  document.getElementById("com").style.display = "inline-block";
  var too = Math.floor(Math.random() * 3) + 1;
  click(too);
  if (too == 1) {
    var lk = document.querySelector(".play").value;
    document.querySelector(".winner").textContent = lk + " ХОЖЛОО !";
    document.querySelector(".winner").style.display = "block";
    document.getElementById("undsen").style.border = "5px solid rgb(4, 167, 4)";
    // hojih();
  } else if (too == 2) {
    document.querySelector(".lose").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(199, 67, 67)";
    // hojigdoh();
  } else if (too == 3) {
    document.querySelector(".tents").style.display = "block";
    document.getElementById("undsen").style.border =
      "5px solid rgb(31, 31, 155)";
    // tentseh();
  }
});
// *********************
function click(tomToo) {
  document.getElementById("com").src = "image-" + tomToo + ".png";
}
// *********************
function ustgah() {
  document.querySelector(".winner").style.display = "none";
  document.querySelector(".tents").style.display = "none";
  document.querySelector(".lose").style.display = "none";
}

// *********************
// function hojigdoh() {
//   setTimeout(() => {
//     document.querySelector(".lose").style.display = "none";
//   }, 5000);
//   document.getElementById("undsen").style.border = "5px solid rgb(199, 67, 67)";
//   setTimeout(() => {
//     document.getElementById("undsen").style.border = "5px solid #f4f4f4";
//   }, 5000);
// }
// // ***********************
// function hojih() {
//   setTimeout(() => {
//     document.querySelector(".winner").style.display = "none";
//   }, 5000);
//   document.getElementById("undsen").style.border = "5px solid greenyellow";
//   setTimeout(() => {
//     document.getElementById("undsen").style.border = " 5px solid #f4f4f4";
//   }, 5000);
// }
// ***********************
// function tentseh() {
//   setTimeout(() => {
//     document.querySelector(".tents").style.display = "none";
//   }, 5000);
//   document.getElementById("undsen").style.border = "5px solid rgb(31, 31, 155)";
//   setTimeout(() => {
//     document.getElementById("undsen").style.border = " 5px solid #f4f4f4";
//   }, 5000);
// }

// show hand
