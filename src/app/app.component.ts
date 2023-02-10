import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPortafolioWeb';
  seDesplego:boolean = false;

  cambiar(){
    this.seDesplego = !this.seDesplego;
  }
}

