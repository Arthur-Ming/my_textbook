/*document.querySelector(".left-column").addEventListener("click", (function (e) { 
	e.preventDefault();
	document.querySelector(e.target.getAttribute("href")).scrollIntoView({ block: "start", behavior: "smooth" }) 
}));
*/
document.querySelector(".content").addEventListener("click", (function (e) {

   "PRE" == e.target.tagName && navigator.clipboard.writeText(e.target.innerHTML)
}));


$('.left-column').on('click', 'a', function (e) {

   e.preventDefault();
   let h = $('.header__body').height();
   let el = $(this);
   let dest = el.attr('href'); // получаем направление
   $('html').animate({
      scrollTop: $(dest).offset().top - h // прокручиваем страницу к требуемому элементу
   }, 500 // скорость прокрутки
   );
});

$('.header__list').on('click', '.header__link', function (e) {
   e.preventDefault();

   let href = $(this).attr('href');

   if (href !== undefined && href !== '') {

      $('.content').each(function () {
         if ($(this).hasClass('content-active'))
            $(this).removeClass('content-active')
      });
      $(href).addClass('content-active');
   }
});



