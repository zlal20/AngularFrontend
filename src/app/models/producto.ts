
//exportamos la clase
export class Producto{

//campos de la base de datos
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;

//variables inicializadas con un constructor

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number){

    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio ;




        }




}