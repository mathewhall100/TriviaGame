
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

var questions = [];
questions[0] = new Question( 1, 'The moon', 'What is the name of the largest crator on the moon?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 4, 'Hercules crator is really big', 'moon.png');
questions[1] = new Question( 2, 'Stars', 'What is the name of the bigest star in the sky?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 3, 'Hercules crator is really big', 'moon.png');
questions[2] = new Question( 3, 'Nebulae', 'What is ta nebulae made of?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 2, 'Hercules crator is really big', 'moon.png');
questions[3] = new Question( 4, 'Galaxies', 'WWhat is rthe nearest galaxy to the milky way??', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');
questions[4] = new Question( 5, 'Phenomena', 'What is the English translation of Pleides?', ['Hercules', 'heroditus', 'big crator', 'Apollo'], 1, 'Hercules crator is really big', 'moon.png');


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

		Quiz.index = 0;
		Quiz.score = 0;
		Quiz.correct = [];

		Quiz.notTwice = true;

		Quiz.questionAdd (Quiz.index);

		Quiz.timer = 10;
		Quiz.timeDown ();
	},

	quit: function() {
	
	/*link to another website*/
	},



};  /*close of Quiz object*/



/* calls */

Quiz.questionAdd (0);

$('#solar-system').click(function() {


});

$('#stars').click(function() {


});

$('#galaxies').click(function() {


});

$('#phenomena').click(function() {


});


$('#submit').click(function() {
	var radioValue = $('input[name="radios"]:checked').val();

	if (radioValue) {Quiz.answerHandler (radioValue);}
		
	});


/*Quiz.formListener ();*/

Quiz.timer = 10;
Quiz.timeDown ();










});  /*close of document ready function*/
