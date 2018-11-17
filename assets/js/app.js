var instToken = '461538648.5e03d6a.b61627b45ea14d95a0cd48ed43835d2e'; // maylo77

var inst = {
	apiUrl: 'https://api.instagram.com/v1/',
	token: '3069679269.e96a138.ed7f70441e274e53ba2a7abd854f71c2',
	userId: '3069679269',
	cliendId: 'e96a138982fa4ce481823904dbb0be39'
}

// проверяет значение в инпуте
var validateInput = function(input) {
	var error = 0
	if (!input.value) {
		error++;
	}
	return !error;
}

// валидатор на email
var validateEmail = function(email) {
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}

$(function() {
	var watcherScroll = new WatcherScrollPage();


	var $instafeedLenta = document.querySelector('.instafeed > .instafeed__lenta');
	$.ajax({
		async: true,
		type: 'GET',
		url: inst.apiUrl + 'users/' + inst.userId + '/media/recent',
		dataType: 'jsonp',
		data: {access_token: inst.token, count: 20},
		success: function(response) {
			for( x in response.data ){
				$($instafeedLenta).append('<div class="instafeed__item"><a href="'+ response.data[x].link +'" target="_blank"><img src="'+ response.data[x].images.low_resolution.url +'"/></a></div>');
			}
			// console.log(response);
		},
		error: function(error) {
			console.log(error);
		}
	});

	// // мастера
	// var $masters = document.querySelectorAll('.js-master');
	// $masters.forEach(function(master) {
	// 	master.addEventListener('click', function (ev) {
	// 		ev.preventDefault();
	// 		var $masterName = this.querySelector('.master__name');
	// 		alert($masterName.innerText);
	// 	});
	// });

	// // услуги
	// var $services = document.querySelectorAll('.js-service');
	// $services.forEach(function(service) {
	// 	service.addEventListener('click', function (ev) {
	// 		ev.preventDefault();
	// 		// var code = this.dataset.code;
	// 		resetSelectedService();
	// 		classie.add(this, '_selected');
	// 	});
	// });

	// // скилы
	// var $skills = document.querySelectorAll('.js-skills > a');
	// $skills.forEach(function(skill) {
	// 	skill.addEventListener('click', function (ev) {
	// 		ev.preventDefault();
	// 		var code = this.dataset.code,
	// 			filteredService = Array.from($services).filter(function (service) {
	// 			return service.dataset.code === code;
	// 		});

	// 		resetSelectedService();
	// 		if (filteredService.length) {
	// 			classie.add(filteredService[0], '_selected');
	// 		}
	// 	});
	// });

	var resetSelectedService = function () {
		$services.forEach(function(service) {
			classie.remove(service, '_selected');
		});
	}

	var $callbackModal = $('.js-md_callback'); // модалка обратной связи
	$('.js-callback').on('click', function() {
		$('body').addClass('body-md');
		$callbackModal.addClass('_show');
	});

	// закрытие модалки при нажатие на overlay
	$('.js-md-close').on('click', function() {
		$('body').removeClass('body-md');
		$(this).parent().parent().parent().removeClass('_show');
	});

	// закрытие модалки при нажатие на крестик
	$('.md__overlay').on('click', function() {
		$('body').removeClass('body-md');
		$(this).parent().removeClass('_show');
	});
});
