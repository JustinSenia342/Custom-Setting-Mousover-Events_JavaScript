function randomMove(){

if (document.getElementById("smallj").checked)
{
	movebox.style.left = 3;
	movebox.style.left = (parseInt(movebox.style.left) + Math.floor((Math.random() * 10) - 5)) + "px";
	movebox.style.top = (parseInt(movebox.style.top) + Math.floor((Math.random() * 10) - 5)) + "px";
}
else if (document.getElementById("mediumj").checked)
{
	movebox.style.left = (parseInt(movebox.style.left) + Math.floor((Math.random() * 60) - 30)) + "px";
	movebox.style.top = (parseInt(movebox.style.top) + Math.floor((Math.random() * 60) - 30)) + "px";
}
else if (document.getElementById("bigj").checked)
{
	movebox.style.left = (parseInt(movebox.style.left) + Math.floor((Math.random() * 110) - 55)) + "px";
	movebox.style.top = (parseInt(movebox.style.top) + Math.floor((Math.random() * 110) - 55)) + "px";
}

}

function Mvr(x){
x.style.left = "55px";
}