document.addEventListener('Stick Menu', function()
{
	window.onscroll = function() {Stick()};

	var navbar = document.getElementById("Menu");
	var top = navbar.offsetTop;

	function Stick()
	{
	  if(window.pageYOffset >= top)
	  	navbar.classList.add("Sticky");
	  else
	    navbar.classList.remove("Sticky");
	}


});
function MoveSlide(a,b,x)
{
	var size = x.length;
	if(a==-1) a=size-1;
	if(b==size) b=0;
	x[a].style.display = "none";
	x[b].style.display = "flex";


	setTimeout(MoveSlide,6000,b,b+1,x);
}
window.onload = function()
{
	var Index = 0;
	var x = document.getElementsByClassName("Slide");
	MoveSlide(3,4,x);
}