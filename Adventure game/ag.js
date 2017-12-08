var title = document.getElementById('title');
var image = document.getElementById('image');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var options = document.getElementById('options');
var midden = document.getElementById('midden');
var p = document.getElementById('p');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var h1 = document.getElementById('h1');
var midden = document.getElementById('midden');
var dood = document.getElementById('dood');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var heeftSchaar = false;
var heeftTouw = false;
var sch = document.getElementById('sch');
var tou = document.getElementById('tou');

function start() {
	sch.style.display = "none";
	tou.style.display = "none";
	heeftSchaar = false;
	heeftTouw = false;
	h1.innerHTML = "Je bent op het vliegveld";
	image.src = "img/afbeelding1.jpg";
	document.getElementById("start").style.display = "none";
	option1.innerHTML = "Ga iets te drinken halen";
	option1.setAttribute("onclick", "optie1()");
	option2.innerHTML = "Blijf hier en wacht op je vliegtuig";
	option2.setAttribute("onclick", "vliegtuig1()");
	option3.innerHTML = "";
	option4.innerHTML = "";
	p.innerHTML = "Je bent op het vliegveld met 3 vrienden, jullie gaan op vakantie naar Sydney in Australië. Voordat je op het vliegtuig stapt kun je nog even wat drinken gaan halen( je vrienden hoeven niks )";
	p2.innerHTML = "";
	options.style.display = "inline";
	

}
function optie1() {
	h1.innerHTML = "Bij de bar";
	image.src = "img/afbeelding2.jpg";
	option1.innerHTML = "Water";
	option1.setAttribute("onclick", "vliegtuig1()");
	option2.innerHTML = "Cola";
	option2.setAttribute("onclick", "vliegtuig1()");
	option3.innerHTML = "Koffie";
	option3.setAttribute("onclick", "vliegtuig1()");
	option4.innerHTML = "Chocomel";
	option4.setAttribute("onclick", "vliegtuig1()");
	p.innerHTML = "De barvrouw vraagt wat je wilt drinken. Je kunt kiezen uit Water,Cola,Koffie of chocomel.";
}
function vliegtuig1() {
	h1.innerHTML = "Naar het vliegtuig";
	image.src = "img/afbeelding3.jpg";
	option1.innerHTML = "Ga naar het vliegtuig";
	option1.setAttribute("onclick","vliegtuig2()");
	option2.innerHTML = "";
	option3.innerHTML = "";
	option4.innerHTML = "";
	p.innerHTML = "Na lang wachten mogen jullie eindelijk naar het vliegtuig lopen en gaan jullie zitten. Je hebt er heel veel zin in!";

}
function vliegtuig2() {
	h1.innerHTML = "In het vliegtuig";
	image.src = "img/afbeelding4.jpg";
	option1.innerHTML = "Ga naar de WC"
	option1.setAttribute("onclick","wc()")
	option2.innerHTML = "Blijf zitten";
	option2.setAttribute("onclick","eten()")
	option3.innerHTML = "";
	option4.innerHTML = "";
	p.innerHTML = "Jullie zitten al een aantal uur in het vliegtuig, je verveeld je enorm erg.";

}
function wc() {
	h1.innerHTML = "Op de WC";
	image.src = "img/afbeelding5.jpg";
	option1.innerHTML = "Vraag om nieuwe wc papier aan een stewardess";
	option1.setAttribute("onclick", "chaos()")
	option2.innerHTML = "Ga naar een andere wc";
	option2.setAttribute("onclick", "chaos()")
	option3.innerHTML = "Gebruik geen wc papier";
	option3.setAttribute("onclick", "chaos()")
	option4.innerHTML = "";
	p.innerHTML = "Je zit net op de wc maar je komt erachter dat er geen wc papier meer is, je schaamt je een beetje om het te gaan vragen maar wat moet je anders?"
}
function eten() {
	h1.innerHTML = "In het vliegtuig";
	image.src = "img/afbeelding6.jpg";
	option1.innerHTML = "Bestel kip";
	option1.setAttribute("onclick", "chaos()")
	option2.innerHTML = "Bestel Biefstuk";
	option2.setAttribute("onclick", "chaos()")
	option3.innerHTML = "Bestel Vis";
	option3.setAttribute("onclick", "chaos()")
	option4.innerHTML = "Je hoeft niets";
	option4.setAttribute("onclick", "chaos()")
	p.innerHTML = "De stewardess komt langs met avondeten, ze vraagt wat je zou willen hebben"
}
function chaos() {
	h1.innerHTML = "Ergens op 2,3 KM hoogte";
	image.src = "img/afbeelding7.jpg";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "crash()");
	p.innerHTML = "Je hoort ineens een knal buiten! Iedereen begint te schreeuwen en de piloot roept om dat 1 van de motoren is ontploft en ze weten niet hoe! Je voelt dat jullie heel erg snel dalen en je weet bijna zeker dat dit het einde zal zijn.";
	p2.innerHTML = "";
	option2.innerHTML = "";
	option3.innerHTML = "";
	option4.innerHTML = "";
}
function crash() {
	h1.innerHTML = "Je bent gecrasht!";
	image.src = "img/black.jpg";
	p.innerHTML = "";
	midden.innerHTML = "Een aantal dagen later...";
	midden.style.display = "inline";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "crash2()");
}
function crash2() {
	h1.innerHTML = "Kapot vliegtuig";
	image.src = "img/afbeelding8.jpg";
	option2.innerHTML = "Ga het vliegtuig uit om te kijken waar je bent";
	option2.setAttribute("onclick", "buiten()");
	option1.innerHTML = "Doorzoek het vliegtuig om je vrienden te zoeken";
	option1.setAttribute("onclick", "vliegtuig3()");
	p.innerHTML = "Je word wakker... Je hebt erg veel hoofdpijn en voelt je slecht. Je ziet dat je bent neergestort, waarschijnlijk lig je hier al een aantal dagen.";
	p2.innerHTML = "Je ziet je vrienden nergens okal zaten ze eerst naast je, ook heb geen idee waar je bent...";
	midden.style.display = "none";
}
function vliegtuig3() {
	h1.innerHTML = "Ergens in het vliegtuig";
	image.src = "img/afbeelding9.jpg";
	p.innerHTML = "Je loopt door het vliegtuig heen, je ziet een aantal mensen liggen maar ze hebben de crash niet overleefd, je ziet je vrienden nergens.";
	p2.innerHTML = "Even later zie je een schaar liggen, zul je hem meenemen?";	
	option1.innerHTML = "Doorzoek het vliegtuig verder";
	option2.innerHTML = "Ga naar buiten en kijk waar je bent";
	option1.setAttribute("onclick", "boem()");
	option3.innerHTML = "";
	option2.setAttribute("onclick", "buiten()");
	img2.style.display = "block";
	img2.setAttribute("onclick", "schaar1()");
	if (heeftSchaar ==true) {
		img2.style.display = "none";
	}
}
function schaar1(){
	img2.style.display = "none";
	heeftSchaar = true;
	if (heeftSchaar ==true) {
		p.innerHTML = "";
		p2.innerHTML = "Je hebt de schaar opgepakt";
		sch.style.display = "block";
	} 
}
function boem() {

	h1.innerHTML = "Je bent te lang in het vliegtuig gebleven, en het vliegtuig is ontploft";
	image.src = "img/afbeelding12.1.png";
	p.innerHTML = "";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
	img2.style.display = "none";
}
function buiten() {
	
	h1.innerHTML = "ergens in de jungle";
	image.src = "img/afbeelding11.jpg";
	option1.innerHTML = "Roep en zoek naar hulp";
	option1.setAttribute("onclick", "hulp()");
	option2.innerHTML = "Ga op verkenning in de jungle";
	option2.setAttribute("onclick", "jungle()");
	option3.innerHTML = "Ga terug het vliegtuig in";
	option3.setAttribute("onclick" ,"vliegtuig3()");
	p.innerHTML = "Je ziet dat je bent gecrasht in de jungle. Nergens zie je iets van de bewoonde wereld.";
	p2.innerHTML = "Je bent bang en hebt geen idee waar je vrienden zijn.";
	img2.style.display = "none";
}
function buiten2() {
	h1.innerHTML = "ergens in de jungle";
	image.src = "img/afbeelding11.jpg";
	option1.innerHTML = "Roep en zoek naar hulp";
	option1.setAttribute("onclick", "hulp()");
	option2.innerHTML = "Ga op verkenning in de jungle";
	option2.setAttribute("onclick", "jungle()");
	option3.innerHTML = "Ga terug het vliegtuig in";
	option3.setAttribute("onclick" ,"vliegtuig3()");
	p.innerHTML = "";
	p2.innerHTML = "";
}
function hulp() {
	h1.innerHTML = "ergens in de jungle";
	image.src = "img/afbeelding11.jpg";
	p.innerHTML = "Je roept naar hulp en kijkt goed om je heen.";	
	p2.innerHTML = "Even later hoor je ineens geritsel in de bosjes, je kijkt rustig...Je ziet een gedaante lopen met een speer!";
	option1.innerHTML = "Verstop jezelf achter bomen";
	option1.setAttribute("onclick", "boom()");
	option2.innerHTML = "Wacht op de persoon en roep om hulp";
	option2.setAttribute("onclick", "wacht()");
	option3.innerHTML = "";
}
function wacht() {
	h1.innerHTML = "Een pijl!!";
	image.src = "img/arrow2.png";
	p.innerHTML = "Je wacht totdat de persoon iets dichterbij komt maar op dat moment zie je een pijl op je af vliegen.";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
	heeftSchaar = false;
}
function boom() {
	h1.innerHTML = "Achter een boom";
	image.src = "img/afbeelding11.1.jpg";
	p.innerHTML = "Je bent gaan schuilen achter een boom";
	p2.innerHTML = "De persoon komt steeds dichterbij maar hij heeft je nog niet gezien.";
	option1.innerHTML = "Ren zo snel als je kunt weg";
	option1.setAttribute("onclick", "ren()");
	option2.innerHTML = "val de persoon aan";
	option2.setAttribute("onclick", "vecht()");
	if(heeftSchaar == true){
		option3.innerHTML = "val de persoon aan met je schaar";
		option3.setAttribute("onclick", "vecht2()");
	}
}
function ren() {
	h1.innerHTML = "Een pijl!!";
	image.src = "img/arrow2.png";
	p.innerHTML = "Je rent weg maar de persoon hoort het en schiet een pijl in je rug..";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function vecht() {
	sch.style.display = "none";
	h1.innerHTML = "In de jungle";
	image.src = "img/fist.jpg";
	p.innerHTML = "Je valt hem aan hij vecht terug totdat jullie elkaars gezicht zien";
	p2.innerHTML = "";
	p3.innerHTML = "";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "verhaal()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function vecht2(){
	heeftSchaar = false;
	sch.style.display = "none";
	h1.innerHTML = "In de jungle";
	image.src = "img/bloed3.jpg";
	p.innerHTML = "Je steekt hem met een schaar en raakt bewusteloos! Maar op dat moment kom je erachter wie het is...";
	p2.innerHTML = "Het is één van je vrienden waarmee je op vakantie zou gaan! Je schrikt en weet niet wat je moet doen.";
	option1.innerHTML = "Vlucht van alles";
	option1.setAttribute("onclick", "ren2()");
	option2.innerHTML = "Help je vriend";
	option2.setAttribute("onclick", "help()");
	option3.innerHTML = "";
}
function help() {
	h1.innerHTML = "Bij je vriend";
	image.src = "img/firstaid.jpg";
	p.innerHTML = "Je pakt zijn rugzak en vind een verbanddoos. Je helpt hem en langzaam word hij wakker.";
	p2.innerHTML = "Hij verbaast zich dat jij het was en vergeeft het je.";
	option1.innerHTML = "Vraag wat er allemaal is gebeurd";
	option1.setAttribute("onclick", "verhaal2()");
	option2.innerHTML = "";
}
function verhaal() {
	h1.innerHTML = "Ergens in de jungle";
	image.src = "img/afbeelding11.jpg";
	p.innerHTML = "Het is één van je vrienden waar je mee op vakantie ging! Jullie stoppen met vechten en hij begint te vertellen wat er allemaal is gebeurt.";
	p2.innerHTML = "Hij zegt dat hier een groep kanibalisten zijn en dat ze de 2 andere vrienden gevangen hebben genomen! Jullie besluiten om naar het kamp van de kanibalisten te gaan om ze te gaan bevrijden.";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "gevangenis1()");
}
function verhaal2() {
	h1.innerHTML = "Ergens in de jungle";
	image.src = "img/afbeelding11.jpg";
	p.innerHTML = "Hij zegt dat hier een groep kanibalisten zijn en dat ze de 2 andere vrienden gevangen hebben genomen! ";
	p2.innerHTML = "Jullie besluiten om naar het kamp van de kanibalisten te gaan om ze te gaan bevrijden.";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "gevangenis1()");
}
function ren2() {
	h1.innerHTML = "Een val!";
	image.src = "img/spijkers.png";
	p.innerHTML = "je rent weg maar er is een val in het bos!";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function jungle() {
	h1.innerHTML = "Bij een boomhut";
	image.src = "img/afbeelding13.jpg";
	p.innerHTML = "Na een tijdje lopen in de jungle zie je plotseling een boomhut.";
	option1.innerHTML = "Ga de boomhut in";
	option1.setAttribute("onclick", "boomhut()");
	option2.innerHTML = "Ga terug naar het vliegtuig";
	option2.setAttribute("onclick", "buiten2()");
	option3.innerHTML = "";
}
function jungle2() {
	h1.innerHTML = "Bij een boomhut";
	image.src = "img/afbeelding13.jpg";
	p.innerHTML = "";
	p2.innerHTML = "";
	option1.innerHTML = "Ga de boomhut in";
	option1.setAttribute("onclick", "boomhut()");
	option2.innerHTML = "Ga terug naar het vliegtuig";
	option2.setAttribute("onclick", "buiten2()");
	option3.innerHTML = "";
	img3.style.display = "none";
}
function pakTouw() {
	img3.style.display = "none";
	heeftTouw = true;
	if (heeftTouw == true) {
		p.innerHTML = "Je hebt het touw opgepakt";
		p2.innerHTML = "";
		tou.style.display = "block";
	}
}
function boomhut() {
	image.src = "img/afbeelding14.jpg";
	h1.innerHTML = "In de boomhut";
	p.innerHTML = "Je komt in de boomhut aan, je ziet een gebruikt kampvuur en iets dat op een bed moet lijken.";
	p2.innerHTML = "Ook zie je een touw liggen";
	option1.innerHTML = "Loop verder de boomhut in";
	option1.setAttribute("onclick", "net()");
	option2.innerHTML = "Ga uit de boomhut";
	option2.setAttribute("onclick", "jungle2()");
	img3.style.display = "block";
	img3.setAttribute("onclick", "pakTouw()");
	if (heeftTouw ==true) {
		img3.style.display = "none";
	}
}
function net() {
	h1.innerHTML = "Een net?!";
	image.src = "img/afbeelding15.jpeg";
	p.innerHTML = "De vloer breekt onder je en je beland in een net, het is een val!";
	p2.innerHTML = "Je schrikt en weet even niet wat je moet doen.";
	option1.innerHTML = "Probeer te ontsnappen";
	option1.setAttribute("onclick", "mensen()");
	option2.innerHTML = "Blijf zitten en wacht op hulp";
	option2.setAttribute("onclick", "mensen2()");
	if (heeftSchaar ==true) {
		option3.innerHTML = "Knip jezelf eruit met de schaar";
		option3.setAttribute("onclick", "mensen3()");
	}
	img3.style.display = "none";
}
function mensen() {
	h1.innerHTML = "In de jungle";
	image.src = "img/afbeelding17.png";
	p.innerHTML = "Je probeert te ontsnappen maar het lukt niet, ondertussen hoor je wat onder je. Het zijn mensen, ze halen de val naar beneden maar ze zijn hier niet om je te helpen!";
	p2.innerHTML = "Ze nemen je gevangen en laten je meelopen...";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "gevangenis2()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function mensen2() {
	h1.innerHTML = "In de jungle";
	image.src = "img/afbeelding17.png";
	p.innerHTML = "Je blijft zitten en wachten totdat er iets of iemand voorbij komt en dat gebeurt ook! Na een tijdje komt ineens een groep mensen voorbij, ze halen je naar beneden, maar je hebt door dat ze er niet zijn om je te helpen!";
	p2.innerHTML = "Ze nemen je gevangen en laten je meelopen...";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "gevangenis2()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function mensen3() {
	sch.style.display = "none";
	heeftSchaar = false;
	h1.innerHTML = "In de jungle";
	image.src = "img/afbeelding17.png";
	p.innerHTML = "Je knipt jezelf los! Daardoor val je hard naar beneden en heb je last van je enkel, maar dat is niet het grootste probleem.";
	p2.innerHTML = "Er staat ineens een grote groep mensen voor je met wapens! Ze nemen je gevangen en laten je meelopen...";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "gevangenis2()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function gevangenis1() {
	image.src = "img/afbeelding16.jpg";
	h1.innerHTML = "Bij de gevangenis";
	p.innerHTML = "Jullie zijn aangekomen bij het kannibalenkamp en zien de gevangenis.";
	p2.innerHTML = "Je twijfelt om op te gaan splitsen omdat het een groot kamp is.";
	option1.innerHTML = "splits op";
	option1.setAttribute("onclick", "splits()");
	option2.innerHTML = "blijf bij elkaar";
	option2.setAttribute("onclick", "blijf()");
}
function splits() {
	h1.innerHTML = "Een bewaker!";
	p.innerHTML = "Plotseling hoor je een bewaker achter je! Wat doe je?";
	p2.innerHTML = "";
	option1.innerHTML = "Ren snel weg";
	option1.setAttribute("onclick", "rennen()");
	option2.innerHTML = "Ga vechten";
	option2.setAttribute("onclick", "vechten()");
}
function rennen() {
	h1.innerHTML = "Hij schiet!";
	image.src = "img/bewaker2.png";
	p.innerHTML = "Je rent weg maar je de bewaker schiet al een pijl voordat je weg bent..";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
}
function vechten() {
	image.src = "img/bewaker2.png";
	h1.innerHTML = "Hij schiet!";
	p.innerHTML = "Voordat je bij de bewaker bent heeft hij al een pijl geschoten en ben je dood";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
}
function blijf() {
	image.src = "img/afbeelding16.jpg";
	h1.innerHTML = "Bij de gevangenis";
	p.innerHTML = "Nadat je samen naar de cellen aan het lopen bent zie je je vrienden zitten!";
	p2.innerHTML = "Ze zeggen dat je stil moet zijn want er is een bewaker dichtbij.";
	option1.innerHTML = "Bevrijd je vrienden meteen";
	option1.setAttribute("onclick", "cell()");
	option2.innerHTML = "Probeer de bewaker te vermoorden";
	option2.setAttribute("onclick", "vermoord1()");
	if (heeftSchaar == true) {
		option3.innerHTML = "Probeer de bewaker te vermoorden met de schaar";
		option3.setAttribute("onclick", "vermoord2()");
	}
}
function vermoord1() {
	image.src = "img/bewaker2.png";
	h1.innerHTML = "De bewaker ziet je!";
	p.innerHTML = "Je probeerde de bewaker te vermoorden maar hij was sterker en heeft je vermoord.";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function vermoord2() {
	sch.style.display = "none";
	heeftSchaar = false;
	image.src = "img/bloed3.jpg";
	h1.innerHTML = "Bij de bewaker";
	p.innerHTML = "Je sluipt op de bewaker af en je vermoord hem met je schaar!";
	p2.innerHTML = "";
	option1.innerHTML = "Ga je vrienden bevrijden";
	option1.setAttribute("onclick", "cell()");
	option2.innerHTML = "";
	option3.innerHTML = "";
}
function cell() {
	image.src = "img/afbeelding18.jpg";
	h1.innerHTML = "Bij de cell";
	p.innerHTML = "Je komt bij je vrienden aan. Je moet de tralies zien open te krijgen maar zo te zien is het niet heel moeilijk, want de schroeven zitten niet goed vast. Je draait ze los en de deur kun je openmaken.";
	p2.innerHTML = "Je ziet in de cell ernaast dat er nogmeer mensen zijn, maar die ken je niet.";
	option1.innerHTML = "Bevrijd de rest van de mensen";
	option1.setAttribute("onclick", "cell2()");
	option2.innerHTML = "Vlucht met je vrienden";
	option2.setAttribute("onclick", "ontsnapt()");
	option3.innerHTML = "";
}
function cell2() {
	if (heeftSchaar == true) {
		image.src = "img/bewaker2.png";
		p.innerHTML = "De bewaker heeft je gehoort hij schiet een pijl en heeft je vermoord.";
		option1.innerHTML = "Begin opnieuw";
		option1.setAttribute("onclick", "start()");
		h1.innerHTML = "Een bewaker!";
		option2.innerHTML = "";
		p2.innerHTML = "";
	}
	if (heeftSchaar == false) {
		image.src = "img/afbeelding16.jpg";
		h1.innerHTML = "Bij de gevangenis";
		p.innerHTML = "Je hebt de rest van de mensen bevrijd! Ze zijn je erg dankbaar.";
		option1.innerHTML = "Verlaat de gevangenis en ontsnap!";
		option1.setAttribute("onclick", "ontsnapt()");
		option2.innerHTML = "";
		p2.innerHTML = "";
	}
}
function gevangenis2() {
	h1.innerHTML = "In de cell";
	p.innerHTML = "De groep mensen doen een blinddoek bij je om en nemen je mee. Ze dragen je ongeveer 10 minuten totdat je blinddoek ineens word afgedaan. Je ziet een soort kamp van de mensen, ook zie je cellen! De mensen gooien je erin, Op dat moment zie je dat er nog meer mensen in de cel zitten waaronder 2 vrienden van jou waarmee je op vakantie ging! ";
	p2.innerHTML = "Ze vertellen dat ze na de crash al snel werden ontvoerd door die kannibalen en dat ze eerst met nog meer mensen waren, maar 4 mensen zijn al meegenomen om opgegeten te worden! Dus besluiten jullie om hier zo snel mogelijk weg zien te komen.";
	image.src = "img/afbeelding18.jpg";
	option1.innerHTML = "Doe niks";
	option1.setAttribute("onclick", "niks2()");
	if (heeftSchaar == true) {
		option2.innerHTML = "Gebruik je schaar om te ontsnappen";
		option2.setAttribute("onclick", "schaar()")
	}
	if (heeftTouw == true) {
		option3.innerHTML = "Gebruik je touw om te ontsnappen";
		option3.setAttribute("onclick", "touw()");

	}
	if (heeftSchaar ==true && heeftTouw ==true) {
		option4.innerHTML = "Gebruik je schaar en touw om te ontsnappen";
		option4.setAttribute("onclick", "beide()");
	}
}
function niks2() {
	image.src = "img/vuur.png";
	h1.innerHTML = "Kampvuur";
	p.innerHTML = "Je hebt te lang gewacht en de kanibalen komen je halen, je bent het avondeten geworden.";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
	option4.innerHTML = "";
}
function schaar() {
	sch.style.display = "none";
	heeftSchaar = false;
	image.src = "img/cell2.png";
	h1.innerHTML = "Een bewaker!";
	p.innerHTML = "Je probeert het slot te openen maar het duurt te lang en een bewaker ziet het!";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
	option3.innerHTML = "";
	option4.innerHTML = "";
}
function touw() {
	tou.style.display = "none";
	heeftTouw = false;
	image.src = "img/afbeelding16.jpg";
	h1.innerHTML = "In de cell";
	p.innerHTML = "Je pakt het touw en maakt het vast aan de deur, je gooit de rest van het touw naar de cell voor je en daar trekken de gevangenen eraan zodat de deur na een tijdje open gaat.";
	p2.innerHTML = "Nadat de deur open is hoor je in de verte een bewaker lopen.";
	option1.innerHTML = "Bevrijd de rest van de gevangenen";
	option1.setAttribute("onclick", "bevrijden1()");
	option2.innerHTML = "Verlaat de gevangenis met je vrienden";
	option2.setAttribute("onclick", "ontsnapt()");
	option3.innerHTML = "";
	option4.innerHTML = "";
}

function bevrijden1() {
	image.src = "img/bewaker2.png";
	h1.innerHTML = "Een bewaker!";
	p.innerHTML = "De bewaker ziet je en schiet je neer!";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
}
function beide() {
	sch.style.display = "none";
	tou.style.display = "none";
	heeftTouw = false;
	heeftSchaar = false;
	h1.innerHTML = "In de gevangenis";
	image.src = "img/afbeelding16.jpg";
	p.innerHTML = "Je maakt het touw vast aan je deur. Je gooit de rest van het touw naar de cell voor je, waardoor de gevangenen daar eraan kunnen trekken, jij maakt de schroeven al los met de schaar en zo gaat de deur snel open";
	p2.innerHTML = "De mensen in de gevangenis voor je vragen of ze er ook uit mogen";
	option1.innerHTML = "Bevrijd de rest";
	option1.setAttribute("onclick", "bevrijden2()");
	option2.innerHTML = "Ontsnap met je vrienden (laat de rest achter)";
	option2.setAttribute("onclick", "ontsnapt()");
	option3.innerHTML = "";
	option4.innerHTML = "";
}
function bevrijden2() {
	h1.innerHTML = "In de gevangenis";
	p.innerHTML = "Je helpt de rest van de mensen ontsnappen.";
	p2.innerHTML = "In de verte hoor je wel een bewaker aankomen maar jullie zijn optijd weg.";
	option1.innerHTML = "Ontsnap uit het kamp";
	option1.setAttribute("onclick", "ontsnapt()");
	option2.innerHTML = "";
}
function ontsnapt() {
	image.src = "img/afbeelding19.jpg";
	h1.innerHTML = "Ergens buiten het kanibalistenkamp";
	p.innerHTML = "Nadat je bent ontsnapt met je vrienden willen jullie hier zo snel mogelijk weg zien te komen, je rent door het bos heen totdat je uiteindelijk ver genoeg van de kannibalen bent.";
	p2.innerHTML = "";
	option1.innerHTML = "Volg de rivier";
	option1.setAttribute("onclick", "verder1()");
	option2.innerHTML = "Loop door de jungle";
	option2.setAttribute("onclick", "verder2()");
	option3.innerHTML = "";
	option4.innerHTML = "";
}
function verder1() {
	image.src = "img/afbeelding20.jpg";
	h1.innerHTML = "Ergens op een open vlakte";
	p.innerHTML = "Al een week lang hebben jullie gelopen en gelopen, jullie hebben honger en dorst. Ondertussen zijn jullie al uit de jungle en lopen nu op een grote groene vlakte met een aantal bomen.";
	p2.innerHTML = "Jullie hebben de hoop bijna opgegeven totdat je ineens een helikopter hoort. Jullie beginnen te schreeuwen en te juichen";
	option1.innerHTML = "Zwaai en schreeuw met z'n alle naar de helikopter.";
	option1.setAttribute("onclick", "zwaai()");
	option2.innerHTML = "Klim de boom in zodat ze je sneller zien";
	option2.setAttribute("onclick", "klim()");
}
function verder2() {
	image.src = "img/auto.jpeg";
	h1.innerHTML = "Bij een autoweg";
	p.innerHTML = "Al een week lang hebben jullie gelopen en gelopen, jullie hebben honger en dorst. Jullie hadden de hoop bijna opgegeven totdat jullie plotseling auto's horen!";
	p2.innerHTML = "Maar je weet niet zeker of je deze auto's wel moet vertrouwen...";
	option1.innerHTML = "Ren op het geluid af";
	option1.setAttribute("onclick", "auto1()");
	option2.innerHTML = "Blijf rustig in de bosjes afwachten";
	option2.setAttribute("onclick", "bosjes()");
}
function bosjes() {
	image.src = "img/weg.png";
	h1.innerHTML = "Bij de weg";
	p.innerHTML = "Je wacht rustig in de bosjes. De auto's rijden voorbij. Jullie eten en drinken is op dus overleven het niet.";
	p2.innerHTML = "";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "crash2()");
	option2.innerHTML = "";
}
function auto1() {
	h1.innerHTML = "Bij een autoweg";
	image.src = "img/auto.jpeg";
	p.innerHTML = "Jullie rennen de weg op en de auto's stoppen voor jullie en de mensen vragen wat er is gebeurd. Jullie vertellen alles en de mensen vragen of jullie mee willen rijden.";
	p2.innerHTML = "";
	option1.innerHTML = "Stap in";
	option1.setAttribute("onclick", "huis()");
	option2.innerHTML = "";
}
function huis() {
	h1.innerHTML = "Avontuur voorbij";
	image.src = "img/afbeelding22.jpg";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "einde()");
	p.innerHTML = "Jullie zijn naar de bewoonde wereld gebracht daarna hebben jullie meteen het vliegtuig genomen naar huis.";
	p2.innerHTML = "Jullie komen veilig aan en iedereen heeft jullie super erg gemist.";
	option2.innerHTML = "";
}
function zwaai() {
	h1.innerHTML = "De helikopter";
	p.innerHTML = "De helikopter ziet jullie! Hij land langzaam naast jullie en ze nemen jullie mee.";
	p2.innerHTML = "";
	image.src = "img/afbeelding21.jpg";
	option1.innerHTML = "Ga de helikopter in";
	option1.setAttribute("onclick", "helikopter()");
	option2.innerHTML = "";
}
function klim() {
	h1.innerHTML = "Bij de boom";
	p.innerHTML = "Je komt aan bij de boom en wilt omhoog klimmen, welke weg neem je?";
	p2.innerHTML = "";
	option1.innerHTML = "Snel maar gevaarlijk";
	option1.setAttribute("onclick", "pech()");
	option2.innerHTML = "Veilig maar langzaam";
	option2.setAttribute("onclick", "veilig()");
}
function pech() {
	image.src = "img/tak2.png";
	h1.innerHTML = "Bij de boom";
	p.innerHTML = "Je klimt omhoog maar er breekt een tak af en je beland met je nek op de grond, je bent dood";
	option1.innerHTML = "Begin opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
}
function veilig() { 
	h1.innerHTML = "Bovenin de boom";
	image.src = "img/afbeelding21.jpg";
	p.innerHTML = "De helikopter ziet je! Hij land rustig naast jullie en jullie kunnen instappen";
	p2.innerHTML = "";
	option1.innerHTML = "Stap in";
	option1.setAttribute("onclick", "helikopter()");
	option2.innerHTML = "";
}
function helikopter() {
	h1.innerHTML = "In de helikopter";
	image.src = "img/afbeelding22.jpg"
	p.innerHTML = "Jullie zitten al een tijdje in de helikopter en komen eindelijk aan bij de bewoonde wereld.";
	p2.innerHTML = "een aantal dagen later komen jullie weer thuis aan, iedereen heeft jullie super erg gemist en was erg bezorgt.";
	option1.innerHTML = "Verder";
	option1.setAttribute("onclick", "einde()");
}
function einde() {
	h1.innerHTML = "THE END";
	image.src = "img/end4.gif";
	p.innerHTML = "BEDANKT VOOR HET SPELEN!";
	p2.innerHTML = "Credits: Mats Verlinden";
	option1.innerHTML = "Speel opnieuw";
	option1.setAttribute("onclick", "start()");
	option2.innerHTML = "";
}