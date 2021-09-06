window.onload = function() {
  showresult();
};



function showresult(){

var ls = new Array;
ls[0] = 0;
ls[1] = document.getElementById("list1").value;
ls[2] = document.getElementById("list2").value;
ls[3] = document.getElementById("list3").value;
ls[4] = document.getElementById("list4").value;
ls[5] = document.getElementById("list5").value;
ls[6] = document.getElementById("list6").value;
ls[7] = document.getElementById("list7").value;
ls[8] = document.getElementById("list8").value;
ls[9] = document.getElementById("list9").value;

var selected = 0;

for(i=1; i<=9; i++)
{
	if(ls[i]>0)	selected++;
}

var sum = 0;

sum = +ls[1] + +ls[2] + +ls[3] + +ls[4] + +ls[5] + +ls[6] + +ls[7] + +ls[8] + +ls[9];
var sumPercent = sum + "%";
avg = sum/9;
var avgFixed = avg.toFixed(2) + "%";

if(selected<9){
	avgFixed = "Select All";
	document.getElementById("result2").style.color = "#bf6352";
}
else
{
	document.getElementById("result2").style.color = "white";
}

document.getElementById('result').value=sumPercent;
document.getElementById('result2').value=avgFixed;

}

function reset()
{
	location.reload();
}