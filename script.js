function izracun(){
	var prijedenikm =document.getElementById("prijedenikm").value;
	var natocenoGorivo = document.getElementById("natoceno").value;
	var cijenagoriva = document.getElementById("cijenalgoriva").value;
	var cijenaplina = document.getElementById("cijenalplina").value;
	var rezultat = prijedenikm / (natocenoGorivo/cijenagoriva);

	document.getElementById("ispisRezultata").innerHTML = rezultat.toFixed(2) + " l/km";

	var potrosnjaPlin = rezultat + (rezultat * 0.10);
	
	document.getElementById("potrosnjaPlina").innerHTML = potrosnjaPlin.toFixed(2) + " l/km";

	var cijenaVoznjeNaPlin =(prijedenikm / potrosnjaPlin) * cijenaplina;

	document.getElementById("cijnaVoznjeNaPlin").innerHTML = cijenaVoznjeNaPlin.toFixed(2) + " kn";
}


