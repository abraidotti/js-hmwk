document.addEventListener('DOMContentLoaded', function(){	

	//exercise 1
	console.log('Exercise 1:');

	var firstNum = 5;
	var secondNum = 10;
	console.log(firstNum + secondNum);

	var firstString = 'Hello';
	var secondString = 'World!';
	console.log(firstString + ' ' + secondString);



	//exercise 2
	console.log('Exercise 2:');

	var interests = ['writing', 'playing music', 'hacking the planet'];
	console.log('I like ' + interests[0] + ' and ' + interests[2] + '.');



	//exercise 3
	console.log('Exercise 3:');

	var myNumber = 101;
	if (myNumber <= 100){
		console.log('Your number is less than 100.');
	} else {
		console.log('Your number is ' + myNumber + '.');
		console.log('That number is greater than 100.');
	};



	//exercise 4
	console.log('Exercise 4:');

	function yourName(nameString){
		console.log('You\'ve entered the name \'' + nameString + '\'.');
	};

	var name = 'Sandro';
	yourName(name);



	//exercise 5
	console.log('Exercise 5:');

	var doorPrize = function(doorNumber) {
		if (doorNumber === 1) {
			console.log('Door #' + doorNumber + ' reveals a spotted pig.');
		} else if (doorNumber === 2) {
			console.log('Door #' + doorNumber + ' reveals a bowl of blood.');
		} else if (doorNumber === 3) {
			console.log('Door #' + doorNumber + ' reveals another door.');
		} else {
			console.log('That\'s not an available door number.');
		}
	};

	for (var i = 1; i <= 3; i++) {
		doorPrize(i);
	};

	doorPrize('87');

});

