function text_onmouseover_1(object){
	object.style.background='rgb(244,186,147)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(1번박스)
function text_onmouseout_1(object){
	object.style.background='rgb(251,229,215)';
}//마우스아웃(1번박스)
function text_onmouseover_2(object){
	object.style.background='rgb(244,186,147)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(2번박스)
function text_onmouseout_2(object){
	object.style.background='rgb(248,203,172)';
}//마우스아웃(2번박스)
function text_onmouseover_3(object){
	object.style.background='rgb(240,150,89)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(3번박스)
function text_onmouseout_3(object){
	object.style.background='rgb(244,177,132)';
}//마우스아웃(3번박스)
function url_1(){
		alert("테스트2입니다요.");
}
function url_2(){
		alert("테스트2입니다요.");
}
function url_3(){
		alert("테스트2입니다요.");
}

function countdown(){
	var count = 10;
	var counter = setInterval(timer, 1000);
	count--;

	if (count<=0){
		clearInterval(counter);
		document.write("카운트다운 끝~!")
		return;
	}

}
