import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesCongif } from 'src/app/services/logout.service';
import { IonicModule } from '@ionic/angular'


@Component({
  selector: 'app-dashboard-estudiante',
  templateUrl: './dashboard-estudiante.page.html',
  styleUrls: ['./dashboard-estudiante.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardEstudiantePage implements OnInit {

  constructor(private serviceConfig: ServicesCongif) {
  }

  ngOnInit() {
  }

  logout() {
    this.serviceConfig.logout();
  }


}
