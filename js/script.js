(function ($) {

  "use strict";


  // Product quantity
  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();

        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });


      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();

        var quantity = parseInt($el_product.find('#quantity').val());

        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  };


  $(document).ready(function () {


    // Video Modal
    var $videoSrc;

    $('.play-btn').click(function () {
      $videoSrc = $(this).data("src");
    });


    $('#myModal').on('shown.bs.modal', function () {

      $("#video").attr(
        'src',
        $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"
      );

    });


    $('#myModal').on('hide.bs.modal', function () {

      $("#video").attr('src', $videoSrc);

    });



    // Main Slider
    new Swiper(".main-swiper", {
      speed: 800,
      effect: "fade",

      pagination: {
        el: ".main-slider-pagination",
        clickable: true,
      },

    });



    // Product Slider
    new Swiper(".product-swiper", {

      speed: 1000,
      spaceBetween: 20,

      navigation: {
        nextEl: ".product-carousel-next",
        prevEl: ".product-carousel-prev",
      },

      breakpoints: {

        0: {
          slidesPerView: 1,
        },

        480: {
          slidesPerView: 2,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        }

      }

    });



    // Testimonial Slider
    new Swiper(".testimonial-swiper", {

      speed: 1000,

      navigation: {
        nextEl: ".testimonial-arrow-next",
        prevEl: ".testimonial-arrow-prev",
      },

    });



    // Product Image Slider
    var thumb_slider = new Swiper(".thumb-swiper", {
      slidesPerView: 1,
    });


    new Swiper(".large-swiper", {

      spaceBetween: 10,
      effect: "fade",

      thumbs: {
        swiper: thumb_slider,
      },

    });



    // ===========================
    // PRODUCT FILTER (ISOTOPE)
    // ===========================

    var $grid = $('.grid').isotope({

      itemSelector: '.product-item',

      layoutMode: 'fitRows',

      filter: '.all'

    });



    $('.filter-btn').on('click', function () {


      var filterValue = $(this).attr('data-filter');


      if (filterValue === "all") {

        $grid.isotope({
          filter: '.all'
        });

      } else {

        $grid.isotope({
          filter: '.' + filterValue
        });

      }



      // Active button style
      $('.filter-btn').removeClass('active');

      $(this).addClass('active');


    });



    initProductQty();


  });



  // Preloader
  window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

      preloader.classList.add("hide-preloader");

    }

  });



})(jQuery);