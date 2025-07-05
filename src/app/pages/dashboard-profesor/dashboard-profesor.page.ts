import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesCongif } from 'src/app/services/logout.service';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-dashboard-profesor',
  templateUrl: './dashboard-profesor.page.html',
  styleUrls: ['./dashboard-profesor.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DashboardProfesorPage implements OnInit {


  constructor(private serviceConfig: ServicesCongif) {
  }

  ngOnInit() {
  }

  logout(){
    this.serviceConfig.logout();
  }
}
