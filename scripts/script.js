function ReadMore({target}) {
	const container = target.closest('.container')
	  var dots = container.querySelector(".dots");
	  var more = container.querySelector(".more");
	  var button = container.querySelector(".btn");
	
	  if (dots.style.display === "none") {
			dots.style.display = "inline";
			button.innerHTML = "Read more";
			more.style.display = "none";
	  } else {
			dots.style.display = "none";
			button.innerHTML = "Read less";
			more.style.display = "inline";
	  }
}

var myIndex = 0;
showSlides();

function showSlides() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


document.addEventListener("DOMContentLoaded", ReadMore);





