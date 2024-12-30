// console.log("hello world");
// console.log(10 + 12);

// window.alert( "Hello World!" );
// var name = prompt("Please enter your name: ");
// document.write("<h6>Welcome to my website, " + name + "</h6>")


// document.getElementById("h1").textContent = `Welcome to my first webpage in js!`;
// document.getElementById("para").textContent = `Welcome to my first webpage in js!)_________AAH SHIT__HERE WE GO AGAIN`;


// let age = 16;
// let height = 1.75

// console.log(`You are ${age} years old , and your height is ${height}`)
// console.log(typeof age)
// console.log(typeof height)


// let bar = document.getElementById("bar");
// let navbar = document.getElementById("nv")
// bar.onclick = function click(){
//     navbar.classList.toggle('active')
// }

// function toggleMenu(){
//     var navbar = document.getElementById('nv');
//     navbar.classList.toggle('active');
// }

// function toggleMenu(){
//     if(document.getElementById('nv').style.display == 'block'){
//         document.getElementById('nv').style.display='none';
//     } else {
//         document.getElementById('nv').style.display = 'block';

//     }
// }
// document.getElementById('bar').addEventListener('click', toggleMenu); 





// const hiddenElements = document.querySelector('.hidden');



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('hidden-show');
            } else {
                entry.target.classList.remove('hidden-show');
                }
    })
});




// scripts.js

// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll events
  function onScroll() {
    const elements = document.getElementById('hidden');
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.remove('.hidden');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', onScroll);
  
  // Initial check in case elements are already in viewport
  onScroll();
  


//   document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     },500);
// });