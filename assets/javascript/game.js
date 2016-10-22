var hangman = {
	words: ["more", "noise", "chord", "golden", "trans", "background"],
	vids: ["https://s3.amazonaws.com/distill-videos/videos/processed/34/OneMinuteHD.mp4.mp4", 
			"https://s3.amazonaws.com/distill-videos/videos/processed/256/HeadRoomTheGreenhouses-HD_1.mp4.mp4",
			"https://s3.amazonaws.com/distill-videos/videos/processed/2/manufacturing-video.mp4.mp4",
			"https://s3.amazonaws.com/distill-videos/videos/processed/2180/lighthouse.mp4"],
	poems: [" - My father had run off with an cocktail waitress who had the nose of a macaw and breasts the size of aborted mice, but she was thin. That's all that **** cared about.",
			" - Mother drank. I used to hate how she would walk my five year old self down to the liquor store",
			" - The orange stickiness would melt down and drip off my fingers while I walked slowly behind her and the brown bag she gripped to, filled with beer.",
			" - The wet yeast on her breath, that seemed to eclipse some part of a darker self, that would twirl her fingers around and around a phone cord in the kitchen,",
			" - I can't remember their faces.",
			" - I pulled my hair, jumped on the beds screaming till the sheets fell to heaps and wrote.",
			" - A small yellow envelope that I hid behind the old wood bookself.",
			" - I would slip it out carefully from behind and read it often, tracing my fingertips over the words.",
			" - I couldn't move her. I would shake, rattle her shoulder, feel for breath under her nose with two small fingers and know the terror of wondering if she was dead."],
	curpoem: "",
	word: "",
	uArray: [],
	letter: "",
	guessNum: 10,
	wletter: [],
	isCorrect: false,
	// chooses a random word
	chooseword: function() {
		var rand = Math.floor((Math.random() * 6 ));
		this.word = this.words[rand];
		this.uArray = new Array(this.word.length);
		console.log(this.word);
	},
	// prints word spaces to screen and initial score
	spaces: function() {
		for (var i = 0; i < this.word.length; i++) {
		    this.uArray[i] = "_ ";
			var div = document.getElementById("l1");
			var div2 = document.getElementById("l4").innerHTML = this.guessNum;
			var content = document.createTextNode(this.uArray[i]);
			div.appendChild(content);
		}
	},
	// check if letter matches and value, gets the index, and replaces underscore with letter
	// also creates variable to convert array into string and remove commas
	checkindex: function() {
		if (this.noduplicate2() == -1) {
			for (var i = 0; i < hangman.word.length; i++) {
				if (hangman.letter === hangman.word[i]) {
					this.isCorrect = true;
					this.changevid();
					this.uArray.splice(this.word.indexOf(this.letter), 1, this.letter);
					var jword = this.uArray.join(" ");
					document.getElementById("l1b").innerHTML = jword;
					return;
				} else {
					this.isCorrect = false;
				}
			}
		}
	},
	// replace multiple letters
	// checkindex2: function() {
	// 	// console.log(this.word.split(""));
	// 	// console.log(this.letter);
	// 	var spl = hangman.word.split("").map(function(itm, ii){ return itm === hangman.letter ? hangman.letter + " " : "_ " });
	// 	console.log(spl);
	// 	var jword2 = spl.join(" ");
	// 	document.getElementById("l1b").innerHTML =	jword2;
	// },
	// changes video 
	changevid: function() {
		var vidchoice;
		var rand2 = Math.floor(Math.random() * 4);
		console.log(rand2);
		vidchoice = this.vids[rand2];
		console.log(vidchoice);
		// document.querySelector("#vid").src = vidchoice;
		$('#vcontain').fadeOut('slow', function(){
			document.querySelector("#vid").src = vidchoice;
		});
		$('#vcontain').fadeIn('slow');
	},
	// chooses a random poem
	changepoem: function() {
		var poemchoice;
		var rand2 = Math.floor(Math.random() * 9);
		console.log(rand2);
		poemchoice = this.poems[rand2];
		console.log(poemchoice);
		this.curpoem = poemchoice;
	},
	// if wrong letter chose, print it to html and decrease score counter
	wrongletter: function () {
		if(!hangman.isCorrect) {
			if(this.noduplicate() == -1) {
				hangman.guessNum--;
				this.changepoem();
				this.wletter.push(this.letter);
				console.log(this.wletter);
				var div = document.getElementById("l2");
				var down = document.createElement("div");
				down.setAttribute('id', 'down');
				down.innerHTML = hangman.letter.toUpperCase() + hangman.curpoem;
				div.appendChild(down);
				var div2 = document.getElementById("l4");
				div2.innerHTML = this.guessNum;
			}
		}
	},
	// check if duplicate incorrect letters are guessed.  if already guess, no letter or count is added
	noduplicate: function() {
		var x = $.inArray(this.letter, this.wletter);
		return x;
	},
	// check if duplicate correct letters are guessed. 
	noduplicate2: function() {
		var y = $.inArray(this.letter, this.uArray);
		console.log(y);
		return y;
	},
	// when game is over, alert player if won or lost, reset game
	gameover: function() {
		if(hangman.guessNum < 1) {
			$('#l52').fadeTo(2000, 1);
			this.guessNum = 10;
			document.getElementById("l1").innerHTML = "";
			document.getElementById("l1b").innerHTML = "";
			document.getElementById("l2").innerHTML = "";
			document.getElementById("l4").innerHTML = "10";
			this.wletter.length = 0;
			this.chooseword();
			this.spaces();
		}
		var fword = this.uArray.join('');
		if(this.word == fword) {
			$('#l5').fadeTo(2000, 1);
			this.guessNum = 10;
			document.getElementById("l1").innerHTML = "";
			document.getElementById("l1b").innerHTML = "";
			document.getElementById("l2").innerHTML = "";
			document.getElementById("l4").innerHTML = "10";
			this.wletter.length = 0;
			this.chooseword();
			this.spaces();
		}
	}
};

hangman.chooseword();
hangman.spaces();

$('#init').click(function(){
	$(this).fadeOut('slow');


document.onkeyup = function letterpress(event) {
	hangman.letter = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById("init").style.display = 'none';
	document.getElementById("l5").style.display = 'none';
	document.getElementById("l52").style.display = 'none';
	hangman.checkindex();
	// hangman.checkindex2();
	hangman.wrongletter();
	hangman.gameover();
};
});


