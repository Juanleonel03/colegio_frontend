import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.page.html',
  styleUrls: ['./crear-alumno.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CrearAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
