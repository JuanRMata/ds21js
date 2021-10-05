var b=prompt("Enter a value");
var a;
if(b==1)
{
    console.log("1");
}
else
{
    if(b>=1)
{
    a=Math.floor(Math.random()*b);
    console.log(a);
}
else
{
    console.log("The value needs to be greater than 0")
}
}