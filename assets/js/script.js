function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/tres linhas icon.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close2.png";
  }
}

function closeSignUpBar(e) {
  e.preventDefault();
  const closeSignUp = document.getElementById("first_order");
  closeSignUp.remove();
}

function carrosselPrevPage() {
  const carrosselContainer = document.getElementById("section_of_comments");
  const carrosselContainerLastChild = carrosselContainer.lastElementChild;
  carrosselContainer.style.transition = "transform 0.5s ease-in";
  carrosselContainer.style.transform = `translateX(${carrosselContainerLastChild.clientWidth}px)`;
  carrosselContainer.addEventListener(
    "transitionend",
    () => {
      carrosselContainer.removeChild(carrosselContainerLastChild);
      carrosselContainer.insertBefore(
        carrosselContainerLastChild,
        carrosselContainer.firstElementChild
      );

      carrosselContainer.style.transition = "none";
      carrosselContainer.style.transform = "translateX(0)";
    },
    { once: true }
  );
}

function carrosselNextPage() {
  const carrosselContainer = document.getElementById("section_of_comments");
  const carrosselContainerFirstChild = carrosselContainer.firstElementChild;
  carrosselContainer.style.transition = "transform 0.5s ease-in";
  carrosselContainer.style.transform = `translateX(-${carrosselContainerFirstChild.clientWidth}px)`;
  carrosselContainer.addEventListener(
    "transitionend",
    () => {
      carrosselContainer.removeChild(carrosselContainerFirstChild);
      carrosselContainer.appendChild(carrosselContainerFirstChild);

      carrosselContainer.style.transition = "none";
      carrosselContainer.style.transform = "translateX(0)";
    },
    { once: true }
  );
}

function subscribeToNewsletter(e) {
  e.preventDefault();

  const userEmail = document.getElementById("user-email").value;
  const message = `Thank you for subscribing to our Newsletter. We'll send you news on ${userEmail}.`;

  const subscribeFeedback = document.createElement("span");
  subscribeFeedback.id = "subscribe-feedback";
  subscribeFeedback.innerText = message;

  const formContainer = document.getElementById("form");
  formContainer.replaceChildren(subscribeFeedback);
}

function init() {
  const closeXBar = document.getElementById("x_close_button");
  closeXBar.addEventListener("click", closeSignUpBar);

  const prevPage = document.getElementById("arrow-left");
  prevPage.addEventListener("click", carrosselPrevPage);

  const nextPage = document.getElementById("arrow-right");
  nextPage.addEventListener("click", carrosselNextPage);

  const subscribeToNewsletterForm = document.getElementById("newsletter-form");
  subscribeToNewsletterForm.addEventListener("submit", subscribeToNewsletter);
}

init();
