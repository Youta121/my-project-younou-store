 function validateForm() {
  let name = document.forms["loginform"]["name"].value;
  let password = document.forms["loginform"]["password"].value;
  if (name  == "") {
    alert("Name must be filled out");
    return false;
  }
  if (password.length < 5) {
    alert("password length should more than 5");
    return false;
  }
}



let carts= document.querySelectorAll('.bi-bag-heart');
localStorage.setItem('carnumbers', 0) ;
console.log (carts)
for (let i=0 ; i< carts.length;i++) {
    carts[i].addEventListener('click',cartnumbers)
}

function cartnumbers () {
    let productnumbers= localStorage.getItem('carnumbers') ;
    console.log(productnumbers) 
    productnumbers = parseInt(productnumbers) ;
    
    if (productnumbers) { 
        localStorage.setItem('carnumbers', productnumbers+1) ;
        var x =  document.querySelector('.bi-cart2').nextSibling.nextSibling
        x.innerText= productnumbers+1 ;
    }
    else {
        localStorage.setItem('carnumbers', 1);
        var x =  document.querySelector('.bi-cart2').nextSibling.nextSibling
        x.innerText=1 ;
    }
    
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function scrollNav() {
  $('.nav a').click(function(){
    // $(".active").removeClass("active");     
    // $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 300);
    return false;
  });
}
scrollNav();
