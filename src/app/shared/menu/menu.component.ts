import { Component, OnInit } from '@angular/core';

interface menu{
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class MenuComponent implements OnInit {

  menu: menu[] = [
    { ruta: '/graficas/barra', texto: 'barra' },
    { ruta: '/graficas/barra-doble', texto: 'barra doble' },
    { ruta: '/graficas/dona', texto: 'dona' },
    { ruta: '/graficas/dona-http', texto: 'dona http' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
