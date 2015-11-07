/*mise en place du javascript du morpion*/
function toggle(elemId){
	var elem = document.getElementById(elemId);
	if(elem.className== "croix"){
		elem.className+=" rond";	
	}
	else if(elem.className=="rond"){
		elem.className+=" croix";
	}
}