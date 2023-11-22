// Assuming you have an HTML element with an id of "myElement"
const myElement = document.getElementById('menu-bars');
const header = document.getElementById('header');

// Adding a click event listener
myElement.addEventListener('click', function() {
  // Adding a class, for example, "newClass"
  this.classList.toggle('active');
  header.classList.toggle('active');
});

//
document.getElementById("search-btn").onclick = function () {
    location.href = "categories_list.html";
};
