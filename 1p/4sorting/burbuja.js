var a=[];
var paso=0;
t0=performance.now();
function aleatorio()
{
    var b=Math.floor(Math.random()*10000);
    return b;
}
for(var contador=0;contador<10000;contador++)
{
    a[contador]=aleatorio();
}
function bubblesort()
{
    arreglo=a;
    var length=arreglo.length;
    for(var i=0;i<length;i++)
    {
        for(var j=0;j<length-1;j++)
        {
            if(a[j]>a[j+1])
            {
                swap(a,j,j+1);
                paso++;
            }
        }
    }
    return arreglo;
}
function swap(a,index1,index2)
{
    var aux=a[index1];
    a[index1]=a[index2];
    a[index2]=aux;
}
function tiempo()
{
    var tiempo=t1-t0;
    return tiempo;
}
t1=performance.now();
console.log("Numeros sin ordenar:   \n"+a);
console.log("\n \n \n Numeros ordenados:   \n"+bubblesort());
console.log("\n Los pasos realizados fueron "+paso);
console.log("\n El tiempo que tomó fue "+tiempo()+" ms");