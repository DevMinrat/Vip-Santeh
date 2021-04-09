//= ../../../node_modules/slick-carousel/slick/slick.js
//= ../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js
//= components/fancybox.js
//= components/slick.js

window.addEventListener("DOMContentLoaded", () => {
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

  const faqItems = document.querySelectorAll(".faq__item");

  function changeAfterEffects(i) {
    faqItems[i].classList.toggle("hidden");
    faqItems[i].classList.toggle("open");
  }

  faqItems.forEach((item, i) => {
    const hiddenText = item.lastElementChild;
    item.addEventListener("click", () => {
      changeAfterEffects(i);

      if (hiddenText.style.maxHeight && hiddenText.style.marginTop) {
        hiddenText.style.maxHeight = null;
        hiddenText.style.marginTop = null;
      } else {
        hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
        hiddenText.style.marginTop = "18px";
      }
    });
  });

  //menu

  const header = document.querySelector(".header");

  function changeBgColorHeader() {
    if (document.documentElement.scrollTop >= 100) {
      header.classList.add("header--bg-mobile");
    } else {
      header.classList.remove("header--bg-mobile");
    }
  }

  window.addEventListener("scroll", changeBgColorHeader);

  //burger menu

  const burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu");

  function mobileMenuOn() {
    burgerMenu.classList.toggle("menu-on");

    if (menu.style.height && menu.style.padding) {
      menu.style.height = null;
      menu.style.padding = null;
    } else {
      menu.style.height = 100 + "vh";
      menu.style.padding = 20 + "px";
    }
  }

  burgerMenu.addEventListener("click", mobileMenuOn);

  window.addEventListener("scroll", () => {
    burgerMenu.classList.remove("menu-on");
    menu.style.height = null;
    menu.style.padding = null;
  });

  //modal

  const modalTrigger = document.querySelectorAll("[data-modal-call]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.remove("hide");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});

// menu scroll and

var sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height - 20,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height + 20,
    },
    500
  );

  return false;
});
