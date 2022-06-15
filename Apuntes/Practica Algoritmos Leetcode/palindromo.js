//solucion y explicación a los palindromos

var isPalindrome = function(x) {
  var s = '' + x;    // variable "s" igual a '' + la variable que nos da el ejercicio "x" 
  var l = 0;         // variable equivale a "0"
  var r = s.length - 1; // var "r" equivale a la longitud del array en este caso s.lenght "-" 1
  while (l < r) {     // mientras ("l sea menor que r") que en este caso es "si 0 es menor que r"
    if (s[l] !== s[r]) return false;  // Si ("la varible 0" es diferente completamente de r la ultima posicion del array en este caso la posicion 2 que equivale a 1 
    l++;              // ejecuta esta operacion que es a la variable l "0" le sumas para que sea igual a "r"
    r--;              // "r" resta hasta quedar igual a "l"
  }
  return true;        //retorna verdadero
};


