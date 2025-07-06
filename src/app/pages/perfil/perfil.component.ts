import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular"
import { Estudiante } from 'src/app/models/estudiante.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PerfilComponent implements OnInit {
  @Input() estudiante: Estudiante | undefined;

  constructor() { }
  ngOnInit() {
  }

}
