var hangman = {
	words: ["talk", "noise", "trouble", "golden", "trans", "background"],
	vids: ["https://s3.amazonaws.com/distill-videos/videos/processed/34/OneMinuteHD.mp4.mp4" , 
			"https://s3.amazonaws.com/distill-videos/videos/processed/256/HeadRoomTheGreenhouses-HD_1.mp4.mp4",
			"https://s3.amazonaws.com/distill-videos/videos/processed/2/manufacturing-video.mp4.mp4"],
	word: "",
	uArray: [],
	letter: "",
	guessNum: 10,
	wletter: [" "],
	isCorrect: false,
	// chooses a random word
	chooseword: function() {
		var rand = [Math.floor((Math.random() * this.words.length ) + 1)];
		this.word = this.words[rand];
		this.uArray = new Array(this.word);
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
		for (var i = 0; i < hangman.word.length; i++) {
			if (hangman.letter === hangman.word[i]) {
				this.isCorrect = true;
				this.uArray.splice(this.word.indexOf(this.letter), 1, this.letter);
				var jword = this.uArray.join(" ");
				console.log(this.word.indexOf(this.letter));
				// document.getElementById("l1b").innerHTML = '';
				document.getElementById("l1b").innerHTML = jword;
				return;
			} else {
				this.isCorrect = false;
			}
		}
	},
	changevid: function() {
		for (var i = 0; i < hangman.word.length; i++) {
			if (hangman.letter === hangman.word[i]) {
				var rand2 = [Math.floor(Math.random() * this.vids.length)];
				this.vids = this.vids[rand2];
				document.querySelector("#vid").src = this.vids;
				// var vid = document.getElementById("vid");
				// vid.setAttribute('src', this.vids);
			}
		}
	},
	// if wrong letter chose, print it to html and decrease score counter
	wrongletter: function () {
		if(!hangman.isCorrect) {
			hangman.guessNum--;
			hangman.wletter.push(hangman.letter);
			// this.noduplicate();
			console.log(this.wletter);
			var div = document.getElementById("l2");
			var down = document.createElement("div");
			down.setAttribute('id', 'down');
			down.innerHTML = hangman.letter;
			div.appendChild(down);
			var div2 = document.getElementById("l4");
			// var content = document.createTextNode(this.letter + " ");
			div2.innerHTML = this.guessNum;
			// div.appendChild(content);
			// console.log(hangman.guessNum);
		}
	},

	// for (var i = 0; i < track1.length; i++) {
	// 		html +='<div id="lnew">'+track1[i]+'</div>';
	// 	}
	// document.getElementById('l1').innerHTML+= html;
	// noduplicate: function() {
	// 	for (var i = 0; i < hangman.wletter.length; i++) {
	// 		if (hangman.letter !== hangman.wletter[i]) {
	// 			this.wletter.push(this.letter);
	// 		} else {
	// 			this.wletter = '';
	// 		}
	// 	}
	// },
	// when game is over, alert player if won or lost, reset game
	gameover: function() {
		if(hangman.guessNum < 1) {
			alert("Game over, try again!");
			this.guessNum = 10;
			document.getElementById("l1").innerHTML = "";
			document.getElementById("l1b").innerHTML = "";
			document.getElementById("l2").innerHTML = "";
			document.getElementById("l4").innerHTML = "10";
			this.chooseword();
			this.spaces();
		}
		var fword = this.uArray.join('');
		if(this.word == fword) {
			alert("Congratulations!");
			this.guessNum = 10;
			document.getElementById("l1").innerHTML = "";
			document.getElementById("l1b").innerHTML = "";
			document.getElementById("l2").innerHTML = "";
			document.getElementById("l4").innerHTML = "10";
			this.chooseword();
			this.spaces();
		}
	}

};

hangman.chooseword();
hangman.spaces();

document.onkeyup = function letterpress(event) {
	hangman.letter = String.fromCharCode(event.keyCode).toLowerCase();
	hangman.checkindex();
	hangman.changevid();
	hangman.wrongletter();
	hangman.gameover();
};




	// targetDiv.innerHTML = targetDiv.innerHTML + "new html"

	// targetDiv.appendChild()

	// replacelet: function() {
	// 	for (var i = 0; i < this.word.length; i++) {
	//     	this.uArray[i] = "_ ";
	//     	if (this.uArray.indexOf([i]) == checklet()) {
	//     		this.uArray[i] += hangman.letter;
	//     	};
	//     }
	// }

	// alreadypress: function() {
	// 	if (hangman.letter)
	// }
	// }
	// replacelet: function() {
	// 	for (var i = 0: hangman.uArray.length; i++) {
	// 		if (hangman.word[i] == hangman.letter){
	// 			hangman.newArray[i] = hangman.letter;
	// 		} else {
	// 			hangman.newArray[i] = hangman.letter;
	// 		}

	// 	}
	// 	$.each(hangman.uArray, function(index, value) {
 //    		if (this.value == hangman.letter) {
 //        		hangman.newArray.value = hangman.letter;
 //        	}
 //        });
 //        console.log(hangman.newArray[])
 //    },

