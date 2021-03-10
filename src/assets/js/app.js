//= ../../../node_modules/swiper/swiper-bundle.js
//= ../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js

$(function () {
  //= components/swiper.js
  //= components/fancybox.js

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
});
