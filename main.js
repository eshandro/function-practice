var tripleFive = function() {
	for(i=0; i<3; i++) {
		console.log("Five!");
	}
}
// tripleFive();

var lastLetter = function(string) {
	console.log(string.charAt(string.length-1));
}
// lastLetter('Erik');

var square = function(number) {
	console.log(number * number);
}
// square(6);

var negate = function(number) {
	console.log(-number);
}
// negate(120);

var toArray = function(a,b,c) {
	array = [a,b,c];
	console.log(array);
}
// toArray(1,2,'Erik');

var startsWithA = function(string) {
	string = string.toLowerCase();
	if (string.charAt(0) === 'a') {
		console.log(true)
	}
	else {
		console.log(false)
	}
}
// startsWithA('Erik');
// startsWithA('Amy');

var excite = function(string) {
	console.log(string + "!!!");
}
// excite("hello");

var sun = function(string) {
	string = string.toLowerCase()
	if (string.indexOf('sun') !== -1) {
		console.log(true);
	}
	else {
		console.log(false)
	}
}
// sun("hello");
// sun("Sunflower");
// sun("notsunny");

var tiny = function(number) {
	if (number < 1 && number > 0) {
		console.log(true)
	}
	else {
		console.log(false)
	}
}
// tiny(0.2);
// tiny(1/2);
// tiny(1);
// tiny(-5);

var getSeconds = function(time) {
	var timeArray = time.split(":");
	var seconds = parseInt(timeArray[0]) * 60;
	seconds = seconds + parseInt(timeArray[1]);
	console.log(seconds);
}
// getSeconds('10:25');
// getSeconds('24:00');
