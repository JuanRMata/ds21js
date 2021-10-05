var a=[1,2,3,4,5,6,7,8,9];
var b=prompt("Enter the position you want to erase");
if(b<0 || b>a.length)
{
    console.log("The position needs to be between 0 and "+a.length);
}
else
{
    console.log(a);
    a[b]=0;
    console.log(a);
}