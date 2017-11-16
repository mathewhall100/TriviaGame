
/*Javascript for Star Wars game (Week 4 Homework )*/


$(document).ready(function() {


/*  --------------------------- Global variables ---------------------------------------------*/



var qGroup = $('#question-group');
var qNumber = $('#question-number');
var qStem = $('#question-stem');
var qOption1 = $('#option1');
var qOption2 = $('#option2');
var qOption3 = $('#option3');
var qOption4 = $('#option4');

var qAnswer = $('#question-answer');
var qExplain = $('#question-explain');

var qTime = $('#time-display');
var qTrack = $('#question-tracker');

var qButton = $('#go-submit-button');



/* -------------------------------- Objects ----------------------------------------------------*/



function Question (num, group, stem, options, ans, expl, image) {
	this.num = num;
	this.group = group;
	this.stem = stem;
	this.options = options;
	this.ans = ans;
	this.expl = expl;
	this.image = image;	
}

var solarSystem = [];
solarSystem[0] = new Question( 1, 'Solar System', 'What panet is known as the red planet?', ['Jupiter', 'Mars', 'Mercury', 'Saturn'], 2, 'The iron in the dust that covers Mars surface produced a red rust colour. ', 'mars.jpg');
solarSystem[1] = new Question( 2, 'Solar System', 'What is the name of the biggest crator on the moon?', ['South Pole-Aitken Basin', 'Langrenus', 'Copernicus', 'Tycho'], 1, 'The massive Aitken basin measures 2,500 kilometres (1,600 miles) across and is the largest, deepest and oldest basin on the Moon.', 'crator.jpg');
solarSystem[2] = new Question( 3, 'Solar System', 'Between which two planets is the asteroid belt found?', ['Saturn and Jupiter', 'Jupiter and Neptune', 'Saturn and Mars', 'Mars and Jupiter'], 4, 'The asteroid belt is the circumstellar disc in the Solar System located roughly between the orbits of the planets Mars and Jupiter.', 'asteroids.jpg');
solarSystem[3] = new Question( 4, 'Solar System', 'Which is the largest planet in the Solar System?', ['Earth', 'Saturn', 'Jupiter', 'Neptune'], 3, 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.', 'jupiter.jpg');
solarSystem[4] = new Question( 5, 'Solar System', 'How far is the eartch from the sun (in miles)?', ['10 million', '50 million', '100 million', '500 million'], 3, 'The distance from the sun to earth is approx. 100 million miles, which is known as one astronomical unit (AU).', 'earthDistance.jpg');

var stars = [];
stars[0] = new Question( 1, 'Stars', 'What is the name of the brightest star in the night sky?', ['Sirius', 'Arcturus', 'Vega', 'Aldebaran'], 1, 'The brightest star in the sky is Sirius, also known as the “Dog Star” or, more officially, Alpha Canis Majoris, for its position in the constellation Canis Major.', 'sirius.jpg');
stars[1] = new Question( 2, 'Stars', 'What is a red dwarf?', ['A new star', 'An old star', 'A dead star', 'A red planet around a star'], 2, 'Red dwarfs are the commonest and logest-lived stars. They are small and cool compared to other stars and so emit a reddish light.', 'redDwarf.jpg');
stars[2] = new Question( 3, 'Stars', 'What is a star made of?', ['Hydrogen and helium', 'Gaseous iron', 'Burning phosphorous', 'Unknown'], 1, 'Stars are made of very hot gas. This gas is mostly hydrogen and helium, which are the two lightest elements. Stars shine by burning hydrogen into helium in their cores, and later in their lives create heavier elements.', 'sunGases.jpg');
stars[3] = new Question( 4, 'Stars', 'How many stars are in the milky way?', ['100 milion', '1 billion', '10 billion', '100 billion'], 4, 'In one calculation, the Milky Way has a mass of about 100 billion solar masses, so it is easiest to translate that to 100 billion stars.', 'milky_way.jpg');
stars[4] = new Question( 5, 'Stars', 'What process causes the star to shine?', ['Burning oxygen', 'Plasma generation', 'Thermonuclear fusion', 'Nuclear fission'], 3, 'For at least a portion of its life, a star shines due to thermonuclear fusion of hydrogen into helium in its core, releasing energy that traverses the stars interior and then radiates into outer space.', 'burningSun.jpg');


var galaxies = [];
galaxies[0] = new Question( 1, 'Galaxies', 'Which galaxy is closest to the Milky Way?', ['Hercules', 'Andromeda', 'Triangulum', 'Sextens'], 2, 'At a distance of about 2.5 million light years, the Andromeda galaxy (also known as NGC 224 and M31) is the nearest galaxy to the Earth. Like earth it is a spiral galaxy.', 'andromeda.jpg');
galaxies[1] = new Question( 2, 'Galaxies', 'What is are galaxies made of?', ['Stars', 'Dark matter', 'Dust', 'All of the above'], 4, 'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word galaxy is derived from the Greek galaxias (γαλαξίας), literally "milky", a reference to the Milky Way.', 'galaxyComp.jpg');
galaxies[2] = new Question( 3, 'Galaxies', 'What is the name of the largest cluster of galaxies known about?', ['Laniaka', 'Stella', 'Bettleguese', 'Apollo'], 1, 'The Laniaka Supercluster is the biggest known galaxy supercluster and is home to the Milky Way and approximately 100,000 other nearby galaxies.', 'laniaka.jpg');
galaxies[3] = new Question( 4, 'Galaxies', 'What galaxy is easily seen with an small amateur telescope ?', ['Heroditus', 'M101', 'Triberius', 'Andromeda'], 4, 'The Andromeda Galaxy belongs to the constellation Andromeda. It is the farthest object that can be seen with bare eyes.', 'andromeda.jpg');
galaxies[4] = new Question( 5, 'Galaxies', 'How wide is a typical galaxies', ['10 light years', '100 light years', '10,000 light years ', 'More than 100,000 light years'], 4, 'M87, an elliptical galaxy is around 980,000 light years in diameter. The Milky Way is only 100,000 light years in diameter. Lets not even get into Hercules A, which is 1.5 million light years across.', 'milky_way.jpg');


var phenomena = [];
phenomena[0] = new Question( 1, 'Phenomena', 'What is the name of the largest cluster of galaxies known about?', ['Laniakea', 'Stella', 'Bettleguese', 'Apollo'], 1, 'The Laniakea Supercluster is the biggst known galaxy supercluster and is home to the Milky Way and approximately 100,000 other nearby galaxies.', 'Laniaka.jpg');
phenomena[1] = new Question( 2, 'Phenomena', 'Where do you find black holes?', ['Edge of the universe', 'Center of galaxies', 'Between galaxies', 'All of the above'], 4, 'Black holes are everywhere! As far as astronomers can tell, there are probably millions of black holes in our Milky Way Galaxy alone.', 'blackHoles.jpg');
phenomena[2] = new Question( 3, 'Phenomena', 'What can escape from a black hole?', ['Light', 'Superstellar dust', 'Electromagnetic radiation', 'Nothing'], 4, 'A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—not even particles and electromagnetic radiation such as light—can escape from inside it.', 'blackHole1.jpg');
phenomena[3] = new Question( 4, 'Phenomena', 'What is a  nebula?', ['A star cluster', 'Mostly dust and hot gas!', 'A giant yellow star', 'None of the above'], 2, 'A nebula (Latin for "cloud" or "fog"; pl. nebulae, nebulæ, or nebulas) is an interstellar cloud of dust, hydrogen, helium and other ionized gases.', 'nebula.jpg');
phenomena[4] = new Question( 5, 'Phenomena', 'What makes up most of the mass of the universe?', ['Helium', 'Hydrogen', 'Dark matter', 'Stars'], 3, 'Roughly 80 percent of the mass of the universe is made up of material that scientists cannot directly observe. Known as dark matter, this bizarre ingredient does not emit light or energy.', 'darkMatter.jpg');

var questions = [];

var Quiz = {

	index: 0,
	score: 0,
	correct: [],
	answers: [],

	timer: 0,
	intervalId: 0,
	timerRunning: false,

	notTwice: true,


	questionAdd: function(index) {

		var str = "";

		qGroup.text(questions[index].group);
		qNumber.text('Question number ' + (index + 1) + ' of ' +  questions.length);
		qStem.text(questions[index].stem);
		qOption1.html(questions[index].options[0]);
		qOption2.text(questions[index].options[1]); 
		qOption3.text(questions[index].options[2]); 
		qOption4.text(questions[index].options[3]); 

		$('input[name="radios"]').prop('disabled', false);
		$('input[name="radios"]').prop('checked', false);

	},


	timeDown: function() {

		if (!Quiz.timerRunning) {
		Quiz.intervalId = setInterval(Quiz.decrement, 1000);
		Quiz.timerRunning = true;
		}

	},


	decrement: function() { 

		var str = "";
		
		str = Quiz.timer--;

		if (Quiz.timer < 9) {str = "0" + str;}
		str = str + ":00";
		qTime.text(str);

		if (Quiz.timer < 0) { Quiz.outOfTime ();}

	},


	answerHandler: function(answer) {

		var optionIndex = 0;

		if (Quiz.notTwice) {

			Quiz.notTwice = false;

			clearInterval(Quiz.intervalId);
			Quiz.timerRunning = false;

			if (answer == questions[Quiz.index].ans) { 
				Quiz.score++; 
				Quiz.correct[Quiz.index] = 'correct';
				Quiz.answers[Quiz.index] = questions[Quiz.index].options[answer-1];

				optionIndex = questions[Quiz.index].ans - 1;
				qAnswer.html('<span class="text-green">Correct!<br /><br />The answer is ' + questions[Quiz.index].options[optionIndex]) + '.</span>';
				qExplain.html('<span class="text-green">' + questions[Quiz.index].expl) + '.</span>';


				}

				else {

				Quiz.correct[Quiz.index] = 'incorrect';
				Quiz.answers[Quiz.index] = questions[Quiz.index].options[answer-1]; 

				optionIndex = questions[Quiz.index].ans - 1;
				qAnswer.html('<span class="text-red">Incorrect!<br /><br />The correct answer is ' + questions[Quiz.index].options[optionIndex]) + '.</span>';
				qExplain.html('<span class="text-red">' + questions[Quiz.index].expl) + '.</span>';
				}

			Quiz.delay (3000);

		}

	},


	delay: function(delay) {

		$('input[name="radios"]').prop('disabled', true);

		setTimeout(Quiz.nextQuestion, delay)

	},


	nextQuestion: function() {

			qTime.text('00:00');

			qAnswer.empty();
			qExplain.empty();

			Quiz.notTwice = true;

			Quiz.index++;
			Quiz.questionTrack();

			if (Quiz.index == questions.length) { Quiz.quizOver (); }

				else {

				Quiz.questionAdd (Quiz.index);

				Quiz.timer = 6;
				Quiz.timeDown ();
				}	

	},


	questionTrack: function() {

		var str = "";

		str = 'Question ' + Quiz.index + ' : ' + Quiz.correct[Quiz.index-1] + '<br /><br />';
		qTrack.append(str);

	},


	outOfTime: function() {

		var optionIndex = 0;

		Quiz.notTwice = false;

		clearInterval(Quiz.intervalId);
		Quiz.timerRunning = false;

		optionIndex = questions[Quiz.index].ans - 1;
		qAnswer.html('<span class="text-red">Timeout! <br /><br />The correct answer is ' + questions[Quiz.index].options[optionIndex]) + '.</span>';
		qExplain.html('<span class="text-red">Explanation: &nbsp;' + questions[Quiz.index].expl) + '.</span>';

		Quiz.correct[Quiz.index] = 'not answered';
		Quiz.answers[Quiz.index] = 'no answer submitted';

		Quiz.delay (3000);

	},


	quizOver: function() {

		var str = "";

		qTime.text('00:00');
		qAnswer.text('Quiz over!'); 
		qExplain.text('You scored ' + Quiz.score + ' out of ' + questions.length + ' correct.');

		str='<br /><br /><button type="submit" id="see-answers" class="btn btn-primary another-quit">See Answers</button>';
		qExplain.append(str);

		str='<button type="submit" id="play-again" class="btn btn-primary another-quit">Restart quiz</button>';
		qExplain.append(str);

		str='<button type="submit" id="quit" class="btn btn-primary another-quit">Quit</button>';
		qExplain.append(str);

		$('#see-answers').click(function() { 
			Quiz.seeAnswers (); });

		$('#play-again').click(function() { Quiz.playAgain (); });

		$('#quit').click(function() { Quiz.quit (); });

	},


	seeAnswers: function() {

		var str = "";
		var ansStr = "";

		qNumber.text(questions.length + ' questions in total.');
		qStem.text('Try another theme (top-right) after reviewing your answers.');
		qOption1.text('Solar system contains the earth and other planets');
		qOption2.text('Stars are massive hot balls of gas'); 
		qOption3.text('Galaxies contain billions of stars'); 
		qOption4.text('Phenomena include nebulae and black holes'); 

		$('input[name="radios"]').prop('disabled', true);
		$('input[name="radios"]').prop('checked', false);

		qAnswer.empty();
		qExplain.empty();
		qButton.empty();

		str='<button type="submit" id="hide" class="btn btn-primary another-quit">Hide answers</button>';
		qButton.html(str);
		$('#hide').click(function() { Quiz.hideAnswers (); });


		for (var i=0; i < questions.length; i++) {

			if (Quiz.answers[i] == "no answer submitted") {ansStr = 'No answer submitted.<br />';}
				else {ansStr = 'You answered ' + (Quiz.answers[i]) + '<br />';}

			str = '<div class = "all-answers"><u><h4>Question ' + (i+1) + '.</h4></u><br />';
			str = str + ansStr;
			str = str + 'The correct answer is ' + questions[i].options[questions[i].ans-1] + '.<br />'; 
			str = str + questions[i].expl + '.<br /></div>';
			qAnswer.append(str);

			str = '<img class="answer-images" src="assets/images/' + questions[i].image + '" height="150px">';
			qAnswer.append(str);

			str = '<span class="clearfix"><hr /></span>';
			qAnswer.append(str);

		}

		str='<button type="submit" id="play-again" class="btn btn-primary another-quit">Restart Quiz</button>';
		qExplain.append(str);

		str='<button type="submit" id="quit" class="btn btn-primary another-quit">Quit</button>';
		qExplain.append(str);

		$('#play-again').click(function() { Quiz.playAgain (); });
		$('#quit').click(function() { Quiz.quit (); });
	
	},


	hideAnswers: function() {

		var str = "";

		qAnswer.empty();
		qExplain.empty();
		qButton.empty();

		str='<button type="submit" id="see-answers" class="btn btn-primary another-quit">Show Answers</button>';
		qButton.append(str);

		str='<button type="submit" id="play-again" class="btn btn-primary another-quit">Restart quiz</button>';
		qButton.append(str);

		str='<button type="submit" id="quit" class="btn btn-primary another-quit">Quit</button>';
		qButton.append(str);

		$('#see-answers').click(function() { Quiz.seeAnswers (); });
		$('#play-again').click(function() { Quiz.playAgain (); });
		$('#quit').click(function() { Quiz.quit (); });

	},


	playAgain: function() {

		var str = "";

		qAnswer.empty();
		qExplain.empty();
		qTrack.empty();
		qButton.empty();

		Quiz.index = 0;
		Quiz.score = 0;
		Quiz.correct = [];

		Quiz.notTwice = true;

		str='<button type="submit" id="submit" class="btn btn-primary another-quit">Submit</button>';
		qButton.html(str);

		/*Add event listener to submit button*/

		$('#submit').click(function() {
		var radioValue = $('input[name="radios"]:checked').val();

		if (radioValue) {Quiz.answerHandler (radioValue);}
		
		});

		Quiz.questionAdd (Quiz.index);

		Quiz.timer = 6;
		Quiz.timeDown ();
	},


	quit: function() {
	
	/*link to another website*/

	},



};  /*close of Quiz object*/



/*  --------------------- calls ------------------------------------------------------------------------*/



/*Load default set of questions into questions array*/

for (var i=0; i < solarSystem.length; i++) {
	questions[i] = solarSystem[i];
	}

/*Event handlers for top-right 'theme' menu 
  Changes theme by loading in different sets of questions in questions array
  then restarts quiz with new questions*/

$('#solar-system').click(function() {

	for (var i=0; i < solarSystem.length; i++) {
		questions[i] = solarSystem[i];
		}

	Quiz.playAgain ();

});

$('#stars').click(function() {

	for (var i=0; i < stars.length; i++) {
		questions[i] = stars[i];
	}

	Quiz.playAgain ();

});

$('#galaxies').click(function() {

	for (var i=0; i < galaxies.length; i++) {
		questions[i] = galaxies[i];
	}

	Quiz.playAgain ();
});

$('#phenomena').click(function() {

	for (var i=0; i < phenomena.length; i++) {
		questions[i] = phenomena[i];
	}

	Quiz.playAgain ();

});


/*Uncheck all radio buttons to start with*/

$('input[name="radios"]').prop('disabled', true);

/*Create go button and attach event handling*/

qButton.append('<button type="submit" id="go" class="btn btn-primary another-quit">Go</button>');

$('#go').click(function() {

	/*Replace go button with submit button */

	qButton.html('<button type="submit" id="submit" class="btn btn-primary another-quit">Submit</button>');

	/*Add event listener to submit button*/

	$('#submit').click(function() {
		var radioValue = $('input[name="radios"]:checked').val();

		if (radioValue) {Quiz.answerHandler (radioValue);}
		
		});

	/*Start timer*/

	Quiz.timer = 6;
	Quiz.timeDown ();

	/*Start Quiz by displaying first question*/

	Quiz.questionAdd (0);

});




});  /*close of document ready function*/
