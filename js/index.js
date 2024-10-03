document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 2000); // 3 seconds delay
});

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
let currentIndex = 0;
const cards = document.querySelector('.cards');
const cardElements = document.querySelectorAll('.card2');
const cardCount = cardElements.length;

const cardWidth = 250; // Width of a card
const marginBetweenCards = 50; // Margin between cards
const moveDistance = cardWidth + marginBetweenCards; // Total distance a card moves

// Function to calculate the number of visible cards based on screen size
function getVisibleCards() {
  if (window.innerWidth <= 768) {
    return 1; // Show only 1 card at a time on mobile
  }
  return 3; // Show 3 cards at a time on larger screens
}

// Update the slider position based on the current index
function updateSlider() {
  const visibleCards = getVisibleCards();
  cards.style.transform = `translateX(-${moveDistance * currentIndex}px)`;
}

// Next Button Click
document.getElementById('nextBtn').addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  if (currentIndex < cardCount - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

// Previous Button Click
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Adjust the slider when the window is resized
window.addEventListener('resize', updateSlider);
