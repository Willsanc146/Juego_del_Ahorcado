$('.menu-icon').click(function () {
	$(this).toggleClass('active');
	$('.navigation-menu').toggleClass('active');
	$('.menu-icon i').toggleClass('fa-times');
});
alert(
	"Para iniciar a jugar por favor ingresa a 'AGREGAR NUEVA PALABRA', agrega todas las palabras con las que quieras jugar."
);
