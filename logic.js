let creatorName = document.querySelector(".creator-name").innerHTML;
let firstName = creatorName.substring(0, creatorName.indexOf(" "));
// document.getElementById("creatorname").value = creatorName;

// VC Book Drawer
var vcBookCard = document.getElementById("vc-book-card");
var vcUp = document.querySelector(".video-call");
vcUp.addEventListener("click", bottomsUpVc);
var tmvcUp = document.querySelector(".video-talk-icon");
tmvcUp.addEventListener("click", bottomsUpVc);
function bottomsUpVc() {
  vcBookCard.style.bottom = "0";
  ordername = "videocall";
  document.getElementById("ordernamevc").value = ordername;
  pricecost = document.querySelector(".pricevc").innerHTML;
  document.getElementById("pricevc").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamevc").value = creatorName;
}
// Coffe Book Drawer
var coffeeBookCard = document.getElementById("coffee-book-card");
var coffeeUp = document.querySelector(".coffee");
coffeeUp.addEventListener("click", bottomsUpCoffee);
var tmcoffeeUp = document.querySelector(".meet-talk-icon");
tmcoffeeUp.addEventListener("click", bottomsUpCoffee);
function bottomsUpCoffee() {
  coffeeBookCard.style.bottom = "0";
  ordername = "Coffee";
  document.getElementById("ordernamecf").value = ordername;
  pricecost = document.querySelector(".pricecf").innerHTML;
  document.getElementById("pricecf").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamevc").value = creatorName;
}
// Exclusive Content Drawer
var exclusiveBookCard = document.getElementById("exclusive-book-card");
var exclusiveUp = document.querySelector(".exclusive-image");
exclusiveUp.addEventListener("click", bottomsUpExclusive);
function bottomsUpExclusive() {
  exclusiveBookCard.style.bottom = "0";
  ordername = "Exclusive";
  document.getElementById("ordernameex").value = ordername;
  pricecost = document.querySelector(".priceexc").innerHTML;
  document.getElementById("priceex").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamevc").value = creatorName;
}

// DM BOOK DRAWER
var dmBookCard = document.getElementById("dm-book-card");
// var dmUp = document.querySelector(".dm-image");
// dmUp.addEventListener("click", bottomsUpDm);
var tmdmUp = document.querySelector(".chat-talk-icon");
tmdmUp.addEventListener("click", bottomsUpDm);
function bottomsUpDm() {
  dmBookCard.style.bottom = "0";
  ordername = "Chat";
  document.getElementById("ordernamedm").value = ordername;
  pricecost = document.querySelector(".pricedm").innerHTML;
  document.getElementById("pricedm").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamevc").value = creatorName;
}
//! Phone Call Drawer
var phoneBookCard = document.getElementById("phone-book-card");
var phoneUp = document.querySelector(".phone-talk-icon");
phoneUp.addEventListener("click", bottomsUpPhone);
function bottomsUpPhone() {
  phoneBookCard.style.bottom = "0";
  ordername = "Voice Call";
  document.getElementById("ordernameph").value = ordername;
  pricecost = document.querySelector(".pricephn").innerHTML;
  document.getElementById("priceph").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornameph").value = creatorName;
}

// Close Popup
document.querySelector(".close-arrow").addEventListener("click", bottomsDown);
document
  .querySelector(".close-arrow-exclusive")
  .addEventListener("click", bottomsDown);
document
  .querySelector(".close-arrow-coffee")
  .addEventListener("click", bottomsDown);
document
  .querySelector(".close-arrow-dm")
  .addEventListener("click", bottomsDown);
document
  .querySelector(".close-arrow-phone")
  .addEventListener("click", bottomsDown);
function bottomsDown() {
  vcBookCard.style.bottom = "-100%";
  coffeeBookCard.style.bottom = "-100%";
  exclusiveBookCard.style.bottom = "-100%";
  dmBookCard.style.bottom = "-100%";
  phoneBookCard.style.bottom = "-100%";
}

// Form date submit
let formVc = document.querySelector(".form-box-vc");
formVc.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formVc);
  fetch(
    "https://script.google.com/macros/s/AKfycbwrtzrbtnSjOoYvfoAttCuyUvUY8diLEhINWoH1zzgmchyxRffge7T4tvfEZ18703ED/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(
        "wrapvc"
      ).innerHTML = `<div class="completed" style="text-align: center">
      <div class="submit-image">
        <img src="https://i.postimg.cc/NMFt2820/image.png" />
      </div>
      <h3 style="font-size: 1.6rem">Please Be Patient</h3>
      <h5 style="margin: 0.8rem 0; font-size: 1.1rem; color: #4d4d4f;">
        <span>${creatorName}</span>'s Manager will reach out to you on <span style="color:#25D366;">WhatsApp</span> as soon
        as ${firstName} can get in touch with you
      </h5>
      <h5 style="margin: 0.8rem 0; font-size: 1.01rem; color: #4d4d4f;">Payments will be collected there</h5>
      <h6 style="color: #4d4d4f;">Thanks for showing your interest</h6>
      <img
        src="https://i.postimg.cc/fWq0gZc3/image.png"
        style="width: 50px; margin-top: 0.3rem"
      />
    </div>`;
    });
});

