var track1 = ["t", "h", "e", "r", "a", "p", "y"];
var html= "";
var underline = new Array(track1.length);

for (var i = 0; i < track1.length; i++) {
		html +='<div id="lnew"[i]>'+track1[i]+'</div>';
	}
document.getElementById('l1').innerHTML+= html;
// or

// for (var i = 0; i < track1.length; i++) {
//     underline[i] = "_ ";
//     // document.getElementById("l1").innerHTML = underline[i];
//     console.log(underline[i]);
// 	var div = document.getElementById("l1");
// 	var content = document.createTextNode(underline[i]);
// 	div.appendChild(content);
// }
// // print underline




// // on key press checks if there is a match in array
// document.onkeyup = function letterpress(event) {
// 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	
// 	for (var i = 0; i < track1.length; i++) {
// 		var patt = new RegExp(letter);
// 		var res = patt.test(track1[i]);
// 		console.log(res);
// 		if (res){
// 		    console.log(track1[i]);
// 		    var div = document.getElementById("l2");
// 			var content = document.createTextNode(letter + " ");
// 			div.appendChild(content);
			
// 		// append the underscore with the letter press if true
// 		}
// 	}	
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