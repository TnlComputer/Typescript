console.log("hola Jorge");
console.log("adios Jorge");


// esto es un commentario en TS

/**
 *  Esto es un comentario multilinea
 * 
 */


// Declaracion de Variables:
var nombre = "Martin";
console.log("hola, " + nombre );

//  si  le asignamos a la variable el tipo de dato seria asi. Seria string
var nombre: string = "Martin";


let nombre1 = "Jorge";  // variable local
console.log("¿que tal", nombre1 , "?");

const nombre2 = "Gustavo";  // constante 
console.log(`¡Como ha ido las vacaciones, ${nombre2}`);


const PI: number = 3.1416;

var apellidos: any = "Martinez";
apellidos = 3;

// var error: boolean = false; 

var error : boolean;
error =  false;
// siempre acostumbrar a definir el tipo de datos de la variable, porque sino puede ser any y despues tengamos problemas en el futuro

console.log(`¿hay error?: ${error}`);

// Instanciacion multiple de variables

let a:string, b:boolean, c:number; // instancia 3 variables sin valor inicial

a= "Typescript";
b=true;
c=8.9;

//  Builtin Type: number, string, boolean, void, null y undefined

// Tipos mas complejos
let listaTareas: string[] =  ["Tarea 1", "Tarea 2"];


// Combinacion de tipos en listas
let valores: (string | number | boolean)[] = [ false, "Hola", true, 56];


// Enumerados

enum Estados {
  "completado" = "C",
  "incompleto" = "I",
  "pendiente" = "P"
}

let estadoTarea: Estados = Estados.completado;


enum PuestoCarrera {
  "Primero" = 1, 
  "Segundo",
  "Tercero"
}

let puestoCarrera: PuestoCarrera = PuestoCarrera.Segundo;


//  Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// podemos crear variable que sigan la interface Tarea

let tarea1: Tarea = {
nombre: "Tarea 1",
estado: Estados.pendiente,
urgencia: 10
}


console.log(`Tarea: ${tarea1.nombre}`);

// Type de Typescript
type Producto = {
  precio: number,
  nombre: string,
  anio: number
}


let coche : Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2010
}

// ** condicionales
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` :  `Coche: ${coche.nombre} es nuevo` );

// if - else if - else
if (error ){}


