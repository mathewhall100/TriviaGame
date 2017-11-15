
/*Javascript for Star Wars game (Week 4 Homework )*/

$(document).ready(function() {

/* Global variables */

var qGroup = $('#question-group');
var qNumber = $('#question-number');
var qStem = $('#question-stem');
var qOption1 = $('#option1');
var qOption2 = $('#option2');
var qOption3 = $('#option3');
var qOption4 = $('#option4');

var qAnswer = $('#question-answer');
var qExplain = $('#question-explanation');

var qTime = $('#time-display');

var qTrack = $('#question-tracker');



/* Objects */

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
solarSystem[0] = new Question( 1, 'Solar System', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'moon.png');
solarSystem[1] = new Question( 2, 'Solar System', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'moon.png');
solarSystem[2] = new Question( 3, 'Solar System', 'What is a nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'moon.png');
solarSystem[3] = new Question( 4, 'Solar System', 'What is the nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');
solarSystem[4] = new Question( 5, 'Solar System', 'What is the English translation of Pleides?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');

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

	timer: 0,
	intervalId: 0,
	timerRunning: false,

	notTwice: true,


	questionAdd: function(index) {

		qGroup.text(questions[index].group);
		qNumber.text('Question number ' + (index + 1) + ' of ' +  questions.length);
		qStem.text(questions[index].stem);
		qOption1.html(questions[index].options[0]);
		qOption2.text(questions[index].options[1]); 
		qOption3.text(questions[index].options[2]); 
		qOption4.text(questions[index].options[3]); 

		$('input[name="radios"]').prop('checked', false);
	},


/*	formListener: function() {

		$('#submit').click(function() {
		var radioValue = $('input[name="radios"]:checked').val();

		if (radioValue) {Quiz.answerHandler (radioValue);}
		
		});

	},
*/

	timeDown: function() {

		if (!Quiz.timerRunning) {
		Quiz.intervalId = setInterval(Quiz.decrement, 1000);
		Quiz.timerRunning = true;
		}

	},


	decrement: function() { 

		Quiz.timer--;
		qTime.text(Quiz.timer );

		if (Quiz.timer == 0) { Quiz.outOfTime ();}

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

				optionIndex = questions[Quiz.index].ans - 1;
				qAnswer.text('Correct! The answer is: ' + questions[Quiz.index].options[optionIndex]);
				qExplain.text('Explanation.' + questions[Quiz.index].expl);


				}

				else {

				Quiz.correct[Quiz.index] = 'incorrect answer'; 

				optionIndex = questions[Quiz.index].ans - 1;
				qAnswer.text('Wrong!. The correct answer is: ' + questions[Quiz.index].options[optionIndex]);
				qExplain.text('Explanation.' + questions[Quiz.index].expl);
				}

			Quiz.delay (5000);

		}

	},


	delay: function(delay) {

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

			Quiz.timer = 11;
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

		clearInterval(Quiz.intervalId);
		Quiz.timerRunning = false;

		optionIndex = questions[Quiz.index].ans - 1;
		qAnswer.text('Timeout!. The correct answer is: ' + questions[Quiz.index].options[optionIndex]);
		qExplain.text('Explanation.' + questions[Quiz.index].expl);

		Quiz.correct[Quiz.index] = 'not answered';

		Quiz.delay (5000);

	},


	quizOver: function() {

		var str = "";

		qTime.text('00:00');
		qAnswer.text('Quiz over!'); 
		qExplain.text('You scored ' + Quiz.score + ' out of ' + questions.length + 'correct.');

		str='<br /><br /><button type="submit" id="play-again" class="btn btn-primary">Another quiz</button>';
		qExplain.append(str);

		str='<button type="submit" id="quit" class="btn btn-primary">Quit</button>';
		qExplain.append(str);

		$('#play-again').click(function() { Quiz.playAgain (); });
		$('#quit').click(function() { Quiz.quit (); });

	},

	playAgain: function() {

		qAnswer.empty();
		qExplain.empty();
		qTrack.empty();
		qTrack.html('Question tracker<br /><br />');

		Quiz.index = 0;
		Quiz.score = 0;
		Quiz.correct = [];

		Quiz.notTwice = true;

		Quiz.questionAdd (Quiz.index);

		Quiz.timer = 11;
		Quiz.timeDown ();
	},

	quit: function() {
	
	/*link to another website*/
	},



};  /*close of Quiz object*/



/* calls */


for (var i=0; i < solarSystem.length; i++) {
	questions[i] = solarSystem[i];
	}

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


Quiz.questionAdd (0);

$('#submit').click(function() {
	var radioValue = $('input[name="radios"]:checked').val();

	if (radioValue) {Quiz.answerHandler (radioValue);}
		
	});


/*Quiz.formListener ();*/

Quiz.timer = 11;
Quiz.timeDown ();










});  /*close of document ready function*/
