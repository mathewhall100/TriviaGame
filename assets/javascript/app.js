
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
solarSystem[0] = new Question( 1, 'Solar System', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'crator.jpg');
solarSystem[1] = new Question( 2, 'Solar System', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'mars.jpg');
solarSystem[2] = new Question( 3, 'Solar System', 'What is a nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'crator.jpg');
solarSystem[3] = new Question( 4, 'Solar System', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'crator.jpg');
solarSystem[4] = new Question( 5, 'Solar System', 'What is the English translation of Pleides?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'crator.jpg');

var stars = [];
stars[0] = new Question( 1, 'Stars', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'moon.png');
stars[1] = new Question( 2, 'Stars', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'moon.png');
stars[2] = new Question( 3, 'Stars', 'What is a nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'moon.png');
stars[3] = new Question( 4, 'Stars', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');
stars[4] = new Question( 5, 'Stars', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');


var galaxies = [];
galaxies[0] = new Question( 1, 'Galaxies', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'moon.png');
galaxies[1] = new Question( 2, 'Galaxies', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'moon.png');
galaxies[2] = new Question( 3, 'Galaxies', 'What is a nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'moon.png');
galaxies[3] = new Question( 4, 'Galaxies', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');
galaxies[4] = new Question( 5, 'Galaxies', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');


var phenomena = [];
phenomena[0] = new Question( 1, 'Phenomena', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'moon.png');
phenomena[1] = new Question( 2, 'Phenomena', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'moon.png');
phenomena[2] = new Question( 3, 'Phenomena', 'What is a nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'moon.png');
phenomena[3] = new Question( 4, 'Phenomena', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');
phenomena[4] = new Question( 5, 'Phenomena', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');

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
				qExplain.html('<span class="text-green">Explanation: &nbsp;' + questions[Quiz.index].expl) + '.</span>';


				}

				else {

				Quiz.correct[Quiz.index] = 'incorrect';
				Quiz.answers[Quiz.index] = questions[Quiz.index].options[answer-1]; 

				optionIndex = questions[Quiz.index].ans - 1;
				qAnswer.html('<span class="text-red">Incorrect!<br /><br />The correct answer is ' + questions[Quiz.index].options[optionIndex]) + '.</span>';
				qExplain.html('<span class="text-red">Explanation: &nbsp;' + questions[Quiz.index].expl) + '.</span>';
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

			str = '<span class = "all-answers"><u><h4>Question ' + (i+1) + '.</h4></u><br />';
			str = str + ansStr;
			str = str + 'The correct answer is ' + questions[i].options[questions[i].ans-1] + '.<br />'; 
			str = str + 'Explanation: ' + questions[i].expl + '.<br /></span>';
			qAnswer.append(str);

			str = '<img class="answer-images" src="assets/images/' + questions[i].image + '" height="140px">';
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
