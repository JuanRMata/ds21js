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
function seleccion()
{
    var arreglo=a;
    var length=arreglo.length,indexmin;
    for(var i=0;i<length-1;i++)
    {
        indexmin=i;
        for(var j=i;j<length;j++)
        {
            if(arreglo[indexmin]>arreglo[j])
            {
                indexmin=j;
            }
        }
        if(i!==indexmin)
        {
            swap(arreglo,i,indexmin);
            paso++;
        }
    }
    return arreglo;
}
function swap(a,b,c)
{
    var aux=a[b];
    a[b]=a[c];
    a[c]=aux;
}
function tiempo()
{
    var tiempo=t1-t0;
    return tiempo;
}
t1=performance.now();
console.log("Numeros sin ordenar:   \n"+a);
console.log("\n \n \nNumeros ordenados:   \n"+seleccion());
console.log("\n Los pasos realizados fueron "+paso);
console.log("\n El tiempo que tomó fue "+tiempo()+" ms");