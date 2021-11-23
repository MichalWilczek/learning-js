var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var hasloZamaskowane = zamaskujHaslo(haslo);
var ileSkuch = 0;

var yesSound = new Audio("yes.wav");
var noSound = new Audio("no.wav");

function zamaskujHaslo(haslo) {
	var hasloZamaskowane = "";
	for (i = 0; i < haslo.length; i++) {
		if (haslo.charAt(i) == " ") {
			hasloZamaskowane += " "; 
		} else {
			hasloZamaskowane += "-"; 
		}
	}
	return hasloZamaskowane;
}


function wypiszHaslo() {
	document.getElementById("plansza").innerHTML = hasloZamaskowane;
}

window.onload = start;

var iloscZnakow = 35;
var litery = new Array(iloscZnakow);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
	var trescDiv = "";
	var id = "";
	
	for (i=0; i < iloscZnakow; i++) {
		id = "lit" + i;		
		trescDiv += '<div class="litera" onclick="sprawdz('+i+')" id="'+id+'">'+litery[i]+'</div>';
		
		// W jednym wierszu chcemy mieć 7 elementów.
		if ((i + 1) % 7 == 0) {
			trescDiv += '<div style="clear: both;"></div>';
		}
	}
	
	document.getElementById("alfabet").innerHTML = trescDiv;
	wypiszHaslo();
}

String.prototype.ustawZnak = function(pozycjaZnaku, znak) {
	if (pozycjaZnaku > this.length - 1) {
		return this.toString();
	} else {
		return this.substr(0, pozycjaZnaku) + znak + this.substr(pozycjaZnaku + 1);
	}
}

function sprawdz(numer) {
	// Prosta metoda na debugowanie w JSie.
	//alert(numer);
	
	var trafiona = false;
	var id = "";

	for (i = 0; i < haslo.length; i++) {
		if (haslo.charAt(i) == litery[numer]) {
			hasloZamaskowane = hasloZamaskowane.ustawZnak(i, litery[numer]);
			trafiona = true;
		}
	}
	
	if (trafiona == true) {
		yesSound.play();
		
		id = "lit" + numer;
		document.getElementById(id).style.background = "#003300";
		document.getElementById(id).style.color = "#00c000";
		document.getElementById(id).style.border = "3px solid #00c000";
		document.getElementById(id).style.cursor = "default";
		
		wypiszHaslo();
	} else {
		noSound.play();
		
		id = "lit" + numer;
		document.getElementById(id).style.background = "#330000";
		document.getElementById(id).style.color = "#c00000";
		document.getElementById(id).style.border = "3px solid #c00000";
		document.getElementById(id).style.cursor = "default";
		document.getElementById(id).setAttribute("onclick", ";");
		
		//skucha
		ileSkuch++;
		var obraz = "img/s"+ ileSkuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == hasloZamaskowane) {
		document.getElementById("alfabet").innerHTML = 'Tak jest! Podano prawidłowe hasło: ' + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	}
	
	//przegrana
	if (ileSkuch >= 9) {
		document.getElementById("alfabet").innerHTML = 'Przegrana. Prawidłowe hasło to: ' + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	}
}