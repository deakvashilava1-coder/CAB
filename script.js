// button
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
//  regisstration
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

// form validation
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");
const successMsg = document.getElementById("successMsg");

// regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // clear messages
  document.querySelectorAll(".error-msg").forEach(msg => msg.textContent = "");
  successMsg.textContent = "";

  // Full Name
  if (fullName.value.trim() === "") {
    showError(fullName, "Full name is required");
    isValid = false;
  }

  // Email
  if (!emailRegex.test(email.value)) {
    showError(email, "Enter a valid email address");
    isValid = false;
  }

  // Password
  if (!passwordRegex.test(password.value)) {
    showError(
      password,
      "Password must be at least 6 chars, include 1 uppercase and 1 number"
    );
    isValid = false;
  }

  // Confirm password
  function showError(input, message) {
    const error = input.closest(".form-group").querySelector(".error-msg");
    error.textContent = message;
  }
  

  if (isValid) {
    successMsg.textContent = "Registration successful!";
    form.reset();
  }
});


togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});
// burger
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
// main sityvebi
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

// section 1
const collections = [
    { id: 1, name: "Prada", description: "Prada Grommet Black Canapa Tote Bag", image: "https://virtualiconvintage.com/cdn/shop/files/17.png?v=1743641841&width=823", link: "https://virtualiconvintage.com/products/prada-grommet-black-canapa-tote-bag"},
    { id: 2, name: "Balenciaga", description: "Le City Bag Medium in Black", image: "https://balenciaga.dam.kering.com/m/31535bdf893d024/Large-8230582AA9S1000_F.jpg?v=2", link:"https://www.balenciaga.com/en-us/le-city-bag-medium-black-8230582AA9S1000.html" },
    { id: 3, name: "Vivienne Westwood", description: "small black bag", image: "https://i.pinimg.com/736x/99/12/b3/9912b3cc95c3ec986084008d47a95239.jpg",link:"https://poshmark.com/listing/Vivienne-Westwood-Orb-Boston-Tote-Bag-64f2f361f644e5ce126d2948"},
    { id: 4, name: "DSQUARED2", description: "eyelet studded shoulder bag", image: "https://cdn-images.farfetch-contents.com/27/24/44/66/27244466_62122994_1000.jpg", link:"https://www.farfetch.com/ge/shopping/women/dsquared2-eyelet-studded-shoulder-bag-item-27244466.aspx?storeid=17282" },
    { id: 5, name: "Valentino Garavani", description: "Rockstud padded leather handbag", image: "https://cdn-images.farfetch-contents.com/20/87/62/32/20876232_51362487_2048.jpg",link:"https://www.farfetch.com/ge/shopping/women/valentino-garavani-rockstud-padded-leather-handbag-item-20876232.aspx?storeid=16716"},
    { id: 6, name: "The Attico", description: "medium La Passeggiata tote bag", image: "https://cdn-images.farfetch-contents.com/25/61/24/89/25612489_57723269_1000.jpg" , link:"https://www.farfetch.com/ge/shopping/women/the-attico-medium-la-passeggiata-tote-bag-item-25612489.aspx?storeid=9885" },


  ];
  const grid = document.getElementById("collections-grid");

  collections.forEach(collection => {
    const item = document.createElement("div");
    item.className = "collection-item";
  
    const link = document.createElement("a");
    link.href = collection.link;
    link.target = "_blank";
    link.className = "collection-link";
  
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
  
    link.appendChild(imgContainer);
    link.appendChild(title);
    link.appendChild(desc);
  
    item.appendChild(link);
    grid.appendChild(item);
  });
  
  // section 3
const apiGrid = document.getElementById("api-grid");

async function loadServerProducts() {
  try {
    apiGrid.innerHTML = "<p>Loading from server...</p>";

    const response = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json",
      {
        params: {
          brand: "covergirl",
          product_type: "lipstick"
        }
      }
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
const mobileSignUp = document.getElementById("mobileSignUp");

mobileSignUp.addEventListener("click", e => {
  e.preventDefault();
  mobileMenu.classList.remove("show");
  modal.classList.add("show");      
});


// cookies
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


