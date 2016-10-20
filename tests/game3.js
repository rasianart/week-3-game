var hangman = {
	words: ["hey", "there", "you", "boy", "or", "girl"],
	word: "",
	uArray: [],
	newArray: [],
	letter: "",
	guessNum: 0,
	isCorrect: false,
	// chooses a random word
	chooseword: function() {
		var rand = [Math.floor((Math.random() * this.words.length ) + 1)];
		this.word = this.words[rand];
		this.uArray = new Array(this.word);
		this.newArray = new Array(this.word);
		console.log(this.word);
	},
	// prints word to screen
	spaces: function() {
		for (var i = 0; i < this.word.length; i++) {
		    this.uArray[i] = "_ ";
		    // console.log(this.uArray[i]);
			var div = document.getElementById("l1");
			var content = document.createTextNode(this.uArray[i]);
			div.appendChild(content);
		}
	},
	// check if guess matches letter in array
	checklet: function() {
		for (var i = 0; i < hangman.word.length; i++) {
			if (hangman.letter === hangman.word[i]) {
				return true;
			};
		}
	},
	// gets the index of the matched letter in array
	checkindex: function() {
		for (var i = 0; i < hangman.word.length; i++) {
			if (hangman.letter === hangman.word[i]) {
				console.log(hangman.letter + " true")
				isCorrect = true;
				return hangman.word.indexOf(hangman.letter);;
			} else {
				isCorrect = false;
			};
		}
	},
	// replaces the underscore with the matched letter
	replacelet: function() {
		if (hangman.checklet()){
			hangman.uArray.splice(hangman.checkindex(), 1, hangman.letter); 
			// hangman.uArray = hangman.uArray.join(" ");
			console.log(hangman.uArray);
			document.getElementById("l1b").innerHTML = hangman.uArray;
			// hangman.uArray = Array.from(hangman.uArray);
			// delete(hangman.uArray);
			// return hangman.uArray;
		}
		
	},
	// if wrong letter chosed, counter goes up and prints guess to screen
	wrongletter: function () {
		if(!isCorrect) {
			hangman.guessNum++;
			var div = document.getElementById("l2");
			var div2 = document.getElementById("l4");
			var content = document.createTextNode(hangman.letter + " ");
			div2.innerHTML = hangman.guessNum;
			div.appendChild(content);
			console.log(hangman.guessNum);
		}
	} 

};

hangman.chooseword();
hangman.spaces();

document.onkeyup = function letterpress(event) {
	hangman.letter = String.fromCharCode(event.keyCode).toLowerCase();
	// console.log(hangman.letter);
	hangman.checklet();
	hangman.checkindex();
	// console.log(index);
	hangman.replacelet();
	hangman.wrongletter();
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