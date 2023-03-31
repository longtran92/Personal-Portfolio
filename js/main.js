// import { $, jQuery } from "jquery";

window.onload = function () {
  // TOGGLE ACTIVE ON FRAMEWORK BUTTON
  $(".framework").on("click", function () {
    $(".framework").removeClass("active");
    $(this).addClass("active");
  });

  // OPEN COLOR PANEL
  $(".panel-trigger").on("click", function () {
    $(".color-panel").removeClass("hide-panel");
    $(".color-panel").addClass("show-panel");
  });

  // CLOSE COLOR PANEL
  $(".panel-close").on("click", function () {
    $(".color-panel").removeClass("show-panel");
    $(".color-panel").addClass("hide-panel");
  });

  // SET ACTIVE CLASS WHEN SELECTED TO COLOR
  $(".color-palette .color-options .color").on("click", function () {
    $(".color-options .color").removeClass("active");
    $(this).addClass("active");
  });

  // SELECT COLOR PALETTE
  $(".color-palette .color-options .color").on("click", function () {
    // TAKE SELECTED COLOR
    const selectedColor = $(this).css("background-color");
    const darkColor = $(this).attr("dark-color");
    const overlayColor = $(this).attr("overlay-color");

    // SET SELECTED COLOR TO ELEMENTS
    $(".main-header").css("background-color", darkColor);
    $(".banner-section").css("background-color", selectedColor);
    $(".framework-filter .active").css("background-color", selectedColor);
    $(".card-overlay .overlay-content").css("background-color", overlayColor);
    $(".initiation-section").css("background-color", selectedColor);
  });
};