let formCf = document.querySelector(".form-box-coffee");
formCf.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formCf);
  fetch(
    "https://script.google.com/macros/s/AKfycbwrtzrbtnSjOoYvfoAttCuyUvUY8diLEhINWoH1zzgmchyxRffge7T4tvfEZ18703ED/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(
        "wrapcf"
      ).innerHTML = `<div class="completed" style="text-align: center">
      <div class="submit-image">
        <img src="https://i.postimg.cc/NMFt2820/image.png" />
      </div>
      <h3 style="font-size: 1.6rem">Please Be Patient</h3>
      <h5 style="margin: 0.8rem 0; font-size: 1.1rem; color: #4d4d4f;">
        <span>${creatorName}</span>'s Manager will reach out to you on <span style="color:#25D366;">WhatsApp</span> as soon
        as ${firstName} can get in touch with you
      </h5>
      <h5 style="margin: 0.8rem 0; font-size: 1.01rem; color: #4d4d4f;">Payments will be collected there</h5>
      <h6 style="color: #4d4d4f;"Thanks for showing your interest</h6>
      <img
        src="https://i.postimg.cc/fWq0gZc3/image.png"
        style="width: 50px; margin-top: 0.3rem"
      />
    </div>`;
    });
});

let formEx = document.querySelector(".form-box-exclusive");
formEx.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formEx);
  fetch(
    "https://script.google.com/macros/s/AKfycbwrtzrbtnSjOoYvfoAttCuyUvUY8diLEhINWoH1zzgmchyxRffge7T4tvfEZ18703ED/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(
        "wrapex"
      ).innerHTML = `<div class="completed" style="text-align: center">
      <div class="submit-image">
        <img src="https://i.postimg.cc/NMFt2820/image.png" />
      </div>
      <h3 style="font-size: 1.6rem">Please Be Patient</h3>
      <h5 style="margin: 0.8rem 0; font-size: 1.1rem; color: #4d4d4f;">
        <span>${creatorName}</span>'s Manager will reach out to you on <span style="color:#25D366;">WhatsApp</span> as soon
        as ${firstName} can get in touch with you
      </h5>
      <h5 style="margin: 0.8rem 0; font-size: 1.01rem; color: #4d4d4f;">Payments will be collected there</h5>
      <h6 style="color: #4d4d4f;">Thanks for showing your interest</h6>
      <img
        src="https://i.postimg.cc/fWq0gZc3/image.png"
        style="width: 50px; margin-top: 0.3rem"
      />
    </div>`;
    });
});

let formDm = document.querySelector(".form-box-dm");
formDm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formDm);
  fetch(
    "https://script.google.com/macros/s/AKfycbwrtzrbtnSjOoYvfoAttCuyUvUY8diLEhINWoH1zzgmchyxRffge7T4tvfEZ18703ED/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(
        "wrapdm"
      ).innerHTML = `<div class="completed" style="text-align: center">
      <div class="submit-image">
        <img src="https://i.postimg.cc/NMFt2820/image.png" />
      </div>
      <h3 style="font-size: 1.6rem">Please Be Patient</h3>
      <h5 style="margin: 0.8rem 0; font-size: 1.1rem; color: #4d4d4f;">
        <span>${creatorName}</span>'s Manager will reach out to you on <span style="color:#25D366;">WhatsApp</span> as soon
        as ${firstName} can get in touch with you
      </h5>
      <h5 style="margin: 0.8rem 0; font-size: 1.01rem; color: #4d4d4f;">Payments will be collected there</h5>
      <h6 style="color: #4d4d4f;">Thanks for showing your interest</h6>
      <img
        src="https://i.postimg.cc/fWq0gZc3/image.png"
        style="width: 50px; margin-top: 0.3rem"
      />
    </div>`;
    });
});

let formPh = document.querySelector(".form-box-phone");
formPh.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formPh);
  fetch(
    "https://script.google.com/macros/s/AKfycbwrtzrbtnSjOoYvfoAttCuyUvUY8diLEhINWoH1zzgmchyxRffge7T4tvfEZ18703ED/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(
        "wrapex"
      ).innerHTML = `<div class="completed" style="text-align: center">
      <div class="submit-image">
        <img src="https://i.postimg.cc/NMFt2820/image.png" />
      </div>
      <h3 style="font-size: 1.6rem">Please Be Patient</h3>
      <h5 style="margin: 0.8rem 0; font-size: 1.1rem; color: #4d4d4f;">
        <span>${creatorName}</span>'s Manager will reach out to you on <span style="color:#25D366;">WhatsApp</span> as soon
        as ${firstName} can get in touch with you
      </h5>
      <h5 style="margin: 0.8rem 0; font-size: 1.01rem; color: #4d4d4f;">Payments will be collected there</h5>
      <h6 style="color: #4d4d4f;">Thanks for showing your interest</h6>
      <img
        src="https://i.postimg.cc/fWq0gZc3/image.png"
        style="width: 50px; margin-top: 0.3rem"
      />
    </div>`;
    });
});

// Flickity
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  contain: true,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 1500,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});
