/*mise en place du javascript du morpion*/
var i=0;
function toggle(elemId){
	var elem = document.getElementById(elemId);
	var result;
	
	if(i%2==1){
		if(elem.className== "table"){
			elem.className+=" rond";
			i++;	
		}
	}else{
		if(elem.className=="table"){
			elem.className+=" croix";
			i++;
		}
	}	
}