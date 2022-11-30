import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public edad: string;
  public dni: number;


  public socios = [{ nombre: 'Juan', apellido: 'Eduardo', edad: 39, dni: 344752121 },
  { nombre: 'Martin', apellido: 'Rodriguez', edad: 29, dni: 344752120 },
  { nombre: 'Manuela', apellido: 'Santalla', edad: 28, dni: 344752122 },
  { nombre: 'Laura', apellido: 'Rodriguez', edad: 62, dni: 14285479 },
  { nombre: 'Guillermina', apellido: 'Alvarez', edad: 36, dni: 14789542 }]

  constructor() { }

  ngOnInit(): void {
  }

}
