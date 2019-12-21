
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



window.onload = function()
{
	var x = document.getElementsByClassName("Slide");
	var size = x.length;
	var I = 0;

	function MoveSlide()
	{
		for (var i = 0; i < size; i++)
		{
			x[i].style.display = "none";
		}
		if(I==-1) I=size-1;
		if(I==size) I=0;
		x[I].style.display = "flex";
		I++;
		setTimeout(MoveSlide,6000);
	}

	MoveSlide();
}

$(document).ready(function()
{
	$('button').on('click tap', function(e)
	{
		var x = document.getElementsByClassName("Slide");
		var size = x.length;
		var i = 0,a = $(this).data("v");
		for (; i < size && x[i].style.display == "none"; i++);
		x[i].style.display = "none";
		if (i+a == size) i=0;
		else if (i+a == -1) i=size-1;
		else i+=a;
		x[i].style.display = "flex";
	});
});

function NextSlide(a)
{
	for (var i = size - 1; i >= 0; i--)
	{
		x[i].style.display = "none";
	}
	if(I+a==-1) I=size-1;
	else if(I+a==size) I=0;
	else I+=a;
	x[I].style.display = "flex";
}

