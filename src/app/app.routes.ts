import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
/*   {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  }, */
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'dashboard-administrativo',
    loadComponent: () => import('./pages/dashboard-administrativo/dashboard-administrativo.page').then(m => m.DashboardAdminPage),
    canActivate: [AuthGuard],
    data: { roles: ['Administrativo'] },
  },
  {
    path: 'dashboard-profesor',
    loadComponent: () => import('./pages/dashboard-profesor/dashboard-profesor.page').then(m => m.DashboardProfesorPage),
    canActivate: [AuthGuard],
    data: { roles: ['Profesor', 'Administrativo'] },
  },
  {
    path: 'dashboard-estudiante',
    loadComponent: () => import('./pages/dashboard-estudiante/dashboard-estudiante.page').then(m => m.DashboardEstudiantePage),
    canActivate: [AuthGuard],
    data: { roles: ['Estudiante', 'Profesor', 'Administrativo'] },
  },
  {
    path: 'crear-alumno',
    loadComponent: () => import('./pages/crear-alumno/crear-alumno.page').then(m => m.CrearAlumnoPage),
    canActivate: [AuthGuard],
    data: { roles: ['Profesor', 'Administrativo'] },
  },
  {
    path: 'crear-profesor',
    loadComponent: () => import('./pages/crear-profesor/crear-profesor.page').then(m => m.CrearProfesorPage),
    canActivate: [AuthGuard],
    data: { roles: ['Profesor', 'Administrativo'] },
  },
  {
    path: 'crear-curso',
    loadComponent: () => import('./pages/crear-curso/crear-curso.page').then(m => m.CrearCursoPage),
    canActivate: [AuthGuard],
    data: { roles: ['Profesor', 'Administrativo'] },
  },
  {
    path: 'matricular-estudiante',
    loadComponent: () => import('./pages/matricular-estudiante/matricular-estudiante.page').then(m => m.MatricularEstudiantePage),
    canActivate: [AuthGuard],
    data: { roles: ['Estudiante','Profesor', 'Administrativo'] },
  },
];
