window.onscroll = function() {
  myFunction()
};

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 350) {
    console.log('bottom');
    document.getElementById("card-2").className = "slide-right";
  } else {
    document.getElementById("card-2").className = "slide-left";
  }
}
