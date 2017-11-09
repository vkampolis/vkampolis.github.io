;(function(){
	"use strict";

	var config = {
		countdownDate: '02/19/2014 10:10 AM'
	};

	var app = {
		init: function(){
			app.countdown(config.countdownDate);

			// superslides
			$('#slides').superslides({
				play: 6000, // 6 seconds between each slide
				animation: 'fade'
			});
			
			// fittext
			$('.fittext').fitText(0.78, { minFontSize: '40px', maxFontSize: '100px' });

		},
		countdown: function(dt){
			var end = new Date(dt),
				_second = 1000,
				_minute = _second * 60,
				_hour = _minute * 60,
				_day = _hour * 24,
				timer;

			function pad(a){
				return (a < 10 ? '0' + a : a);
			}

			function showRemaining() {
				var now = new Date(),
					distance = end - now;

				if (distance < 0) {
					clearInterval(timer);
					return;
				}

				var days = Math.floor(distance / _day),
					hours = Math.floor((distance % _day) / _hour),
					minutes = Math.floor((distance % _hour) / _minute),
					seconds = Math.floor((distance % _minute) / _second);

				document.getElementById('days').innerHTML = days;
				document.getElementById('hours').innerHTML = pad(hours);
				document.getElementById('minutes').innerHTML = pad(minutes);
				document.getElementById('seconds').innerHTML = pad(seconds);
			}

			timer = setInterval(showRemaining, 1000);
		},
		domReady: function(){},
		windowLoad: function(){
			$('#loader').fadeOut();
		}
	};

	app.init();
	$(function(){
		app.domReady();

		$(window).load(app.windowLoad);
	});

})(jQuery)