//= ../../../node_modules/swiper/swiper-bundle.js
//= ../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js
//= components/fancybox.js
//= components/swiper.js

// input-file
let inputs = document.querySelectorAll("#input__file");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector(".input__file-button-text").innerText;

  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles)
      label.querySelector(".input__file-button-text").innerText =
        "Выбрано файлов: " + countFiles;
    else label.querySelector(".input__file-button-text").innerText = labelVal;
  });
});

//price show more
const priceShowBtn = document.querySelectorAll(".show-more"),
  priceHideBtn = document.querySelectorAll(".show-less"),
  priceBtnParent = document.querySelectorAll(".price-item__button-more"),
  hidenServices = document.querySelectorAll(".hiden-services");

function changePriceBtn(i) {
  priceHideBtn[i].classList.toggle("btn-hide");
  priceShowBtn[i].classList.toggle("btn-hide");
}

priceBtnParent.forEach((item, i) => {
  item.addEventListener("click", () => {
    changePriceBtn(i);

    if (priceBtnParent[i].classList.contains(`priceBtn${i + 1}`)) {
      hidenServices[i].classList.toggle("hide");
    }
  });
});

// faq accordion

const faqItems = document.querySelectorAll(".faq__item"),
  faqItemTitle = document.querySelectorAll(".faq__item-title"),
  faqItemText = document.querySelectorAll(".faq__item-text");

function changeAfterEffects(i) {
  faqItems[i].classList.toggle("hidden");
  faqItems[i].classList.toggle("open");
}

faqItems.forEach((item, i) => {
  const hiddenText = item.lastElementChild;
  item.addEventListener("click", () => {
    changeAfterEffects(i);

    if (hiddenText.style.maxHeight) {
      hiddenText.style.maxHeight = null;
    } else {
      hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
    }
  });
});
