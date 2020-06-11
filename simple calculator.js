function clrfun(val)
{
document.getElementById("d").value=val;
}
function btn1(val)
{
	document.getElementById("d").value+=val;
}
function btn2() 
{ 
try 
{ 
  clrfun(eval(document.getElementById("d").value)) 
} 
catch(btn2) 
{
  clrfun('Error') 
} 
}