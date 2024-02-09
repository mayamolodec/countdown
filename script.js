document.addEventListener('DOMContentLoaded', () => {

	const Kazuha = new Date('Jan 1 2025 00:00:00');

	const daysVal = document.querySelector('.time_count_days #time_count_val');
	const hoursVal = document.querySelector('.time_count_hours #time_count_val');
	const minutesVal = document.querySelector('.time_count_minutes #time_count_val');
	const secondsVal = document.querySelector('.time_count_seconds #time_count_val');

	const daysText = document.querySelector('.time_count_days #time_count_text');
	const hoursText = document.querySelector('.time_count_hours #time_count_text');
	const minutesText = document.querySelector('.time_count_minutes #time_count_text');
	const secondsText = document.querySelector('.time_count_seconds #time_count_text');
	
	function declOfNum(number, titles) {  
    	let cases = [2, 0, 1, 1, 1, 2];  
    	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}


	const timeCount = () => {
		let now = new Date();
		let leftUntil = Kazuha - now;
		let days = Math.floor(leftUntil/1000/3600/24);
		let hours = Math.floor(leftUntil/1000/3600) % 24;
		let minutes = Math.floor(leftUntil/1000/60) % 60;
		let seconds = Math.floor(leftUntil/1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});
