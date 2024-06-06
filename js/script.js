let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      console.log("Your message has been sent! It will be answered ASAP!")
      alert("Your message has been sent!");
  });
});

let logo = document.querySelector(".logo");
    logo.addEventListener("click", function(event) {
        event.preventDefault(); 
        location.reload();  
    });
 