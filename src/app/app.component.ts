import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appPortafolioWeb';
  seDesplego:boolean = false;

  cambiar(){
    this.seDesplego = !this.seDesplego;
  }

  ngOnInit(): void {
  }
}

