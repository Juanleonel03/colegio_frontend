import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');
    const rolesPermitidos = route.data['roles'] as string[];

    if (token && rolesPermitidos.includes(rol || '')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
