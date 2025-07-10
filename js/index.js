document.addEventListener("DOMContentLoaded", function () {
  // Wait for the X share button to appear (in case it's loaded dynamically)
  function setShareOnXColor() {
    const shareOnX = document.querySelector('[aria-label="Share on X"] svg path');
    if (shareOnX) {
      shareOnX.style.fill = '#ffffff';
    } else {
      // Try again after a short delay if not found
      setTimeout(setShareOnXColor, 500);
    }
  }
  setShareOnXColor();
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }, 2000); // 3 seconds delay

  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach(el => observer.observe(el));
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
const cards = document.querySelector(".cards");
const cardElements = document.querySelectorAll(".card2");
const cardCount = cardElements.length;

// Function to calculate the number of visible cards based on screen size
function getVisibleCards() {
  if (window.innerWidth <= 425) {
    return 1; // Show only 1 card at a time on screens <= 425px
  } else if (window.innerWidth <= 768) {
    return 2; // Show 2 cards on tablet screens <= 768px
  }
  return 3; // Show 3 cards on larger screens
}

// Function to calculate the width of the cards dynamically
function getCardWidth() {
  if (window.innerWidth <= 425) {
    return window.innerWidth - 40; // Full width of the mobile screen with some margin
  } else if (window.innerWidth <= 768) {
    return window.innerWidth - 40; // Adjust card width for tablet screens
  }
  return 250; // Default card width for larger screens
}

// Update the slider position based on the current index and visible cards
function updateSlider() {
  const visibleCards = getVisibleCards();
  const cardWidth = getCardWidth();
  const marginBetweenCards = 20; // Margin between cards
  const moveDistance = cardWidth + marginBetweenCards; // Total distance a card moves
  cards.style.transform = `translateX(-${moveDistance * currentIndex}px)`;
  cards.style.transition = "transform 0.3s ease-in-out"; // Smooth sliding effect
}

// Next Button Click
document.getElementById("nextBtn").addEventListener("click", () => {
  const visibleCards = getVisibleCards();
  if (currentIndex < cardCount - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

// Previous Button Click
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Adjust the slider when the window is resized
window.addEventListener("resize", updateSlider);

// Initial setup to position the slider
updateSlider();
function openNav() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('close-icon').style.display = 'flex';
}

function closeNav() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('close-icon').style.display = 'none';
}
document
  .querySelector('meta[name="theme-color"]')
  .setAttribute("content", "#923cb5");

  const popup = document.getElementById("popupForm");
  const toggleBtn = document.getElementById("popupToggle");
  const closeBtn = document.getElementById("popupClose");

  toggleBtn.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });


// Improved custom cursor logic for sync and scroll issues
(function() {
  var delay = 8;
  var _x = window.innerWidth / 2;
  var _y = window.innerHeight / 2;
  var endX = window.innerWidth / 2;
  var endY = window.innerHeight / 2;
  var cursorVisible = true;
  var cursorEnlarged = false;
  var $dot = document.querySelector('.cursor-dot');
  var $outline = document.querySelector('.cursor-dot-outline');

  function setDotPosition(x, y) {
    $dot.style.left = x + 'px';
    $dot.style.top = y + 'px';
  }
  function setOutlinePosition(x, y) {
    $outline.style.left = x + 'px';
    $outline.style.top = y + 'px';
  }

  function animateDotOutline() {
    _x += (endX - _x) / delay;
    _y += (endY - _y) / delay;
    setOutlinePosition(_x, _y);
    requestAnimationFrame(animateDotOutline);
  }

  function toggleCursorSize() {
    if (cursorEnlarged) {
      $dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      $outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      $dot.style.transform = 'translate(-50%, -50%) scale(1)';
      $outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  function toggleCursorVisibility() {
    if (cursorVisible) {
      $dot.style.opacity = 1;
      $outline.style.opacity = 1;
    } else {
      $dot.style.opacity = 0;
      $outline.style.opacity = 0;
    }
  }

  // Anchor hovering
  document.querySelectorAll('a').forEach(function(el) {
    el.addEventListener('mouseover', function() {
      cursorEnlarged = true;
      toggleCursorSize();
    });
    el.addEventListener('mouseout', function() {
      cursorEnlarged = false;
      toggleCursorSize();
    });
  });

  // Click events
  document.addEventListener('mousedown', function() {
    cursorEnlarged = true;
    toggleCursorSize();
  });
  document.addEventListener('mouseup', function() {
    cursorEnlarged = false;
    toggleCursorSize();
  });

  document.addEventListener('mousemove', function(e) {
    cursorVisible = true;
    toggleCursorVisibility();
    // Use clientX/clientY for fixed position
    endX = e.clientX;
    endY = e.clientY;
    setDotPosition(endX, endY);
  });

  // Hide/show cursor on window enter/leave
  document.addEventListener('mouseenter', function(e) {
    cursorVisible = true;
    toggleCursorVisibility();
    $dot.style.opacity = 1;
    $outline.style.opacity = 1;
  });
  document.addEventListener('mouseleave', function(e) {
    cursorVisible = false;
    toggleCursorVisibility();
    $dot.style.opacity = 0;
    $outline.style.opacity = 0;
  });

  // Ensure cursor stays visible after scroll
  window.addEventListener('scroll', function() {
    // Keep dot and outline in sync with last known position
    setDotPosition(endX, endY);
    setOutlinePosition(_x, _y);
  });

  // Initial position
  setDotPosition(endX, endY);
  setOutlinePosition(_x, _y);
  animateDotOutline();
})();
async function showGitHubRepos() {
  const username = "abhinavverma658";
  const repoContainer = document.getElementById("repo-container");

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    const repos = await res.json();

    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";

      card.innerHTML = `
          <h3 ><a href="${repo.html_url}" class="repo-url" target="_blank">${repo.name}</a></h3>
          <p>${repo.description ? repo.description : "No description provided."}</p>
          <img src="https://img.shields.io/github/commit-activity/m/${username}/${repo.name}" alt="Commit Activity">
          <img src="https://img.shields.io/github/languages/top/${username}/${repo.name}" alt="Top Language">
          <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/${username}/${repo.name}">

        `;

      repoContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load repos:", error);
    repoContainer.innerHTML = "<p>Failed to fetch repositories. Please try again later.</p>";
  }
}

showGitHubRepos();