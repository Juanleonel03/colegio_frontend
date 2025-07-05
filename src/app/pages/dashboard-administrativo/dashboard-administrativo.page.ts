import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'
import { ServicesCongif } from 'src/app/services/logout.service';

@Component({
  selector: 'app-dashboard-administrativo',
  templateUrl: './dashboard-administrativo.page.html',
  styleUrls: ['./dashboard-administrativo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DashboardAdminPage implements OnInit {



  constructor(private serviceConfig: ServicesCongif, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.serviceConfig.logout();
  }


}
