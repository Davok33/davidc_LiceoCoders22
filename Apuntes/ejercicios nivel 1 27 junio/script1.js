// ejercicio 1
function fullName(){
    return "David Cardona"
}
console.log(fullName())

// ejercicio 2
function fullName2(firstName, lastName){
    return firstName + " " + lastName;
}
console.log("David", "Cardona")

// ejercicio 3
function addNumbers (a, b){
    return a + b
}
console.log(addNumbers(22, 33))

// ejercicio 4
function areaOfRectangle (largo, ancho){
    let area = largo * ancho
    return area 
}
console.log(areaOfRectangle(12, 10))

// ejercicio 5
function perimetroRectangulo(largo, ancho){
    let perimetro = largo + ancho ;
    return perimetro * 2;
}
console.log(perimetroRectangulo(5, 5))

//ejercicio 6
function volumenDeRectPrism(largo, ancho, alto){
    let volPrismaRect = largo * ancho * alto;
    return volPrismaRect;
}
console.log(volumenDeRectPrism(12, 22, 33))

//ejercicio 7
function areaOfCircle (r){
    let area = Math.PI * r * 2
    return area
}
console.log(areaOfCircle(2))

//ejercicio 8
function circumOfCircle(r){
    let circumferencia = 2 * Math.PI * r
    return circumferencia
}
console.log(circumOfCircle(1))

//ejercicio 9
function densidad(masa, volumen){
    let densi = masa / volumen;
    return densi;
}
console.log(densidad(10, 2));

//ejercicio 10
function velocidad(distancia, tiempo){
    let velo = distancia / tiempo;
    return velo;
}
console.log(velocidad(120, 12) + "mts/s");

//ejercicio 11
function peso(masa, gravedad){
    let pes = masa * gravedad;
    return pes;
}
console.log(peso(11, 3));

//ejercicio 12
function gradosCentigradosEnFar(gradosCelsius){
    let farenheit = (gradosCelsius * 9/5);
    return farenheit + 32;
}
console.log(gradosCentigradosEnFar(20))

//ejercicio 13
function calcularImc(p, alt){
    let bmi = p / Math.pow(alt, 2); //formula del calculo
    if (bmi < 18.5){   // se le da condicion si el resultado pasado en los parametros es menor que 18.5 returna ese
        return "Tienes un " + bmi + " Tienes bajo peso"
    }
        else if(bmi > 18.5 && bmi < 24.9){          // condicion 2 si el bmi es mayor que 18.5 "Y" bmi es menor que 24.9 returna esto
        return "Tienes un " + bmi + " Tienes peso normal"
    }
        else if(bmi >= 25 && bmi < 29.9){  // condi 3 si bmi es mayor o igual a 25 "Y" bmi es menor que 29.9 returna esta
        return "Tienes un " + bmi + " Estas con sobrepeso"
    }
        else {                      // o si es no se cumplen ninguna de las otras condiciones y en este caso el numero del bmi es mayor que 29.9 se cumple esta
        return "Tienes un " + bmi + " Estas obeso"
    }

}
console.log(calcularImc(50, 1.70)) // peso en kg y la altura en decimales ejemplo 1.70m

//ejercicio 14
function checkSeason(){
    if(month === 'marzo' || month === 'abril' || month === 'mayo') {
        return "Primavera"
        } else if(month === 'junio' || month === 'agosto' || month === 'julio') {
           return "Verano"
        } else if (month === 'septiembre' || month === 'octubre' || month === 'noviembre') {
           return "Otoño"
        } else if ( month === 'diciembre' || month === 'enero' || month === 'febrero') {
            return "Invierno"
        }
}
let month = 'junio'         // escribir el mes aca
console.log(checkSeason(month)) 

//ejercicio 15


function findMax(array){
   let numbers = array[0];
   for (let i = 1; i < array.length; i++){
    if (array[i] > numbers) 
    numbers = array[i];
   }
   return numbers;
}
console.log(findMax([6, 10, 5]));
