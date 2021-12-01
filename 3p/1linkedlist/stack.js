//Mata Quintero Juan Rodrigo

t0=performance.now();
var pila=new Stack();
for(var contador=0;contador<10000;contador++)
{
    pila.push(Math.floor(Math.random()*10000));
}
t1=performance.now();
tp1=t1-t0;
console.log(pila);
console.log("El tiempo transcurrido fue "+tp1);
function Stack()
{
    this.dataStore = [];
    this.top = 0;
    this.push = push;
}
function push(element) 
{
    this.dataStore[this.top++] = element;
}
class LListItem 
{
    constructor(value,next) 
    {
        this.value=value;
        this.next=next;

    }
}
class LList 
{
    constructor()
    {
        this.head=null;
    }
    prepend(value)
    {
        const newItem=new LListItem(value,this.head);
        this.head=newItem;
    }
}

t2=performance.now();
var llista=new LList();
for(var conta =0;conta<10000;conta++)
{
    llista.prepend(Math.floor(Math.random()*10000));
}
t3=performance.now();
tp2=t3-t2;
console.log(llista);
console.log("El tiempo transcurrido fue "+tp2);