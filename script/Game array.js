// Random Hira, kiem tra phien am Roma
	var Hira=["あ","い","う","え","お"];
	var Roma=["a","i","u","e","o"];
function hienthi(){

	rand = Hira[Math.floor(Math.random()*Hira.length)]
	document.getElementById("display").innerHTML = rand;
	que = rand;
}

function kiemtra(){
	ans = document.getElementById("txtin").value;
	if (que==Hira[0]){
		if(ans==Roma[0] || ans==Roma[0].toUpperCase()){
			dung();
		}
		else{
			sai();
		}
	}
	if (que==Hira[1]){
		if(ans==Roma[1] || ans==Roma[1].toUpperCase()){
			dung();
		}
		else{
			sai();
		}
	}
	if (que==Hira[2]){
		if(ans==Roma[2] || ans==Roma[2].toUpperCase()){
			dung();
		}
		else{
			sai();
		}
	}
	if (que==Hira[3]){
		if(ans==Roma[3] || ans==Roma[3].toUpperCase()){
			dung();
		}
		else{
			sai();
		}
	}
	if (que==Hira[4]){
		if(ans==Roma[4] || ans==Roma[4].toUpperCase()){
			dung();
		}
		else{
			sai();
		}
	}
}

function dung(){
	document.getElementById("dung").style.display="block";
	document.getElementById("sai").style.display="none";
}
function sai(){
	document.getElementById("sai").style.display="block";
	document.getElementById("dung").style.display="none";
}