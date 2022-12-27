function  myBtn() {
	document.getElementById('demo').innerHTML = "hello world";
}

function changeColor(){
	var text = document.getElementById("demo2");
	var button = document.getElementById("btn");

	if (x==0){
		text.style.color = "red";
		button.innerHTML = "Blue Text"
		x = 1;
	}else if (x==1){
		text.style.color = "blue";
		button.innerHTML = "Red Text"
		x=0;
	}
}

var x = 0;