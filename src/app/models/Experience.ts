import { Characteristics } from "./Characteristics";
import { Technologies } from "./Technologies";

export class Experience{
     fechaInicio:string;
     fechaFinal:string;
     puesto:string;
     empresa:string;
     descripcion:string;
     caracteristicas:Characteristics[];
     tecnologias:Technologies[];

     constructor(){
        this.fechaInicio = "";
        this.fechaFinal = "";
        this.puesto = "";
        this.empresa = "";
        this.descripcion = "";
        this.caracteristicas = [];
        this.tecnologias = [];
     }
}