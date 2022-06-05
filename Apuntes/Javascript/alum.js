
//Lista de Alumnos


class alumno {
  constructor(nombre, apellido, edad, ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad = ciudad;
  }
}

let alumno1 = new alumno("Amaia", "Lopez", 30, "La Rioja");
let alumno2 = new alumno("Agus", "Ferrando", 27, "Barcelona");
let alumno3 = new alumno("David", "Leon", 30, "Barcelona");
let alumno4 = new alumno("Andrea", "Bernardino", 24, "Calahorra");
let alumno5 = new alumno("David", "Cardona", 33, "Tudela");
let alumno6 = new alumno("Carmelo", "Li", 40, "La Rioja");
let alumno7 = new alumno("Karol", "Blandon", 30, "Tudela");

let totalAlumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7];
console.log(totalAlumnos);

for (let i = 0; i < totalAlumnos.length; i++) {
  nombre = totalAlumnos[i].nombre;
  apellido = totalAlumnos[i].apellido;
  edad = totalAlumnos[i].edad;
  ciudad = totalAlumnos[i].ciudad;
  document.querySelector("liceoCoders2022").innerHTML += `<div class="cards">Nombre: ${nombre}<br>
    Apellido: ${apellido}<br>
    Edad: ${edad}<br>
    Ciudad: ${ciudad}</div><br>`;
}
