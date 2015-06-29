//Math.rand() devuelve un numero aleatorio entre 0 y 1
var num = Math.random();
var str = ' Mayor que 0,5';
if(num <= 0.5)
{
    str = 'Menor que 0,5';
}
console.log('/n'+ num+ str +'\n');
