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
  const subscribeToNewsletterForm = document.getElementById("newsletter-form");
  subscribeToNewsletterForm.addEventListener("submit", subscribeToNewsletter);
}

init();
