$( document ).ready(function() {
	$(".card-price").has("del").css("color", "#E66767" );

	$('.slick-arrow').addClass("position-absolute slick-arrow top-50");
	if( $('.vertical-slide').length){
	  $('.vertical-slide').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding: '0px',
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev"><i class="fas fa-angle-up"></i></span>',
		nextArrow: '<span class="slick-next"><i class="fas fa-angle-down"></i></span>',
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  mobileFirst: true,
			  arrows: true,
			  slidesToShow: 1,
			  vertical: false,
			  centerMode: true,
			  verticalSwiping: false
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: true,
			  slidesToShow: 1,
			  vertical: false,
			  verticalSwiping: false
			}
		  }
		]
	  });
	}

	if( $('.slider').length){
	  $('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		centerPadding: '0px',
		centerMode: true,
		prevArrow: '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
		nextArrow: '<span class="slick-next"><i class="fas fa-angle-right"></i></span>',
		responsive: [
			{
				mobileFirst: true,
				breakpoint: 1200,
				settings: {
				  arrows: true,
				  centerPadding: '0px',
				  slidesToShow: 3,
				  centerMode: true,
				  slidesToScroll: 1
				}
			  },
			{
				mobileFirst: true,
				breakpoint: 992,
				settings: {
				  arrows: true,
				  centerPadding: '0px',
				  slidesToShow: 3,
				  centerMode: true,
				  slidesToScroll: 1
				}
			  },
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerPadding: '0px',
				slidesToShow: 2,
				centerMode: true,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
	}
	 
	$(".vertical-item img").on("click",function(){
	  var imgClicked = $(this).attr("src");
	  $(".vertical-item img").removeClass("img-clicked")
	  $(this).addClass("img-clicked");
	  $(".big-image img").attr("src",imgClicked);
	});  

	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	//obter a raiz do documento
	var rootElement = document.documentElement;

	function scrollToTop(){

	  rootElement.scrollTo({
		top:0,
		behavior:"smooth"
	  })

	}

	scrollToTopBtn.addEventListener("click",scrollToTop);

	$(".dropdown-toggle").next(".dropdown-languages").children().on("click",function(){
		$(".lang-dropdown").collapse("hide");
		if($(this).index() == 0){
	
		  $(".dropdown-label").text("Select size");
		  $("#title-payment").text("Payment Methods");
		  $('.add-btn').text('Add');
		  $(".breadcrumb li:nth-child(1) a").text("Product");
		  $(".breadcrumb li:nth-child(2) a").text("Girls");
		  $(".breadcrumb li:nth-child(3)").text("Dresses");
		  $('.filter-block button').eq(0).text("Description");
		  $('.filter-block button').eq(1).text("Composition");
		  $('#prodFilters .filter-block button').eq(2).text("Size");
		  $('.filter-block button').eq(3).text("Price");
		  $('.text-tbm-gostar').text('You might also like');
	
		  $('.footer-title-button b').eq(0).text('Information');
		  $('.footer-title-button').eq(2).text('Customer service');
		  $('.office-hours p').text('Monday to Friday between 10:30 am and 2:00 pm and from \n 3:00 pm to 7:30 pm, except holidays and Sundays.');
	
		  $('.footer-txt-language').text("Language");
		  $('.footer-txt-social').text("Follow us");        
		  
		  $('#pag-footer-1 ul li:nth-child(1) a').text('Our history');
		  $('#pag-footer-1 ul li:nth-child(2) a').text('Brands');
		  $('#pag-footer-1 ul li:nth-child(3) a').text('Contacts');
		  
		  $('#pag-footer-2 ul li:nth-child(1) a').text('Exchanges or returns');
		  $('#pag-footer-2 ul li:nth-child(2) a').text('Terms and conditions');
		  $('#pag-footer-2 ul li:nth-child(3) a').text('Privacy Policy');
		  $('#pag-footer-2 ul li:nth-child(4) a').text('Complaint book');
		  $('.footer-copy-text f').text('All rights reserved');
	
		} else if ($(this).index() == 1){
		  $(".dropdown-label").text("Selecciona el tamaño");
		  $("#title-payment").text("Métodos de pago");
		  $('.add-btn').text('Agregar');
		  $(".breadcrumb li:nth-child(1) a").text("Product");
		  $(".breadcrumb li:nth-child(2) a").text("Chicas");
		  $(".breadcrumb li:nth-child(3)").text("Vestidos");
		  $('.filter-block button').eq(0).text("Descripción");
		  $('.filter-block button').eq(1).text("Composición");
		  $('#prodFilters .filter-block button').eq(2).text("Tamaño");
		  $('#prodFilters .filter-block button').eq(3).text("Precio");
		  $('.text-tbm-gostar').text('También te puede interesar');
	
		  $('.footer-title-button b').eq(0).text('Información');
		  $('.footer-title-button').eq(2).text('Servicio al Cliente');
		  $('.office-hours p').text('De lunes a viernes de 10:30 a 14:00 horas y de \n 15:00 a 19:30 horas, excepto festivos y domingos.');
		  
		  $('.footer-txt-language').text("Idioma");
		  $('.footer-txt-social').text("Síganos");        
			  
		  $('#pag-footer-1 ul li:nth-child(1) a').text('Nuestra historia');
		  $('#pag-footer-1 ul li:nth-child(2) a').text('Marcas');
		  $('#pag-footer-1 ul li:nth-child(3) a').text('Contactos');
	
		  $('#pag-footer-2 ul li:nth-child(1) a').text('Cambios o devoluciones');
		  $('#pag-footer-2 ul li:nth-child(2) a').text('Términos y Condiciones');
		  $('#pag-footer-2 ul li:nth-child(3) a').text('Política de Privacidad');
		  $('#pag-footer-2 ul li:nth-child(4) a').text('Libro de reclamaciones');
		  $('.footer-copy-text f').text('Todos los derechos reservados');
	
		} else if ($(this).index() == 2){
		  $(".dropdown-label").text("Selecionar tamanho");
		  $("#title-payment").text("Métodos de pagamento");
		  $('.add-btn').text('Adicionar');
		  $(".breadcrumb li:nth-child(1) a").text("Produto");
		  $(".breadcrumb li:nth-child(2) a").text("Rapariga");
		  $(".breadcrumb li:nth-child(3)").text("Vestidos");
		  $('.filter-block button').eq(0).text("Descrição");
		  $('.filter-block button').eq(1).text("Composição");
		  $('#prodFilters .filter-block button').eq(2).text("Tamanho");
		  $('#prodFilters .filter-block button').eq(3).text("Preço");
	
		  $('.text-tbm-gostar').text('Também poderá gostar');
		  $('.footer-title-button b').eq(0).text('Informação');
		  $('.footer-title-button').eq(2).text('Atendimento ao cliente');
		  $('.office-hours p').text('Segunda a sexta entre as 10h30 e as 14h00 e das \n 15h00 às 19h30, exceto feriados e domingos.');
		  $('.footer-txt-language').text("Idioma");
		  $('.footer-txt-social').text("Siga-nos"); 
	
		  $('#pag-footer-1 ul li:nth-child(1) a').text('A nossa história');
		  $('#pag-footer-1 ul li:nth-child(2) a').text('Marcas');
		  $('#pag-footer-1 ul li:nth-child(3) a').text('Contactos');
	
		  $('#pag-footer-2 ul li:nth-child(1) a').text('Trocas ou devoluções');
		  $('#pag-footer-2 ul li:nth-child(2) a').text('Termos e Condições');
		  $('#pag-footer-2 ul li:nth-child(3) a').text('Política de Privacidade');
		  $('#pag-footer-2 ul li:nth-child(4) a').text('Livro de reclamações');
		  $('.footer-copy-text f').text('Todos os direitos reservados');
		}
	
		$('.lang-show').text($(this).text());
		$('.show-flag').attr('src',$(this).find(".lang-item img").attr('src'));
	  
			
	  });

});