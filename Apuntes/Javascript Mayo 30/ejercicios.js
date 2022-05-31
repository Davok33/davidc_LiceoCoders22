function perimetro(radio){

    return Math.PI * radio * 2;
 }

 console.log(perimetro(10));


 function area(radio){
    return Math.PI * radio ** 2 /* o tambien radio * radio  */
 }
 console.log(area(20)) /* aca que me imprima en la consola el area dependiendo del valor que le de */

 /* otra forma de hacer introduciendo el valor */
 const pi = Math.PI //con a constante no se puede modificar el valor de variable
	var a,radio; //llaman nombre las variables a y radio
	radio = parseFloat(prompt("Ingresar el radio")); /* parseFloat devuelve el string como flotante y prompt ontiene un cuadro de texto de una línea, un botón Cancel (Cancelar) un botón OK (Aceptar), y devuelve el texto*/
	a = pi*radio*radio; //a es igual a pi * radio que es lo mismo pi ** radio
	alert("El área es " + a);

    function calcArea()
        {

        /* CALCULAR BASE DEL CUADRADO DADO EL AREA */    
     let area, base, altura; /* se definen tres variables */
            base = prompt("Coloca la base"); /*  con prompt nos muestra el texto que define colocar base */
            altura = prompt("Coloca la altura");
            base = parseInt(base); /*  aca nos transforma el texto en numero para poner la base */
            altura = parseInt(altura); /*  aca nos transforma el texto en numero para poner la altura */
            area = (base * altura); /* se hace la operación que es base * altura y esta a su vez multiplica
            lo numeros introducidos */
            alert("El area del cuadrado es:" + area); /*  nos muestra en una alerta el resultado */
        }
        /* <form name="form1">
        <input type="button" value="calcular" onclick=Area()>     ------   se crea un input que sea del tipo boton llamando la funcion en el evento onclick para que nos muestre en pantalla el resultado
     </form> */

     function calcHipotenusa() //ponemos la funcion y el nombre de ella
     {
         let lado_a, lado_b, hipotenusa;   //declaramos las 3 variables
         lado_a = parseFloat ("lado a"); //el parseFloat nos devuelve el numero de un string como flotante,
         lado_b = parseFloat ("lado b");
          return hipotenusa = Math.hypot(cuadrado(lado_a) + cuadrado(lado_b)); // esta es la operacion para sacar la hipotenusa Math.hypot es la operacion
        alert("la hipotenusa es" + hipotenusa);
     }
	//damos los valores con html para sacar los numeros
 /* <form name="form1">
        <input type="button" value="calcular" onclick=Area()>     ------   se crea un input que sea del tipo boton llamando la funcion en el evento onclick para que nos muestre en pantalla el resultado
     </form> */

     
