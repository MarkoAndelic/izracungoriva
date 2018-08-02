function izracun(){
	var prijedenikm =document.getElementById("prijedenikm").value;
	var natocenoGorivo = document.getElementById("natoceno").value;
	var cijenagoriva = document.getElementById("cijenalgoriva").value;
	var rezultat = prijedenikm / (natocenoGorivo/cijenagoriva);

	document.getElementById("ispisRezultata").innerHTML = rezultat;

	var potrosnjaPlin = rezultat + (rezultat * 0.10);
	
	document.getElementById("plincijena").innerHTML = potrosnjaPlin;
}