// });
	// replacelet: function () {
	// 	Array.splice();
	// },

// set this in a for loop to create unique id's for each div created
	// var uniqueElement = document.createElement("div");
 //    uniqueElement.setAttribute("id", "video" + i);


// checklet: function() {
	// 	for (var i = 0; i < hangman.word.length; i++) {
	// 		var patt = new RegExp(hangman.letter);
	// 		var res = patt.test(hangman.word[i]);
	// 		console.log(res);
	// 		if (res){
	// 		    console.log(hangman.word[i]);
	// 		    var div = document.getElementById("l2");
	// 			var content = document.createTextNode(hangman.letter + " ");
	// 			div.appendChild(content);
	// 			var corlet = hangman.word.indexOf([i]);
	// 			console.log(corlet);
	// 			return hangman.word.indexOf([i]);
	// 		}
	// 	}
	// },

		// var patt = new RegExp(hangman.letter);
			// var res = patt.test(hangman.word[i]);
			// console.log(res);
			// if (res){
			//     console.log(hangman.word[i]);
			//     var div = document.getElementById("l2");
			// 	var content = document.createTextNode(hangman.letter + " ");
			// 	div.appendChild(content);
			// 	var corlet = hangman.word.indexOf([i]);
			// 	console.log(corlet);
			// 	return hangman.word.indexOf([i]);
			// }


// document.onkeyup = function letterpress(event) {
// 	hangman.letter = String.fromCharCode(event.keyCode).toLowerCase();
// 	console.log(hangman.letter);

// 		for (var i = 0; i < hangman.word.length; i++) {
// 			var patt = new RegExp(hangman.letter);
// 			var res = patt.test(hangman.word[i]);
// 			console.log(res);
// 			if (res){
// 			    console.log(hangman.word[i]);
// 			    var div = document.getElementById("l2");
// 				var content = document.createTextNode(hangman.letter + " ");
// 				div.appendChild(content);
// 			}
// 		}

// };

// 


// var html= "";


// for (var i = 0; i < track1.length; i++) {
// 		html +='<div id="lnew">'+track1[i]+'</div>';
// 	}
// document.getElementById('l1').innerHTML+= html;

// or

	
// print underline




// on key press checks if there is a match in array



	
	
	// 	// append the underscore with the letter press if true
	// 	}
	// }	
// }
	





	// use track[i].indexOf();
// }




// 	document.getElementById("text").innerHTML = letter;

// 	if (puzzleword.indexOf(letter) > -1) {
//         console.log(its a match

// 	console.log(letter);
// 	}




// for (var i = 0; i < track1.length; i++) {
//     document.getElementById("l1").innerHTML += track1[i];
// }

// var newHTML = [];
// for (var i = 0; i < track1.length; i++) {
//     newHTML.push('<span>' + track1[i] + '</span>');
// }

// $(document).ready(function() {
// 	$("#l1").html(newHTML.join(""));
// });



// if pressed the letter a boolean with be true and create and if statement
// that compares the input with RegExp object with the value of the html text
// if true, then a class that makes it visible is activated.
// function myFunction() {
//     var str = "The best things in life are free";
//     var patt = new RegExp("e");
//     var res = patt.test(str);
//     document.getElementById("demo").innerHTML = res;
// }






    // console(track1[i]);



// document.onkeyup = function letterpress(event) {
// 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
// 	document.getElementById("l1").innerHTML = letter;
// 	document.getElementById("l2").innerHTML = letter;
// 	document.getElementById("l3").innerHTML = letter;
// 	document.getElementById("l4").innerHTML = letter;
// 	document.getElementById("l5").innerHTML = letter;
// 	document.getElementById("l6").innerHTML = letter;
// 	document.getElementById("l7").innerHTML = letter;
// 	document.getElementById("l8").innerHTML = letter;
// 	document.getElementById("l9").innerHTML = letter;
// 	document.getElementById("l10").innerHTML = letter;







	// if (track1.indexOf(letter) > -1) {
 //        console.log("They Match!");
 //    } else {
 //    	console.log("The Don't Match!")
 //    }




	// console.log(letter);
	// }



// console.log("dog");