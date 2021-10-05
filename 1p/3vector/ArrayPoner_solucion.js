var a=[0,0,0,0,0,0,0,0];
var b=prompt("Enter the position that you want to change");
var c=prompt("Enter the value");
if(b<0 || b>a.length)
{
    console.log("The value needs to be between 0 and "+a.length);
}
else
{
    console.log(a);
    a[b]=c;
    console.log(a);
}