
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var cards = [
	"geralt.png", "geralt.png",
	"ciri.png", "ciri.png",
	"jaskier.png", "jaskier.png",
	"iorweth.png", "iorweth.png",
	"triss.png", "triss.png",
	"yen.png", "yen.png"
];
shuffle(cards);

// alert(cards[4]);
// console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');


c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

var isOneCardVisible = false;
var turnCounter = 0;
var visibleNumber;
var lock = false;
var pairsLeft = 6;

function revealCard(number) {
	var opacityValue = $('#c' + number).css('opacity');

	if (opacityValue != 0 && lock == false) {
		
		lock = true;
		
		var picture = "url(img/" + cards[number] + ")";
		$('#c' + number).css('background-image', picture);
		$('#c' + number).addClass('cardA');
		$('#c' + number).removeClass('card');
	
		if (isOneCardVisible) {
			if (cards[visibleNumber] == cards[number]) {
				//alert("para");
				setTimeout(function() { hideTwoCards(visibleNumber, number); }, 750);
			} else {
				//alert("pudlo");
				setTimeout(function() { restoreTwoCards(visibleNumber, number); }, 1000);
			}
			turnCounter++;
			$('.score').html('Turn counter: ' + turnCounter);
			isOneCardVisible = false;
		} else {
			isOneCardVisible = true;
			visibleNumber = number;
			lock = false;
		}
	}
}

function hideTwoCards(card1, card2) {
	$('#c' + card1).css('opacity', 0);
	$('#c' + card2).css('opacity', 0);
	pairsLeft--;
	if(pairsLeft == 0) {
		$('.board').html('<h1>You win!<br>Done in ' + turnCounter + ' turns</h1>');
	}
	lock = false;
}

function restoreTwoCards(card1, card2) {
	$('#c' + card1).css('background-image', 'url(img/karta.png)');
	$('#c' + card1).addClass('card');
	$('#c' + card1).removeClass('cardA');
	
	$('#c' + card2).css('background-image', 'url(img/karta.png)');
	$('#c' + card2).addClass('card');
	$('#c' + card2).removeClass('cardA');
	lock = false;
}




