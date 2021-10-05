const map=new Map();
function nombreAleatorio()
{
    var Numeros,promedio,suma=0;
    for(var c=0;c<=6;c++)
    {
        timeIn=performance.now();
        for(var contador=0;contador<100000;contador++)
        {
            Numeros=Math.floor(Math.random()*100000);
            map.set(contador,"Name"+Numeros);
        }
        timeEnd=performance.now();
        timeF=timeEnd-timeIn;
        suma+=timeF;
    }
    promedio=suma/7;
    console.log(map);
    console.log("El promedio de tiempo de 7 veces de ejecución es "+promedio);
}
console.log(nombreAleatorio());