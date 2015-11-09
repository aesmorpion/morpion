/*mise en place du javascript du morpion*/
var i=0;
var click1=0;
var click2=0;
var tab1=[];
var tab2=[];

function toggle(elemId){
	var elem = document.getElementById(elemId);
	var result;
	
	if(i%2==1){
		if(elem.className== "table"){
			elem.className+=" rond";
			i++;
			click1++;
			tab1.push(elemId);
			victoire1(tab1);
		}
	}else{
		if(elem.className=="table"){
			elem.className+=" croix";
			i++;
			click2++;
			tab2.push(elemId);
			victoire2(tab2);
		}
	}	
}

function victoire1(){

}

function victoire2(){
	
}