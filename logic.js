let creatorName = document.querySelector(".creator-name").innerHTML;
let firstName = creatorName.substring(0, creatorName.indexOf(" "));
// document.getElementById("creatorname").value = creatorName;

// VC Book Drawer
var vcBookCard = document.getElementById("vc-book-card");
var vcUp = document.querySelector(".video-call");
vcUp.addEventListener("click", bottomsUpVc);
// !here
var tmvcUp = document.querySelector(".video-talk-icon");
tmvcUp.addEventListener("click", bottomsUpVc);
//! pop icon
var coffeeUp = document.querySelector(".coffee");
coffeeUp.addEventListener("click", bottomsUpPhone);
function bottomsUpVc() {
  vcBookCard.style.bottom = "0";
  ordername = "video call";
  document.getElementById("ordernamevc").value = ordername;
  pricecost = document.querySelector(".vc-money").innerHTML;
  document.getElementById("pricevc").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamevc").value = creatorName;
}

// DM BOOK DRAWER
var dmBookCard = document.getElementById("dm-book-card");
// !here
var tmdmUp = document.querySelector(".chat-talk-icon");
tmdmUp.addEventListener("click", bottomsUpDm);
// !here
function bottomsUpDm() {
  dmBookCard.style.bottom = "0";
  ordername = "Chat";
  document.getElementById("ordernamedm").value = ordername;
  pricecost = document.querySelector(".dm-money").innerHTML;
  document.getElementById("pricedm").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornamedm").value = creatorName;
}

//! Phone Call Drawer
var phoneBookCard = document.getElementById("phone-book-card");
var phoneUp = document.querySelector(".phone-talk-icon");
phoneUp.addEventListener("click", bottomsUpPhone);

function bottomsUpPhone() {
  phoneBookCard.style.bottom = "0";
  ordername = "Voice Call";
  document.getElementById("ordernameph").value = ordername;
  pricecost = document.querySelector(".voc-money").innerHTML;
  document.getElementById("priceph").value = pricecost;
  let creatorName = document.querySelector(".creator-name").innerHTML;
  document.getElementById("creatornameph").value = creatorName;
}

// Close Popup
document.querySelector(".close-arrow").addEventListener("click", bottomsDown);

document
  .querySelector(".close-arrow-dm")
  .addEventListener("click", bottomsDown);
document
  .querySelector(".close-arrow-phone")
  .addEventListener("click", bottomsDown);

function bottomsDown() {
  vcBookCard.style.bottom = "-100%";
  dmBookCard.style.bottom = "-100%";
  phoneBookCard.style.bottom = "-100%";
}
//! If above link don't work
var dm_price = document.querySelector(".dm-money").innerHTML;
var voc_price = document.querySelector(".voc-money").innerHTML;
var vc_price = document.querySelector(".vc-money").innerHTML;

// Above Link Doesn't work
var blow = document.querySelector(".below-vc");
var above = document.querySelector("#pay-vc");
above.addEventListener("click", () => {
  setTimeout(() => {
    blow.style.display = "block";
  }, 5000);
});

var blowdm = document.querySelector(".below-dm");
var abovedm = document.querySelector("#pay-dm");
abovedm.addEventListener("click", () => {
  setTimeout(() => {
    blowdm.style.display = "block";
  }, 5000);
});

var blowph = document.querySelector(".below-voc");
var aboveph = document.querySelector("#pay-voc");
aboveph.addEventListener("click", () => {
  setTimeout(() => {
    blowph.style.display = "block";
  }, 5000);
});

// Form date submit
let formVc = document.querySelector(".form-box-vc");
formVc.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formVc);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      // ? VC
      cst_name = document.getElementById("customer-name-vc").value;
      cst_phone = document.getElementById("customer-phone-vc").value;

      let titleVc =
        "Videocall%20with%20" +
        firstName +
        "%20" +
        cst_phone +
        "%20" +
        cst_name;
      payLinkVc = `upi://pay?pa=paytmqr2810050501011ukp597vo5du@paytm&tn=${titleVc}&pn=TapHere&cu=INR&am=${vc_price}`;
      console.log(payLinkVc);
      document.getElementById("pay-vc").href = payLinkVc;
      // Generating QR COde
      var qrcode = new QRCode("qr-vc", payLinkVc);
      document.querySelector(".payment-box-vc").style.display = "block";
      document.querySelector("#wrapvc").style.display = "none";
    });
});

let formDm = document.querySelector(".form-box-dm");
formDm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formDm);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      // ? VC
      cst_name = document.getElementById("customer-name-dm").value;
      cst_phone = document.getElementById("customer-phone-dm").value;

      let titleVc =
        "Videocall%20with%20" +
        firstName +
        "%20" +
        cst_phone +
        "%20" +
        cst_name;
      payLinkVc = `upi://pay?pa=paytmqr2810050501011ukp597vo5du@paytm&tn=${titleVc}&pn=TapHere&cu=INR&am=${dm_price}`;
      document.getElementById("pay-dm").href = payLinkVc;
      // Generating QR COde
      var qrcode = new QRCode("qr-dm", payLinkVc);
      document.querySelector(".payment-box-dm").style.display = "block";
      document.querySelector("#wrapdm").style.display = "none";
    });
});

let formPh = document.querySelector(".form-box-phone");
formPh.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formPh);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      // ? VC
      cst_name = document.getElementById("customer-name-ph").value;
      cst_phone = document.getElementById("customer-phone-ph").value;

      let titleVc =
        "Videocall%20with%20" +
        firstName +
        "%20" +
        cst_phone +
        "%20" +
        cst_name;
      payLinkVc = `upi://pay?pa=paytmqr2810050501011ukp597vo5du@paytm&tn=${titleVc}&pn=TapHere&cu=INR&am=${voc_price}`;
      document.getElementById("pay-voc").href = payLinkVc;
      // Generating QR COde
      var qrcode = new QRCode("qr-voc", payLinkVc);
      document.querySelector(".payment-box-voc").style.display = "block";
      document.querySelector("#wrapph").style.display = "none";
    });
});

// Flickity
//!Affiliate Products
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
