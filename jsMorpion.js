/*mise en place du javascript du morpion*/
function toggle(elemId){
	var elem = document.getElementById(elemId);
	var result;
	var i=0;
	if(i==1){
		if(elem.className== "table"){
			elem.className+=" rond";
			i++;	
			alert(i);
		}
	}else{
		if(elem.className=="table"){
			elem.className+=" croix";
			i++;
			alert(i);
		}
	}	
}