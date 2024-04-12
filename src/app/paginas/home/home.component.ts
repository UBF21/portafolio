import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experiencies: Experience[] = [];

  constructor() { }

  ngOnInit(): void {

    this.experiencies = [
      {
        fechaInicio: "Agosto 2023",
        fechaFinal: "Diciembre 2023",
        empresa: "CA Sistemas",
        puesto: "Analista Programador",
        descripcion: `Mi trabajo se centraba en el
        análisis ,construcción,mantenimiento y soporte de los
        requerimientos solicitados por los clientes en los sistemas
        que brinda la empresa.`,
        caracteristicas: [
          { descripcion: 'Desarrollo de UI.' },
          { descripcion: 'Desarrollo de Procedimientos Almacenados (SqlServer).' },
          { descripcion: 'Desarrollo de Querys para consultas del sistema.' }
        ],
        tecnologias: [
          { descripcion: 'C#' },
          { descripcion: 'Javascript' },
          { descripcion: 'Sql' },
          { descripcion: '.Net MVC' },
          { descripcion: 'Dapper' },
          { descripcion: 'Ado.net' },
          { descripcion: 'SqlServer' },
          { descripcion: 'HTML5' },
          { descripcion: 'Bootstrap' },
          { descripcion: 'CSS' },
          { descripcion: 'REST Api' },
          { descripcion: '.Net Core' }
        ]
      },
      {
        fechaInicio: "Enero 2024",
        fechaFinal: "Actualmente",
        puesto: "Programador",
        empresa: "GLOBALTPA Soluctions",
        descripcion: `Mi Trabajo se en el
        análisis ,construcción,mantenimiento y soporte de los
        requerimientos solicitados por los clientes en los sistemas
        que brinda la empresa.`,
        caracteristicas:[
          {descripcion : "Desarrollo de UI."},
          {descripcion : "Desarrollo de Procedimientos Almacenados (SqlServer)."},
          {descripcion : "Desarrollo de Querys."},
          {descripcion : "Desarrollo de Módulos del sistema."}
        ],
        tecnologias:[
          { descripcion: 'C#' },
          { descripcion: 'Javascript' },
          { descripcion: 'Sql' },
          { descripcion: '.Net MVC' },
          { descripcion: 'Ado.net' },
          { descripcion: 'SqlServer' },
          { descripcion: 'HTML5' },
          { descripcion: 'Bootstrap' },
          { descripcion: 'CSS' },
          { descripcion: 'REST Api' },
          { descripcion: '.Net Core' }
        ]
      }
    ]
  }

}
