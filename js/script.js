// event pada saat link di klik
$('.page-scroll').on('click', function(e) {	// jquery carikan saya sebuah elemen yang punya nama class('').kemudian pada saat di('klik', jalankan fungsi(yang menerima parameter) berikut) {

	// ambil isi href
	var tujuan = $(this).attr('href');  // jquery(cari elemen yang bersangkutan || elemen href/a yang bersangkutan).kemudian ambil isi dari attribut('href-nya');

	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);  // penggil beserta section yang bersangkutan

	// @note : kita ambil elemennya agar kita mengetahui jarak elemen tersebut ke-paling atas tujuan kita 

	// pindahkan scroll
	$('html').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');

	// @note : .offsset() => menghitung jarak dari suatu elemen ke-elemen paling atas.

	// @note : scrollTop => fungsinya yaitu untuk mengetahui jarak antara sebuah elemen ke posisi paling atas sama halnya seperti offset hanya saja ketika halamannya di scroll, nilai scrollTop nya itu berubah.

	e.preventDefault();

	// @note : preventDefault() => menonaktifkan fungsi dari href || agar elemen href tidak berjalan


});



// efek paralax
// jQuery buatkan kondisi ketika (window).discroll(lakukan fungsi berikut() {
$(window).scroll(function() {
	// dapatkan / tangkap jarak scroll
	let wScroll = $(this).scrollTop();
	// jQuery carikan class().kemudian ubah css-nya sebagai berikut({
	$('.jumbotron img').css({
		// gerakkan gambar keatas sesuai dengan jarak dari wScroll-nya kemudian / 4
		// wScroll / 4 bermakna kecepatan pargeseran elemen || justmyopinion
		'transform' : 'translate(0, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll / 1.2 +'%)'
	});


	// galeri
	if ( wScroll > $('.gallery').offset().top - 250 ) {
		$('.gallery .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.gallery .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});



// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});