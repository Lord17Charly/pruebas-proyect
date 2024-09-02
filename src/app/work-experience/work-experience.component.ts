import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
workExperience : Array<any>=[];
ngOnInit(): void{
  let work1={
    fecha:"2021-2024",
    ubicacion:"Ixtac, Ver.",
    puesto: "INGENIERO",
    empresa: "IRONGIDE",
    logros:[
      {descripcion:"Construccion de inteligencia artificial avanzada para videojuegos"},
      {descripcion:"Construccion de motor de videojuegos basado en Godot3"}
    ]
  };
  let work2={
    fecha:"2021-2024",
    ubicacion:"Orizaba, Ver.",
    puesto: "INGENIERO",
    empresa: "TYASA",
    logros:[
      {descripcion:"Construcciode sistema de almacenado automatico"},
    {descripcion:"Detector automatico de control de calidad"}
    ]
  };
  this.workExperience.push(work1);
  this.workExperience.push(work2);
  console.log(this.workExperience);
}
}
