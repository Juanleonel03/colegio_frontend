import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-matricular-estudiante',
  templateUrl: './matricular-estudiante.page.html',
  styleUrls: ['./matricular-estudiante.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MatricularEstudiantePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
