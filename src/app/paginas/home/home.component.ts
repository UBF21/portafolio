import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { Technologies } from 'src/app/models/Technologies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experiencies: Experience[] = [];
  tecnologias: Technologies[] = [];

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

    this.tecnologias = [
      {
        descripcion: "Angular",
        icon: "devicon-angular-plain colored"
      },
      {
        descripcion: "C#",
        icon:"devicon-csharp-plain colored"
      },
      {
        descripcion:"SqlServer",
        icon:"devicon-microsoftsqlserver-plain colored"
      },
      {
        descripcion:"MySql",
        icon:"devicon-mysql-original colored"
      },
      {
        descripcion:"Javascript",
        icon:"devicon-javascript-plain colored"
      },
      {
        descripcion:"Java",
        icon:"devicon-java-plain colored"
      },
      {
        descripcion:"CSS",
        icon:"devicon-css3-plain colored"
      },
      {
        descripcion:",Net Core",
        icon:"devicon-dotnetcore-plain colored"
      },
      {
        descripcion:"Git",
        icon:"devicon-git-plain colored"
      },
      {
        descripcion:"HTML",
        icon:"devicon-html5-plain colored"
      },
      {
        descripcion:"Intellij",
        icon:"devicon-intellij-plain colored"
      },
      {
        descripcion:"Jquery",
        icon:"devicon-jquery-plain colored"
      },
      {
        descripcion:"Postman",
        icon:"devicon-postman-plain colored"
      },
      {
        descripcion:"Spring",
        icon:"devicon-spring-original colored"
      },
      {
        descripcion:"Typescript",
        icon:"devicon-typescript-plain colored"
      },
      {
        descripcion:"Bootstrap",
        icon:"devicon-bootstrap-plain colored"
      },
      {
        descripcion:"Do-Net",
        icon:"devicon-dot-net-plain colored"
      },
      {
        descripcion:"Ngrx",
        icon:"devicon-ngrx-plain colored"
      }
    ]
  }

}
