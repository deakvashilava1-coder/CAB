const container = document.getElementById("text-container");
const words = ["be", "unique", "iconic", "chic", "gorgeous", "glamorous"];
const finalPhrase = "with CAB";

let index = 0;
let currentSpan = null;

function addWord(word) {
  if (currentSpan) {
    currentSpan.remove();
  }
  const span = document.createElement("span");
  span.className = "word";
  span.textContent = word;
  container.appendChild(span);
  setTimeout(() => {
    span.classList.add("show");
  }, 50);
  currentSpan = span;
}
function animateWords() {
  if (index < words.length) {
    addWord(words[index]);
    index++;
    setTimeout(animateWords, 900);
  } else {
    setTimeout(() => {
      addWord(finalPhrase);
    }, 600);
  }
}
animateWords();

const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const collections = [
    { id: 1, name: "Prada", description: "Prada Grommet Black Canapa Tote Bag", image: "https://virtualiconvintage.com/cdn/shop/files/17.png?v=1743641841&width=823" },
    { id: 2, name: "Balenciaga", description: "Le City Bag Medium in Black", image: "https://balenciaga.dam.kering.com/m/31535bdf893d024/Large-8230582AA9S1000_F.jpg?v=2" },
    { id: 3, name: "Vivienne Westwood", description: "small black bag", image: "https://i.pinimg.com/736x/99/12/b3/9912b3cc95c3ec986084008d47a95239.jpg" },
  ];
  
  const grid = document.getElementById("collections-grid");
  
  collections.forEach(collection => {
    const item = document.createElement("div");
    item.className = "collection-item";
  
    const imgContainer = document.createElement("div");
    imgContainer.className = "collection-image-container";
    const img = document.createElement("img");
    img.src = collection.image;
    img.alt = collection.name;
    imgContainer.appendChild(img);
  
    const title = document.createElement("h3");
    title.className = "collection-title";
    title.textContent = collection.name;
  
    const desc = document.createElement("p");
    desc.className = "collection-description";
    desc.textContent = collection.description;
  
    item.appendChild(imgContainer);
    item.appendChild(title);
    item.appendChild(desc);
    grid.appendChild(item);
  });
  const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

if (localStorage.getItem("cookieConsent")) {
  cookieBanner.style.display = "none";
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  cookieBanner.style.display = "none";
});

declineCookies.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  cookieBanner.style.display = "none";
});


const apiGrid = document.getElementById("api-grid");

async function loadServerProducts() {
  try {
    apiGrid.innerHTML = "<p>Loading from server...</p>";

    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
    );

    const products = response.data
      .filter(product => product.image_link)
      .slice(0, 3);

    apiGrid.innerHTML = "";

    products.forEach(product => {
      const item = document.createElement("div");
      item.className = "api-item";

      item.innerHTML = `
        <img src="${product.image_link}" alt="${product.name}">
        <h3>${product.brand}</h3>
        <p>${product.name}</p>
      `;

      apiGrid.appendChild(item);
    });

  } catch (error) {
    console.error("Server error:", error);
    apiGrid.textContent = "Failed to load server data.";
  }
  
}

loadServerProducts();

const modal = document.getElementById("registerModal");
const signUpLink = document.getElementById("signUpLink");
const closeBtn = modal.querySelector(".close");

signUpLink.addEventListener("click", e => {
  e.preventDefault();
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});
