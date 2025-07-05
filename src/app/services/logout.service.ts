import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root', 
})
export class ServicesCongif {

  constructor(private router: Router) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
